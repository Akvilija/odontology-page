import { Routes, Route } from 'react-router-dom';
import DoctorsPage from '../pages/DoctorsPage/DoctorsPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import { RouteKey } from './routes';

const MainRouter = (): JSX.Element => (
  <Routes>
    <Route element={<AboutPage/>} path={RouteKey.Index} />
    <Route element={<DoctorsPage />} path={RouteKey.Doctors} />
  </Routes>
);

export default MainRouter;