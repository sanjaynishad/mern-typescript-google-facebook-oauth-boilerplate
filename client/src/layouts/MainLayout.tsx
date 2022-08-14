import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { MainFooter } from "./components/Footer";
import { MainHeader } from "./components/Header";

function MainLayout() {
    return (
        <Layout className="layout-default guest-layout">
            <MainHeader />
            <Outlet />
            <MainFooter />
        </Layout>
    );
}

export default MainLayout;