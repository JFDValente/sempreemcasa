import App from 'next/app';
import { useStore } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
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

function MainApp({ Component, pageProps}) {
	const store = useStore((state) => state)
	return (
		<PersistGate persistor={store.__persistor} loading={null}>
			<ThemeProvider theme={baseTheme}>
				<>
					<Component {...pageProps} />
					<GlobalStyle />
				</>
			</ThemeProvider>
		</PersistGate>
	);
}

export default wrapper.withRedux(MainApp);
