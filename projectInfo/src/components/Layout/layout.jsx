import { Outlet } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import { Sidebar } from "../../Sidebar/Sidebar";
import { MenuHamb } from "../../MenuHamb/Menu";
 


export const Layout = () => {
    return(
        <div>
            <Nav />
            <Sidebar/>
            <MenuHamb/>
            <Outlet/>
            
           
        </div>
    )
}