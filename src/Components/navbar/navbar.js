import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navbar.css";
import Logo from "../../images/logo.png";
import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";

const menuItems = [
  {
    label: "Home",
    key: "home",
    path: "/"
  },
  {
    label: "About Us",
    key: "about",
    path: "/about"
  },
  {
    label: "Join Us",
    key: "join",
    path: "/joinUs"
  },
  {
    label: "Contact Me",
    key: "contact",
    path: "/contact"
  }
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialTab = menuItems.find(item => item.path === location.pathname)?.key || 'home';
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(()=>{
    setActiveTab(initialTab)
  },[initialTab])

  const handleMenuClick = (e) => {
    setActiveTab(e.key);
    const selectedItem = menuItems.find(item => item.key === e.key);
    if (selectedItem) {
      navigate(selectedItem.path);
    }
  };

  return (
    <Layout>
      <Header className="header">
        <img className="logo" src={Logo} alt="Logo" />
        <Menu
          style={{ minWidth: 0, float: 'right' }}
          mode="horizontal"
          onClick={handleMenuClick}
          selectedKeys={[activeTab]}
          items={menuItems}
        />
      </Header>
    </Layout>
  );
};
