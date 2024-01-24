import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <div className="header">this is header</div>
      <Outlet />
      <div className="footer">this is footer</div>
    </>
  );
};

export default Layout;
