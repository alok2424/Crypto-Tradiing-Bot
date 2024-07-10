import React, { useState, useEffect } from "react";

const Header = ({ networkName, setActiveComponent }) => {
  const [userDetails, setUserDetails] = useState({});
  const [userMembership, setUserMembership] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userProfile"));
    const userMembership = localStorage.getItem("USER_MEMBERSHIP");

    setUserMembership(userMembership);
    setUserDetails(user);
  });
  return (
    <div className="techwave_fn_header">
      <div className="header_left">
        <div className="fn__token_info">
          <span className="token_summary">
            <span className="count">AC</span>
            <span className="text">{networkName}</span>
          </span>
          {
            userMembership !== "notMember" ? (
              <a onClick={()=>setActiveComponent("Trading")}
              className="token_upgrade techwave_fn_button">
              <span>Start Trade</span>
              </a>
            ) :(
              <a
              onClick={()=>setActiveComponent
              ("Trading")}
              className="token_upgrade techwave_fn_button">
              <span>Upgrade</span>
              </a>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
