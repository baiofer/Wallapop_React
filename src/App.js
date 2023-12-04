import { Navigate, Route, Routes } from "react-router-dom";
import AdvertsPage from "./pages/adverts/advertsPage/AdvertsPage";
import LoginPage from "./pages/auth/login/LoginPage";
import RegisterPage from "./pages/auth/register/RegisterPage";
import NewAdvertPage from "./pages/adverts/newAdvertPage/NewAdvertPage";
import Page404 from "./pages/404/Page404";
import AuthPage from "./pages/auth/authPage/AuthPage";

function App() {
  return (
    <Routes>
      {/*  Auth  */}
      <Route path="/auth" replace element={ <AuthPage /> }/>
      <Route path="/auth/login" replace element={ <LoginPage />} />
      <Route path="/auth/register" element={ <RegisterPage /> } />
      {/*  Adverts  */}
      <Route path="/adverts" element={ <AdvertsPage /> } />
      <Route path="/adverts/:advertId" element={ <AdvertsPage /> } />
      <Route path="/adverts/new" element={ <NewAdvertPage /> } />
      {/*  Head  */}
      <Route path="/" element={ <AdvertsPage /> } />
      {/*  Error  */}
      <Route path="/404" element={ <Page404 /> } />
      <Route path="*" element={ <Navigate to="/404" /> } />
    </Routes>
  );
}

export default App;
