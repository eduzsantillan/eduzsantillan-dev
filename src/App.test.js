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

test("offers direct engineering and consulting paths with valid anchors", async () => {
  await renderWebsite();
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  const paths = screen.getByRole("region", { name: "Ways to work together" });
  expect(within(paths).getByRole("link", { name: /View experience & CV/ })).toHaveAttribute("href", "#experience");
  expect(within(paths).getByRole("link", { name: /Explore consulting/ })).toHaveAttribute("href", "#consulting");
  for (const link of document.querySelectorAll('a[href^="#"]')) {
    expect(document.getElementById(link.getAttribute("href").slice(1))).not.toBeNull();
  }
});

test("changes the inquiry and downloadable CV when a recruiter selects a role", async () => {
  await renderWebsite();
  expect(screen.getByRole("link", { name: "Consulting profile" })).toHaveAttribute("href", "/assets/Eduardo_Zuniga_Software_Consulting.pdf");
  userEvent.click(screen.getByRole("radio", { name: "I’m hiring an engineer" }));
  const inquiry = screen.getByRole("link", { name: "Discuss a role" });
  expect(decodeURIComponent(inquiry.getAttribute("href"))).toContain("Senior backend engineering opportunity");
  expect(screen.queryByRole("link", { name: "Consulting profile" })).not.toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: "Download engineering CV" })).toHaveLength(2);
});

test("supports direct role inquiries", async () => {
  window.history.replaceState({}, "", "/?intent=role#contact");
  await renderWebsite();
  expect(screen.getByRole("radio", { name: "I’m hiring an engineer" })).toBeChecked();
  expect(screen.getByRole("link", { name: "Discuss a role" })).toBeInTheDocument();
});

test("persists Spanish and updates the document language and metadata", async () => {
  await renderWebsite();
  userEvent.click(screen.getByRole("button", { name: "Switch to Spanish" }));
  expect(document.documentElement).toHaveAttribute("lang", "es");
  expect(document.title).toContain("Consultor");
  expect(localStorage.getItem("language")).toBe("es");
  expect(screen.getByRole("link", { name: "Descargar CV de ingeniería" })).toBeInTheDocument();
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
