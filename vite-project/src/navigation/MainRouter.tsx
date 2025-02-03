import { Routes, Route } from 'react-router-dom';
import DoctorsPage from '../pages/DoctorsPage/DoctorsPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import { RouteKey } from './routes';
import ServicesPage from '../pages/Services/ServicesPage';

const MainRouter = (): JSX.Element => (
  <Routes>
    <Route element={<AboutPage/>} path={RouteKey.Index} />
    <Route element={<DoctorsPage />} path={RouteKey.Doctors} />
    <Route element={<ServicesPage />} path={RouteKey.Services} />
  </Routes>
);

export default MainRouter;