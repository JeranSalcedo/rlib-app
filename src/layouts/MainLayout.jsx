import { useLocation, Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header page={pathname} />
      <Outlet />
    </>
  );
};
export default MainLayout;
