import React from 'react';
import {Outlet} from "react-router-dom";
import { Layout, theme} from 'antd';
import CommonAside from "../components/commonAside";
import CommonHeader from "../components/commonHeader";
import {useSelector} from "react-redux";

const {Content} = Layout;
const App = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const isCollapse = useSelector(state =>
        state.tab.isCollapse
    )
    return (
        <Layout className="main-container">
            <CommonAside isCollapse={isCollapse}></CommonAside>
            <Layout>
                <CommonHeader isCollapse={isCollapse}></CommonHeader>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
export default App;