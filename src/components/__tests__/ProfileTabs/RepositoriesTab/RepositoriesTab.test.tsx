import { render } from "@testing-library/react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { RepositoriesTab } from "../../..";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

describe("Render Repositories Nav", () => {
  window.scroll = jest.fn();

  it("should render Nav", () => {
    const { container } = render(
      <Router>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <RepositoriesTab />
        </QueryParamProvider>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
