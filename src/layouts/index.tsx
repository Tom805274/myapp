import { Link, Outlet, useAppData, useLocation } from "umi";
import { ProLayout } from "@ant-design/pro-components";
import styles from "./index.less";
import { Header } from "antd/es/layout/layout";

export default function Layout() {
  const { clientRoutes } = useAppData();
  const location = useLocation();

  return (
    <>
     <ProLayout
      route={clientRoutes[0]}
      location={location}
      title="魔幻空间后台管理系统"
      
      menuItemRender={(menuItemProps, defaultDom) => {
        console.log(location.pathname);
        
        if (menuItemProps.isUrl || menuItemProps.children) {
          return defaultDom;
        }
        if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return (
            <Link to={menuItemProps.path} target={menuItemProps.target}>
              {defaultDom}
            </Link>
          );
        }
        return defaultDom;
      }}
      layout="top"
    >
      <Outlet />
    </ProLayout>
    </>
   
  );
}
