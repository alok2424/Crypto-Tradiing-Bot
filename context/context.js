import React ,{useState,useEffect} from "react"
import {ethers} from "ethers"
import axios from "axios"

//Internal Import
export const CONTEXT = React.createContext();

export const PROVIDER = ({children}) => {
    const TRADING_BOT = "Trading Bot";
    const [topTokens,setTopTokens] = useState([]);//the top 20 tokens
    const [tradingCount,setTradingCount] = useState(0);
    const [loader,setLoader] = useState(false);

     let length;//this will keep updating or changing

//this will allow us to show top 20 tokens
    const LOAD_INITIAL_DATA = async()=>{
        try {
           const URL = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";
           const query = `
           {
           //mention the paramters in brackets u want to extract
           tokens(orderBy: volumeUSD,orderDirection:desc,first:20){
           //details u want to for each tokens
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

           //make the request 
           //instead of axios u can use fetch
           const axiosData = await axios.post(URL,{query:query});
          setTopTokens(axiosData.data.data.tokens);
         
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        LOAD_INITIAL_DATA();
    },[]);
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
        <CONTEXT.Provider 
        value={{
            TRADING_BOT,
            topTokens,
            trading,
            LOAD_INITIAL_DATA,
            buyTokens,
            sellTokens
        }}>

        {children}
        
        </CONTEXT.Provider>
    )
};