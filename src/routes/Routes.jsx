import React from "react";
import { Route, Switch } from "react-router-dom";
import APOD from "../pages/APOD/APOD";
import AsteroidsTable from "../pages/AsteroidsTable/AsteroidsTable";
import Landing from "../pages/Landing/Landing";
import SearchImages from "../pages/SearchImages/SearchImages";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/landing" component={Landing} />
			<Route path="/apod" component={APOD} />
			<Route path="/neo" component={AsteroidsTable} />
			<Route path="/imgs" component={SearchImages} />
		</Switch>
	);
};

export default Routes;
