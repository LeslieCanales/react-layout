import './App.css';
import { Layout,Typography, Avatar, Menu, Switch, Breadcrumb, Dropdown, message, Row, Col, Divider  } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, UserOutlined, DownOutlined  } from '@ant-design/icons';


const { Title } = Typography;
const style = { background: '#0092ff', padding: '8px 0' };

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
function handleClick(e) {
  console.log('click', e);
}

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const logout = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">My Account</Menu.Item>
    <Menu.Item key="2">Settings</Menu.Item>
    </Menu>
);

function App() {
  return (
    <div className="App">
      <Layout>
      <Header style={{padding:15}}>
      <Dropdown overlay={logout}>
      <Avatar style={{float: 'right'}} src='./avatarr.png' onClick={e => e.preventDefault()} />
      </Dropdown>
        <Title style={{color:'white'}} level={3}>ASDG</Title>
        
      </Header>
      
      <Layout>
       <Sider>
           <Menu theme="dark" onClick={handleClick} style={{ width: 200 }} mode="inline">
    <SubMenu key="sub1" icon={<MailOutlined />} title="Menu">
      <Menu.ItemGroup title="Item 1">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Iteom 2">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Menu 1">
      <Menu.Item key="5">Option 5</Menu.Item>
      <Menu.Item key="6">Option 6</Menu.Item>
      <SubMenu key="sub3" title="Submenu">
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </SubMenu>
    <SubMenu key="sub4" icon={<SettingOutlined />} title="Menu 2">
      <Menu.Item key="9">Option 9</Menu.Item>
      <Menu.Item key="10">Option 10</Menu.Item>
      <Menu.Item key="11">Option 11</Menu.Item>
      <Menu.Item key="12">Option 12</Menu.Item>
    </SubMenu>
  </Menu>
      </Sider>
      <Layout>
      
      <Content className="site-layout-background" style={{padding: '0 30px'}}>
      <Breadcrumb style={{ margin: 15 }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          
        </Breadcrumb>
         <div style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}> <Divider orientation="left">Responsive</Divider>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
          </Row> </div></Content>
       <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by ELLE CEE</Footer>
      </Layout>
       
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
