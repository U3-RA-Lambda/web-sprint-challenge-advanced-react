import React from "react";
import { render, screen, fireEvent, getByTestId} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const checkoutButton = screen.getByText('Checkout');
    fireEvent.click(checkoutButton);
    expect(screen.getByTestId("successMessage")).toBeInTheDocument();
});


// #### Testing the Checkout Form

// - [ ] Build out the tests listed in `CheckoutForm.test.js`. You will need to make sure they are testing what the test title implies they are testing
// - [ ] Make sure the tests are passing, and make sure you can cause the tests to fail purposefully, so that you know the tests are truly working