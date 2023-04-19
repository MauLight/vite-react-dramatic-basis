import { Outlet, Link } from "react-router-dom";
import image from "../img/logo.26_nov.png"
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";

const Layout = () => {

    const style = {
        width: '310px',
        paddingBottom: '10px',
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light px-4">
                <div className="container-fluid">
                    <a href="https://screenwriters.quest/" className="navbar-brand" ><img alt='logo' src={image} style={style} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
                        <li className="nav-item mx-3">
                            <Link to="/" className="nav-link active" >HOME</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <a href="https://screenwriters.quest/quest" className="nav-link active">QUEST</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a href="https://screenwriters.quest/community" className="nav-link active">COMMUNITY</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a href="https://screenwriters.quest/blog" className="nav-link active">BLOG</a>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/profile" className="nav-link" >PROFILE</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/" className="nav-link" >LOGIN</Link>
                        </li>
                    </div>
                </div>
            </nav>

            <Outlet />

        </>
    )
}

export default Layout;


/*
{!store.token ? (
                                <li className="nav-item mx-3">
                                    <Link to="login" className="nav-link" >LOGIN</Link>
                                </li>
                            ) : (
                                <li className="nav-item mx-3">
                                    <a className="nav-link" onClick={() => actions.logout()}>
                                        LOG OUT
                                    </a>
                                </li>
                            )}
*/
