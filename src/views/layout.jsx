import { Outlet, Link } from "react-router-dom";
import image from "../img/logo.26_nov.png"
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";

const Layout = () => {

    const style = {
        width: '310px',
        paddingBottom: '10px',
    }

    const shadow = {
        WebkitBoxShadow: "-6px 5px 7px -3px rgba(0,0,0,0.75)",
        MozBoxShadow: "-6px 5px 7px -3px rgba(0,0,0,0.75)",
        "boxShadow": "-6px 5px 7px -3px rgba(0,0,0,0.75)"
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
                            <Link to="login" className="nav-link" >LOGIN</Link>
                        </li>
                    </div>
                </div>
            </nav>
            <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
                <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 4 }} >
                    <Outlet />
                </GridItem>
                <GridItem sx={shadow} as="aside" colSpan={{ base: 6, lg: 2, xl: 2 }} bg="#333333    " minHeight={{ lg: "100vh" }} p={{ base: "20px", lg: "30px" }}>
                    <Sidebar />
                </GridItem>
            </Grid>
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
