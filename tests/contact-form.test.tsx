import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ContactForm } from "@/components/sections/contact-form";

describe("contact form", () => {
  it("shows a TODO message because no backend endpoint exists", () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Taylor" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "taylor@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Company"), {
      target: { value: "Acme" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Looking to discuss a staff frontend role." },
    });
    fireEvent.click(screen.getByRole("button", { name: "Send message" }));

    expect(
      screen.getByText(/TODO: connect this form to a backend endpoint/i),
    ).toBeInTheDocument();
  });
});
