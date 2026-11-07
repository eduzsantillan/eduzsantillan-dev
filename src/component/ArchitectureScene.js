import { useEffect, useRef, useState } from "react";

// An isolated, progressively enhanced artwork. The page remains fully usable
// without WebGL or a network connection; the CSS sculpture is always available.
export default function ArchitectureScene({ paused = false }) {
  const host = useRef(null);
  const pausedRef = useRef(paused);
  const [ready, setReady] = useState(false);
  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => {
    const container = host.current;
    let disposed = false;
    let cleanup = () => {};
    const init = async () => {
      try {
        // Pin the optional renderer and load it separately from the main bundle.
        const THREE = await import(/* webpackIgnore: true */ "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js");
        if (disposed) return;
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
        camera.position.set(0, 0, 7.8);
        const sculpture = new THREE.Group();
        scene.add(sculpture);
        const material = new THREE.MeshStandardMaterial({ color: 0xbbeaa2, metalness: 0.55, roughness: 0.34 });
        const darkMaterial = new THREE.MeshStandardMaterial({ color: 0x203c29, metalness: 0.65, roughness: 0.4 });
        const ringGeometry = new THREE.TorusGeometry(1.63, 0.016, 7, 180);
        // Rotated rings form a continuous, woven structure with a real 3D silhouette.
        for (let i = 0; i < 64; i++) {
          const ring = new THREE.Mesh(ringGeometry, i % 5 === 0 ? darkMaterial : material);
          const t = (i / 64) * Math.PI * 2;
          ring.rotation.x = Math.sin(t) * 0.68;
          ring.rotation.y = t;
          ring.scale.setScalar(1 + 0.12 * Math.sin(t * 3));
          sculpture.add(ring);
        }
        const coreGeometry = new THREE.IcosahedronGeometry(0.66, 0);
        const coreMaterial = new THREE.MeshStandardMaterial({ color: 0x161f17, metalness: 0.8, roughness: 0.26, flatShading: true });
        const core = new THREE.Mesh(coreGeometry, coreMaterial);
        sculpture.add(core);
        const edgesGeometry = new THREE.EdgesGeometry(coreGeometry);
        const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xc8f4ac, transparent: true, opacity: 0.6 });
        core.add(new THREE.LineSegments(edgesGeometry, edgesMaterial));
        scene.add(new THREE.AmbientLight(0xc5e8bb, 1.2));
        const key = new THREE.DirectionalLight(0xe6ffd1, 4.2);
        key.position.set(-3, 4, 5); scene.add(key);
        const rim = new THREE.DirectionalLight(0x90c779, 3);
        rim.position.set(3, -2, -1); scene.add(rim);
        sculpture.rotation.set(0.28, 0.35, -0.35);
        let width = 1, height = 1, inView = true, frame = 0, elapsed = 0, last = 0;
        const pointer = { x: 0, y: 0 };
        const resize = () => {
          width = container.clientWidth; height = container.clientHeight;
          renderer.setSize(width, height); camera.aspect = width / Math.max(height, 1); camera.updateProjectionMatrix();
          renderer.render(scene, camera);
        };
        const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(container); resize();
        const onPointer = event => {
          if (event.pointerType === "touch") return;
          const rect = container.getBoundingClientRect();
          pointer.x = ((event.clientX - rect.left) / width - 0.5) * 0.35;
          pointer.y = ((event.clientY - rect.top) / height - 0.5) * 0.3;
        };
        const resetPointer = () => { pointer.x = 0; pointer.y = 0; };
        container.addEventListener("pointermove", onPointer, { passive: true });
        container.addEventListener("pointerleave", resetPointer);
        const tick = time => {
          frame = 0;
          if (disposed || !inView || document.hidden) return;
          const delta = Math.min((time - last) / 1000 || 0, 0.05); last = time;
          if (!pausedRef.current) {
            elapsed += delta;
            sculpture.rotation.y += delta * 0.055;
            sculpture.rotation.x += (0.28 + pointer.y - sculpture.rotation.x) * 0.035;
            sculpture.rotation.z += (-0.35 + pointer.x - sculpture.rotation.z) * 0.035;
            sculpture.position.y = Math.sin(elapsed * 0.45) * 0.07;
            core.rotation.y += delta * 0.1;
            // Scroll changes depth without moving text or interfering with scrolling.
            const offset = Math.min(1, Math.max(0, -container.getBoundingClientRect().top / height));
            camera.position.y = offset * 0.5;
            renderer.render(scene, camera);
          }
          frame = requestAnimationFrame(tick);
        };
        const start = () => { if (!frame && inView && !document.hidden) { last = performance.now(); frame = requestAnimationFrame(tick); } };
        const visibility = () => { if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else start(); };
        const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; if (inView) start(); else { cancelAnimationFrame(frame); frame = 0; } });
        observer.observe(container);
        document.addEventListener("visibilitychange", visibility);
        const contextLost = event => { event.preventDefault(); setReady(false); cancelAnimationFrame(frame); frame = 0; };
        renderer.domElement.addEventListener("webglcontextlost", contextLost);
        setReady(true);
        cleanup = () => {
          cancelAnimationFrame(frame); observer.disconnect(); resizeObserver.disconnect();
          document.removeEventListener("visibilitychange", visibility);
          container.removeEventListener("pointermove", onPointer); container.removeEventListener("pointerleave", resetPointer);
          renderer.domElement.removeEventListener("webglcontextlost", contextLost);
          [ringGeometry, coreGeometry, edgesGeometry, material, darkMaterial, coreMaterial, edgesMaterial].forEach(resource => resource.dispose());
          renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
        };
      } catch { /* Graceful CSS fallback for WebGL, CDN, or initialization failure. */ }
    };
    init();
    return () => { disposed = true; cleanup(); };
  }, []);
  return <div ref={host} className={`architecture-scene ${ready ? "scene-ready" : ""}`} aria-hidden="true"><div className="scene-fallback">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ "--ring": i }} />)}<span /></div></div>;
}
