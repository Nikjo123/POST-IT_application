import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

function RootLayout(){
    return(
    <>
        <MainHeader />
        <Outlet />
    </>
    )
}
// Outlet is a placeholder where nested route can render their content in the root component. 
export default RootLayout