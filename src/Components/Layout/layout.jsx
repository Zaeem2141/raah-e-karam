import React from "react"
import {Layout , Menu } from "antd"
import Logo from "../../images/logo.png"
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../navbar/navbar";

const { Header } = Layout;

export const AppLAyout = (props) => {
    return(
    <>
      <Layout>
          <Navbar/>
          <Outlet/>
      </Layout>
    </> 
    )

}