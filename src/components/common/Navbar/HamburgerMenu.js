import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  TeamOutlined,
  ProjectOutlined,
  ReconciliationOutlined,
  UsergroupAddOutlined,
  LeftCircleOutlined,
} from '@ant-design/icons';
const HamburgerMenu = () => {
  const [visible, setVisible] = useState(false);
  const [deskVisible, setDeskVisible] = useState(false);
  const { Sider } = Layout;
  const history = useHistory();
  const userRole = localStorage.getItem('role');
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onClick = s => {
    history.push(s);
    setVisible(false);
  };
  const showDrawerDesk = () => {
    setDeskVisible(true);
  };
  const onCloseDesk = () => {
    setDeskVisible(false);
  };
  const onClickDesk = s => {
    history.push(s);
    setDeskVisible(false);
  };
  const handleLogout = () => {
    localStorage.removeItem('okta-token-storage');
    localStorage.removeItem('okta-cache-storage');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    history.push('/login');
    window.location.reload(); // quick fix need to change later
  };
  return (
    <>
      <div className="upper-desktop">
        <div className="desktop">
          <Button type="dark" onClick={showDrawerDesk} className="menu-button">
            <MenuOutlined className="menu-icon" />
          </Button>
          <Drawer
            placement="left"
            closable={false}
            onClose={onCloseDesk}
            visible={deskVisible}
            width="250"
          >
            <Sider>
              {userRole === 'administrator' ? (
                <Menu
                  className="desktop"
                  theme="light"
                  mode="inline"
                  defaultSelectedKeys={['1']}
                >
                  <Menu.Item
                    key="1"
                    icon={<TeamOutlined />}
                    onClick={() => onClickDesk('/adminDash')}
                  >
                    Dashboard
                  </Menu.Item>
                  <Menu.Item
                    key="2"
                    icon={<UserOutlined />}
                    onClick={() => onClickDesk('/myProfile')}
                  >
                    My Profile
                  </Menu.Item>
                  <Menu.Item
                    key="3"
                    icon={<TeamOutlined />}
                    onClick={() => onClickDesk('/employees')}
                  >
                    Employees
                  </Menu.Item>
                  <Menu.Item
                    key="4"
                    icon={<ProjectOutlined />}
                    onClick={() => onClickDesk('/programs')}
                  >
                    Programs
                  </Menu.Item>
                  <Menu.Item
                    key="5"
                    icon={<UsergroupAddOutlined />}
                    onClick={() => onClickDesk('/recipients')}
                  >
                    Recipients
                  </Menu.Item>
                  <Menu.Item
                    key="6"
                    icon={<ReconciliationOutlined />}
                    onClick={() => onClickDesk('/services')}
                  >
                    Services
                  </Menu.Item>
                  <Menu.Item
                    key="7"
                    icon={<LeftCircleOutlined />}
                    className="logout-ctn"
                    onClick={handleLogout}
                  >
                    Logout
                  </Menu.Item>
                </Menu>
              ) : (
                <></>
              )}
              {userRole === 'program_manager' ? (
                <Menu
                  className="desktop"
                  theme="light"
                  mode="inline"
                  defaultSelectedKeys={['1']}
                >
                  <Menu.Item
                    key="1"
                    icon={<TeamOutlined />}
                    onClick={() => onClickDesk('/programsDash')}
                  >
                    Dashboard
                  </Menu.Item>
                  <Menu.Item
                    key="2"
                    icon={<UserOutlined />}
                    onClick={() => onClickDesk('/myProfile')}
                  >
                    My Profile
                  </Menu.Item>
                  <Menu.Item
                    key="4"
                    icon={<ProjectOutlined />}
                    onClick={() => onClickDesk('/programs')}
                  >
                    Programs
                  </Menu.Item>
                  <Menu.Item
                    key="5"
                    icon={<UsergroupAddOutlined />}
                    onClick={() => onClickDesk('/recipients')}
                  >
                    Recipients
                  </Menu.Item>
                  <Menu.Item
                    key="6"
                    icon={<ReconciliationOutlined />}
                    onClick={() => onClickDesk('/services')}
                  >
                    Services
                  </Menu.Item>
                  <Menu.Item
                    key="7"
                    icon={<LeftCircleOutlined />}
                    className="logout-ctn"
                    onClick={handleLogout}
                  >
                    Logout
                  </Menu.Item>
                </Menu>
              ) : (
                <></>
              )}
              {userRole === 'service_provider' ? (
                <Menu
                  className="desktop"
                  theme="light"
                  mode="inline"
                  defaultSelectedKeys={['1']}
                >
                  <Menu.Item
                    key="1"
                    icon={<TeamOutlined />}
                    onClick={() => onClickDesk('/servicesDash')}
                  >
                    Dashboard
                  </Menu.Item>
                  <Menu.Item
                    key="2"
                    icon={<UserOutlined />}
                    onClick={() => onClickDesk('/myProfile')}
                  >
                    My Profile
                  </Menu.Item>
                  <Menu.Item
                    key="6"
                    icon={<ReconciliationOutlined />}
                    onClick={() => onClickDesk('/services')}
                  >
                    Services
                  </Menu.Item>
                  <Menu.Item
                    key="7"
                    icon={<LeftCircleOutlined />}
                    className="logout-ctn"
                    onClick={handleLogout}
                  >
                    Logout
                  </Menu.Item>
                </Menu>
              ) : (
                <></>
              )}
            </Sider>
          </Drawer>
        </div>
      </div>
      <Button type="dark" onClick={showDrawer} className="menu-button tablet">
        <MenuOutlined className="menu-icon" />
      </Button>
      <Drawer
        className="tablet"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        width="200"
      >
        <Sider>
          {userRole === 'administrator' ? (
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item
                key="1"
                icon={<TeamOutlined />}
                onClick={() => onClickDesk('/adminDash')}
              >
                Dashboard
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<UserOutlined />}
                onClick={() => onClick('/')}
              >
                My Profile
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={<TeamOutlined />}
                onClick={() => onClick('/employees')}
              >
                Employees
              </Menu.Item>
              <Menu.Item
                key="4"
                icon={<ProjectOutlined />}
                onClick={() => onClick('/programs')}
              >
                Programs
              </Menu.Item>
              <Menu.Item
                key="5"
                icon={<UsergroupAddOutlined />}
                onClick={() => onClick('/recipients')}
              >
                Recipients
              </Menu.Item>
              <Menu.Item
                key="6"
                icon={<ReconciliationOutlined />}
                onClick={() => onClick('/services')}
              >
                Services
              </Menu.Item>
              <Menu.Item
                key="7"
                icon={<LeftCircleOutlined />}
                className="logout-ctn"
                onClick={handleLogout}
              >
                Logout
              </Menu.Item>
            </Menu>
          ) : (
            <></>
          )}
          {userRole === 'program_manager' ? (
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item
                key="1"
                icon={<TeamOutlined />}
                onClick={() => onClickDesk('/programsDash')}
              >
                Dashboard
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<UserOutlined />}
                onClick={() => onClick('/')}
              >
                My Profile
              </Menu.Item>
              <Menu.Item
                key="4"
                icon={<ProjectOutlined />}
                onClick={() => onClick('/programs')}
              >
                Programs
              </Menu.Item>
              <Menu.Item
                key="4"
                icon={<UsergroupAddOutlined />}
                onClick={() => onClick('/recipients')}
              >
                Recipients
              </Menu.Item>
              <Menu.Item
                key="6"
                icon={<ReconciliationOutlined />}
                onClick={() => onClick('/services')}
              >
                Services
              </Menu.Item>
              <Menu.Item
                key="7"
                icon={<LeftCircleOutlined />}
                className="logout-ctn"
                onClick={handleLogout}
              >
                Logout
              </Menu.Item>
            </Menu>
          ) : (
            <></>
          )}
          {userRole === 'service_provider' ? (
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item
                key="1"
                icon={<TeamOutlined />}
                onClick={() => onClickDesk('/servicesDash')}
              >
                Dashboard
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<UserOutlined />}
                onClick={() => onClick('/')}
              >
                My Profile
              </Menu.Item>
              <Menu.Item
                key="6"
                icon={<ReconciliationOutlined />}
                onClick={() => onClick('/services')}
              >
                Services
              </Menu.Item>
              <Menu.Item
                key="7"
                icon={<LeftCircleOutlined />}
                className="logout-ctn"
                onClick={handleLogout}
              >
                Logout
              </Menu.Item>
            </Menu>
          ) : (
            <></>
          )}
        </Sider>
      </Drawer>
    </>
  );
};
export default HamburgerMenu;
