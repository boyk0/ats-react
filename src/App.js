import {
    Outlet,
} from 'react-router-dom';
import './i18n';
import { Navigation } from './components/navigation/navigation';

export function App() {
  return (
      <>
          <Navigation />
          <Outlet />
      </>
  );
}
