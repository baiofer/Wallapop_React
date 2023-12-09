import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Filters from "../shared/Filters"
import './Layout.css'
import { useAdvert } from "../../pages/adverts/context"

function Layout() {

    const { nameToSearch } = useAdvert()

    console.log('NameToSearch: ', nameToSearch)

    return (
        <div className="layout">
            <Header />
            {
                nameToSearch ? <Filters /> : null
            }
            <main className="layout-main bordered">
                <Outlet />
            </main>
            <Footer className="layout-footer bordered"/>
        </div>
    )
}

export default Layout