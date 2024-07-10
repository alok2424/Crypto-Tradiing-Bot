import React, {useState,uuseEffect,useContext} from 'react'
import axios from 'axios';
import { ethers } from 'ethers';
import toast from "react-hot-toast";

//INTERNAL IMPORT 
import {
  Header,
  Footer,
  Login,
  MovingSubmenu,
  Preloader,
  Search,
  Sidebar,
  SignUp,
  loader,
  usetimeOut,
  Home,
  TradeTokens,
  TopExchangeToken,
  Networks,
  AddNetwork,
  Price,
  Profile,
  setting,
  Trading

} from "../Components/index";

import {CONTEXT} from "../context/context";

const index = () => {
  const {TRADING_BOT} = useContext(CONTEXT);

  //STATE VARIABLE
  const [activeComponent,setActiveComponent] = useState("Home");
  const [membershipType,setMembershipType] = useState("Premium");
  const [authBackEndID,setAuthBackEndID] = useState("");

  const [Networks,setNetworks] = useState({});
  const [networkName,setNetworkName] = useState();

  return (
    <div>
        <MovingSubmenu/>
        <Preloader/>
    </div>
  );
};

export default index;