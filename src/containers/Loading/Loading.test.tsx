import { render } from "@testing-library/react";
import Loading from "./Loading";
import "@testing-library/jest-dom/extend-expect";

describe("Loading component", () => {
  test("renders loading message", () => {
    const { getByText, getByRole } = render(<Loading />);

    const loadingMessage = getByText("Loading...");
    const circularProgress = getByRole("progressbar");

    expect(loadingMessage).toBeInTheDocument();
    expect(circularProgress).toBeInTheDocument();
  });
});
