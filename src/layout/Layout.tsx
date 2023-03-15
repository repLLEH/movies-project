import React, { ReactNode } from "react";
import Nav from "../components/Nav/Nav";

interface Props {
    children: ReactNode
}


const Layout = ({children, ...props}: Props) =>{
    return (
        <div>
            <Nav/>
            <div>{children}</div>
        </div>
    );
};

export default Layout;