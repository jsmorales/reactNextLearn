
import Header from './Header'
import React from "react";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = (props) => (
    <div style={layoutStyle}>

        <style jsx global>{`
          h1, a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>

        <Header/>

        {props.children}
    </div>
);

export default Layout