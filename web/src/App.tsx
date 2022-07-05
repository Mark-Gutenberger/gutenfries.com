import { AuthProvider } from '@redwoodjs/auth';
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';

import './index.css';

initializeIcons();

const App = () => (
	<FatalErrorBoundary page={FatalErrorPage}>
		<RedwoodProvider titleTemplate='%PageTitle | %AppTitle'>
			<AuthProvider type='dbAuth'>
				<RedwoodApolloProvider>
					<Routes />
				</RedwoodApolloProvider>
			</AuthProvider>
		</RedwoodProvider>
	</FatalErrorBoundary>
);

export default App;
