import { render } from "@testing-library/react";
import Error from "./Error";
import "@testing-library/jest-dom/extend-expect";
describe("Error component", () => {
  test("renders error message", () => {
    const { getByText } = render(<Error />);
    const errorMessage = getByText("Oops! Something went wrong.");
    const refreshMessage = getByText(
      "Failed to load data. May be a refresh can help ..."
    );

    expect(errorMessage).toBeInTheDocument();
    expect(refreshMessage).toBeInTheDocument();
  });
});
