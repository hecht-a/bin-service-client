import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateSnippet from "../components/CreateSnippet";
import ShowSnippet from "../components/ShowSnippet";
import React from "react";

export default function Router(): JSX.Element {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={["/", "/create"]} component={CreateSnippet} />
				<Route path="/:id" component={ShowSnippet} />
			</Switch>
		</BrowserRouter>
	);
}
