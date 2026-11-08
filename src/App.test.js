import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("./component/ArchitectureScene", () => () => null);

beforeEach(() => {
  localStorage.clear();
  window.history.replaceState({}, "", "/");
  window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: false, media: query, addEventListener: jest.fn(), removeEventListener: jest.fn(),
  }));
});

const renderWebsite = async () => {
  await act(async () => { render(<App />); });
};

test("leads with consulting and keeps project and experience links reachable", async () => {
  await renderWebsite();
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  const hero = screen.getByRole("region", { name: "Custom software for your business." });
  expect(within(hero).getByRole("link", { name: "Discuss your project" })).toHaveAttribute("href", "#contact");
  expect(within(hero).getByRole("link", { name: "See projects" })).toHaveAttribute("href", "#work");
  expect(screen.getByRole("link", { name: "View professional profile (PDF)" })).toHaveAttribute("href", "/assets/Eduardo_Zuniga_Software_Consulting.pdf");
  for (const link of document.querySelectorAll('a[href^="#"]')) {
    expect(document.getElementById(link.getAttribute("href").slice(1))).not.toBeNull();
  }
});

test("offers a prefilled project email and a LinkedIn alternative", async () => {
  await renderWebsite();
  const inquiry = screen.getByRole("link", { name: "Write me an email" });
  expect(decodeURIComponent(inquiry.getAttribute("href"))).toContain("Software development project");
  expect(decodeURIComponent(inquiry.getAttribute("href"))).toContain("What we need to solve:");
  expect(screen.getByRole("link", { name: "Find me on LinkedIn" })).toHaveAttribute("href", "https://www.linkedin.com/in/eduzuniga/");
});

test("shows project contact even from an old role link", async () => {
  window.history.replaceState({}, "", "/?intent=role#contact");
  await renderWebsite();
  expect(screen.getByRole("heading", { name: "What do you need to build?" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Write me an email" })).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "Download engineering CV" })).not.toBeInTheDocument();
});

test("persists Spanish and updates the document language and metadata", async () => {
  await renderWebsite();
  userEvent.click(screen.getByRole("button", { name: "Switch to Spanish" }));
  expect(document.documentElement).toHaveAttribute("lang", "es");
  expect(document.title).toContain("Consultor");
  expect(localStorage.getItem("language")).toBe("es");
  expect(screen.getByRole("link", { name: "Ver trayectoria profesional (PDF)" })).toBeInTheDocument();
});

test("discloses case studies and closes mobile navigation with Escape", async () => {
  await renderWebsite();
  const caseButton = screen.getAllByRole("button", { name: "Explore case study" })[0];
  userEvent.click(caseButton);
  expect(caseButton).toHaveAttribute("aria-expanded", "true");
  expect(document.getElementById(caseButton.getAttribute("aria-controls"))).toBeVisible();
  userEvent.click(screen.getByRole("button", { name: "Open navigation" }));
  expect(screen.getByRole("button", { name: "Close navigation" })).toHaveAttribute("aria-expanded", "true");
  userEvent.keyboard("{Escape}");
  const menu = screen.getByRole("button", { name: "Open navigation" });
  expect(menu).toHaveAttribute("aria-expanded", "false");
  expect(menu).toHaveFocus();
});
