import { Component } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Layout,
    Menu
} from "antd";
import { profile, template } from "../../app-icons";
import { DesktopOutlined, LogoutOutlined } from "@ant-design/icons";
import { authProvider } from "../../api/AuthApi";
import { IUser, Role } from "../../interfaces/models";
const { Header } = Layout;


interface IMainHeaderState {
    me: IUser;
}
export class MainHeader extends Component<any, IMainHeaderState> {

    constructor(props: any) {
        super(props);

        this.state = {
            me: {}
        }
    }

    async componentDidMount() {
        this.setState({
            me: await authProvider.me() || {}
        });
    }

    render() {
        const { role } = this.state.me;
        return (
            <>
                <Header>
                    <div className="header-col header-brand">
                        <Link to="/">
                            <h5>Your Brand</h5>
                        </Link>
                    </div>
                    <div className="header-col header-nav">
                        <Menu mode="horizontal" defaultSelectedKeys={["dashboard"]}>
                            {role === Role.Admin && (<Menu.Item key="admin">
                                <Link to="/admin">
                                    <DesktopOutlined />
                                    <span> Admin Portal</span>
                                </Link>
                            </Menu.Item>)}
                            <Menu.Item key="dashboard">
                                <Link to="/dashboard">
                                    {template}
                                    <span> Dashboard</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="profile">
                                <Link to="/profile">
                                    {profile}
                                    <span>Profile</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="logout">
                                <Button type="link" className="text-dark" onClick={() => authProvider.logout("/")}>
                                    <LogoutOutlined />
                                    <span> Log Out</span>
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Header>
            </>
        );
    }
}