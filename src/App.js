import Routes from './routes';

import './styles/globalStyles.css';
import 'antd/dist/antd.min.css';

import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App;
