import { Outlet } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import { Sidebar } from "../../Sidebar/Sidebar";
 


export const Layout = () => {
    return(
        <div>
            <Nav />
            <Sidebar/>
            <Outlet/>
            
           
        </div>
    )
}