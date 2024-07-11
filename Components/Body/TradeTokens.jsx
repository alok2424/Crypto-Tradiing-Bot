import React,{useState,useEffect} from 'react'

//internal import
import {Footer} from "../index"
import { local } from 'web3modal';

const TradeTokens = () => {
  const [search,setSearch] = useState("");
  const [searchItem,setSearchItem]=useState(search);
  const [tokens,setTokens] = useState([]);
  const [copyTokens,setCopyTokens] = useState([]);
  const [tradeToken,setTradeToken] = useState({});
  const [active,setActive] = useState();

  useEffect(()=>{
    const tokenLists = JSON.parse(localStorage.getItem("setTokens"));
    const tokenPair = JSON.parse(localStorage.getItem("tokenPair"));
 
    setTradeToken(tokenPair);
    setTokens(tokenLists);
    setCopyTokens(tokenLists);

    console.log(tokenLists);
  });

  const onHandleSearch = (value) =>{
    const filterTokens = tokens?.filter(({
      network})=>
      network.toLowerCase().includes(value.toLowerCase())
    );

    if(filterTokens?.length === 0){
      setTokens(copyTokens);
    }else{
      setTokens(filterTokens);
    }
  };
 
  const onClearSearch = () => {
    if(tokens?.length && copyTokens?.length){
      setTokens(copyTokens);
    }
  };

  useEffect(()=>{
    const timer = setTimeout(()=>setSearch(searchItem),1000);
    return ()=>clearTimeout(timer);
  },[searchItem]);

  useEffect(()=>{
    if(search){
      onHandleSearch(search);
    }else{
      onClearSearch();
    }
  },[search]);

  const selectTokenPair = () =>{
    localStorage.setItem("tokenPair",JSON.stringify(tradeToken));
  };
  
  return (
    <div>TradeTokens</div>
  )
}

export default TradeTokens