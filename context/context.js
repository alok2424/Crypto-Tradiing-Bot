import React ,{useState,useEffect} from "react"
import {ethers} from "ethers"
import axios from "axios"

//Internal Import
export const CONTEXT = React.createContext();

export const PROVIDER = ({children}) => {
    const TRADING_BOT = "Trading Bot";
    const [topTokens,setTopTokens] = useState([]);
    const [tradingCount,setTradingCount] = useState(0);
    const [loader,setLoader] = useState(false);

     let length;


    const LOAD_INITIAL_DATA = async()=>{
        try {
            const URL = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";
           const query = `
           {
           tokens(orderBy:volumeUSD,orderDirection:desc,first:20){
           id
           name
           symbol
           decimals
           volume
           volumeUSD
           totalSupply
           feesUSD
           txCount
           poolCount
           totalValueLockedUSD
           totalValueLocked
           derivedETH
           }
           }`;

           const axiosData = await axios.post(URL,{query:query});
       //    setTopTokens(axiosData.data.data.tokens);
           console.log(axiosData);
        } catch (error) {
            console.log(error);
        }
    };
    //buy
    const buyTokens = async()=>{
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
    //sell
    const sellTokens = async()=>{
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
   //trading
    const trading = async()=>{
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CONTEXT.Provider value={{TRADING_BOT,LOAD_INITIAL_DATA,buyTokens,sellTokens}}>
        {children}
        </CONTEXT.Provider>
    )
};