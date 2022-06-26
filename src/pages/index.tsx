import React from "react";
import { Layout } from "antd";

import { browserHistory } from "./browserHistory";
// import MenuView from '../Components/MenuView'
// import MyHeader from '../Components/Header'
import {
  unstable_HistoryRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// import people from './people'
import HomePage from "./Home";
import LoginPage from "./Login";

import "./index.module.scss";

const { Header, Content, Footer, Sider } = Layout;


const routes: any = {
  //    ...people,
  "/login": <LoginPage />,
};
const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Routes>
        {Object.keys(routes).map((item: string) => (
          <Route path={item} key={item} element={routes[item]} />
        ))}

        <Route path={"/"} key={"/"} element={<HomePage />} />
      </Routes>
    </Router>
  );
};

const LayoutPage: React.FC = () => {
  return (
    <div>
      {window.location.href.endsWith("login") ? (
        <LoginPage />
      ) : (
        <Layout hasSider>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            {/* <MyHeader /> */}
          </Header>
          <Layout>
            <Sider
              style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 64,
                bottom: 0,
              }}
            >
              <div className="logo" />
              {/* <MenuView /> */}
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
              <Header className="site-layout-background" style={{ padding: 0 }}>
                顶部
              </Header>
              <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
                <AppRouter />
              </Content>
              <Footer style={{ textAlign: 'center' }}>xxxxx</Footer>
            </Layout>
          </Layout>
        </Layout>
      )}
    </div>
  );
};

export default LayoutPage;
