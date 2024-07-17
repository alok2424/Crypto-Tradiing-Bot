import React, {useState,useContext} from 'react'
import axios from 'axios';
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
import Head from 'next/head';
import AddTokenPair from '@/Components/Body/AddTokenPair';

const index = () => {
  const {TRADING_BOT} = useContext(CONTEXT);

  //STATE VARIABLE
  const [activeComponent,setActiveComponent] = useState("");
  const [membershipType,setMembershipType] = useState("Premium");

  const [networks,setNetworks] = useState({});
  const [networkName,setNetworkName] = useState();

  //NOTIFICATION
  const notifyError = (msg) => toast.error(msg,{duration:2000});
  const notifySuccess =(msg) => toast.success(msg,{duration:2000});
  
  return (
    <div>
      
        {
          activeComponent ==  "SignUp" ? (
            <SignUp 
            axios={axios} 
            setActiveComponent={setActiveComponent}
            notifyError= {notifyError}
            notifySuccess= {notifySuccess}
            />
          ):(
            <div className='techwave_fn_wrapper'>
            <div className='techwave_fn_wrap'>
             <Search/>
            <Header
             networkName={networkName}
             setActiveComponent={setActiveComponent}
             />
             <Sidebar setActiveComponent={setActiveComponent}/>
             {
              activeComponent == "Home" ? (
                <Home/>
              ): activeComponent  ==   "Trade Tokens" ? (
                <TradeTokens/>
              ): activeComponent == "Top Exchange Tokens" ? (
                <TopExchangeToken/>
              ) : activeComponent == "Networks" ? (
                <Networks 
                networkName={networkName}
                setNetworkName = {setNetworkName}/>
              ):activeComponent == "Add Network" ? (
                 <AddNetwork axios={axios}/>
              ) : activeComponent == "Trading" ? (
                 <Trading  axios={axios}
                />
              ) : activeComponent == "Pricing" ? (
                <Price/>
              ) : activeComponent == "Profile" ? (
                <Profile setActiveComponent={setActiveComponent}/>
              ) : activeComponent == "Setting" ? (
                <setting/>
              ) :activeComponent == "Add Token Pair" ? (
                <AddTokenPair/>
              ) : (
                ""
              )
             }
            </div>
            </div>
          )}

          {activeComponent == "Login"  ? (
            <Login
             setActiveComponent={setActiveComponent} 
             axios={axios}
            />
          ) : (
            ""
          )}
    </div>
  );
};

export default index;