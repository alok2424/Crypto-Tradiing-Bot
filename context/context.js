import React, { useState, useEffect } from "react";
import axios from "axios";

// Internal Import
export const CONTEXT = React.createContext();

export const PROVIDER = ({ children }) => {
    const TRADING_BOT = "Trading Bot";
    const [topTokens, setTopTokens] = useState([]); // the top 20 tokens
    const [tradingCount, setTradingCount] = useState(0);
    const [loader, setLoader] = useState(false);

    let length; // this will keep updating or changing

    // this will allow us to show top 20 tokens
    const LOAD_INITIAL_DATA = async () => {
        try {
            const URL = "https://gateway-arbitrum.network.thegraph.com/api/87422065b4f331b772ff4dd595caa4dc/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV";
            const query = `
            {
                tokens(orderBy: volumeUSD, orderDirection: desc, first: 20) {
                    id
                    name
                }
            }`;
            // make the request 
            const axiosData = await axios.post(URL, { query });
            console.log(axiosData); // Log the entire response
            if (axiosData.data && axiosData.data.data && axiosData.data.data.tokens) {
                setTopTokens(axiosData.data.data.tokens);
                console.log(axiosData.data.data.tokens);
            } else {
                console.error("Unexpected response structure:", axiosData.data);
            }
        } catch (error) {
            console.error("Error loading initial data:", error);
        }
    };

    useEffect(() => {
   //     LOAD_INITIAL_DATA();
    }, []);

    // buy
    const buyTokens = async () => {
        try {
            // buy logic here
        } catch (error) {
            console.error("Error buying tokens:", error);
        }
    };

    // sell
    const sellTokens = async () => {
        try {
            // sell logic here
        } catch (error) {
            console.error("Error selling tokens:", error);
        }
    };

    // trading
    const trading = async () => {
        try {
            // trading logic here
        } catch (error) {
            console.error("Error trading tokens:", error);
        }
    };

    return (
        <CONTEXT.Provider
            value={{
                TRADING_BOT,
                trading,
                topTokens,
            }}>
            {children}
        </CONTEXT.Provider>
    );
};
