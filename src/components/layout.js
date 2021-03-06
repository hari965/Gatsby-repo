import React from "react";
// import { Link } from 'gatsby';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
// @ts-ignore
import * as layoutStyles from './layout.module.scss';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container} >
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
