import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderStyles>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ flex: "0 0 auto", color: "#fff", paddingLeft: "20px" }}>
                    <Link to="/">Logo</Link>
                </div>
                <div style={{ display: "flex", flex: "0 0 auto", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ padding: "10px", color: "#fff", justifyContent: "center", alignItems: "center" }}>
                        <span style={{ verticalAlign: "middle" }}>
                            <Link to="/">Home</Link>
                        </span>
                    </div>
                    <div style={{ padding: "10px", color: "#fff" }}>
                        <span style={{ verticalAlign: "middle" }}>
                            <Link to="/about">About</Link>
                        </span>
                    </div>
                </div>
                <div style={{ flex: "0 0 auto", color: "#fff", paddingRight: "20px", display: "flex", flexDirection: "row" }}>
                    <div style={{ padding: "5px" }}>icon</div>
                    <div style={{ padding: "5px" }}>icon</div>
                </div>
            </div>
        </HeaderStyles>
    );
};

const HeaderStyles = styled.div`
    flex: none;
    overflow: hidden;
    color: hsla(0, 100%, 100%, 0.87);
    background-color: #121212;
    box-shadow: 0px 6px 8px 0px rgb(0 0 0 / 14%), 0px 3px 3px -2px rgb(0 0 0 / 12%), 0px 1px 8px 0px rgb(0 0 0 / 20%);
    height: 40px;
`;

export default Header;
