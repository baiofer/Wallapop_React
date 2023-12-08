import { Navigate, Route, Routes } from "react-router-dom";
import AdvertsPage from "./pages/adverts/advertsPage/AdvertsPage";
import LoginPage from "./pages/auth/login/LoginPage";
import RegisterPage from "./pages/auth/register/RegisterPage";
import NewAdvertPage from "./pages/adverts/newAdvertPage/NewAdvertPage";
import AdvertPage from './pages/adverts/advertPage/AdvertPage'
import Page404 from "./pages/404/Page404";
import AuthPage from "./pages/auth/authPage/AuthPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      {/*  Auth  */}
      <Route path="/auth" replace element={ <AuthPage /> }/>
      <Route path="/auth/login" replace element={ <LoginPage />} />
      <Route path="/auth/register" element={ <RegisterPage /> } />
      {/*  Adverts  */}
      <Route path="/adverts" element={ <Layout /> } >
        <Route path='' index element={ <AdvertsPage /> } />
        <Route path=":advertId" element={ <AdvertPage /> } />
        <Route path="new" element={ <NewAdvertPage /> } />
      </Route>
      {/*  Head  */}
      <Route path="/" element={ <Navigate to="/adverts" /> } />
      {/*  Error  */}
      <Route path="/404" element={ <Page404 /> } />
      <Route path="*" element={ <Navigate to="/404" /> } />
    </Routes>
  );
}

export default App;
