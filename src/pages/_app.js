import App from 'next/app';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import styledNormalize from 'styled-normalize';

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
		const { Component, pageProps } = this.props;
		return (
			<>
				<Component {...pageProps} />
				<GlobalStyle />
			</>
		);
	}
}

export default MainApp;
