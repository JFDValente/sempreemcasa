import App from 'next/app';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import styledNormalize from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import { wrapper } from '../store';
import baseTheme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
	${reset}
	${styledNormalize}
  body {
		font-family: 'Roboto', 'sans-serif';
		background-color: #F0F0F0;
	}
`;

class MainApp extends App {
	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<ThemeProvider theme={baseTheme}>
				<>
					<Component {...pageProps} />
					<GlobalStyle />
				</>
			</ThemeProvider>
		);
	}
}

export default wrapper.withRedux(MainApp);
