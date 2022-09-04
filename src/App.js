import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Customers from "./Components/Customers";
import EditCustomer from "./Components/EditCustomer";
import EditProduct from "./Components/EditProduct";
import Menu from "./Components/Menu";
import Products from "./Components/Products";
import Purchased from "./Components/Purchased";

// mui
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import AppleIcon from "@mui/icons-material/Apple";
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
export default function App() {
  return (
    <div>
      <BrowserRouter>  
          <BottomNavigation style={{width:"100%", top:"0",backgroundColor:'black' }}>
            <Link to={""} style={{ textDecoration: "none" }}>
              <BottomNavigation showLabels  style={{color:"gray" }} >
                <BottomNavigationAction style={{backgroundColor:"black", color:"GrayText" }} label="menu" icon={<MenuIcon />} />
              </BottomNavigation>
            </Link>

            <Link to={"/products"} style={{ textDecoration: "none" }}>
              <BottomNavigation showLabels  style={{color:"gray" }} > 
                <BottomNavigationAction style={{backgroundColor:"black", color:"GrayText" }} label="Products" icon={<AppleIcon/>} />
              </BottomNavigation>
            </Link>

            <Link to={"/customers"} style={{ textDecoration: "none" }}>
              <BottomNavigation showLabels>
                <BottomNavigationAction style={{backgroundColor:"black", color:"GrayText" }} label="Customer" icon={<PeopleRoundedIcon/>}/>
              </BottomNavigation>
            </Link>

            <Link to={"/purchased"} style={{ textDecoration: "none" }}>
              <BottomNavigation showLabels>
                <BottomNavigationAction style={{backgroundColor:"black", color:"GrayText" }} label="purchases" icon={<ShoppingCartIcon />} />
              </BottomNavigation>
            </Link>     
           
          </BottomNavigation>

        <Routes>
        
          <Route path="" element={<Menu />} />
          <Route path="products" element={<Products />} />
          <Route path="editProduct/:id" element={<EditProduct />} />
          <Route path="customers" element={<Customers />} />
          <Route path="editCustomer/:id" element={<EditCustomer />} />
          <Route path="purchased" element={<Purchased />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
