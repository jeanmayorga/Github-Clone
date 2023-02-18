import { render } from "@testing-library/react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { Nav } from "..";

describe("Render Nav", () => {
  it("should render Nav", () => {
    const { container } = render(
      <Router>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <Nav repositoriesCount={43} />
        </QueryParamProvider>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
