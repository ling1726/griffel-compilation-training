import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import  ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FluentProvider dir={dir} theme={teamsLightTheme}><App /></FluentProvider>);
