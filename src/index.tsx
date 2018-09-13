import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

import "./styles/styles.css";
import App from "./components/App";
import Theme from "./styles/Theme";

const rootEl = document.getElementById("root");

const Root: React.SFC = () => (
	<AppContainer>
		<BrowserRouter>
			<MuiThemeProvider theme={Theme}>
				<App />
			</MuiThemeProvider>
		</BrowserRouter>
	</AppContainer>
);

render(<Root />, rootEl);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
	module.hot.accept("./components/App", () => {
		const NewApp = require("./components/App").default;

		render(
			<AppContainer>
				<BrowserRouter>
					<MuiThemeProvider theme={Theme}>
						<NewApp />
					</MuiThemeProvider>
				</BrowserRouter>
			</AppContainer>,
			rootEl
		);
	});
}
