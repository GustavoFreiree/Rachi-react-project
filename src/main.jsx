import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Theme from "./Theme";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;
		font-family: "Roboto", sans-serif;
	}

	body {
		background-color: ${(props) => props.theme.whiteColors.white};
		color: ${(props) => props.theme.whiteColors.gray};
		-webkit-font-smoothing: antialiased;
	}

	@media screen and (max-width:1000px) {
		html {
			font-size: 55%;
		}
	}
`;

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<App />
			<GlobalStyle />
		</ThemeProvider>
	</React.StrictMode>
);
