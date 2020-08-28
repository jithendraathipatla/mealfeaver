/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import Logo from "../images/logo-mealfever.png"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <nav css={nav}>
        <div style={{ zIndex: "100" }} css={logo}>
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div css={navlinks}>
          <ul>
            <Link to="/" activeClassName="active">
              Home
            </Link>
            <Link to="/about" activeClassName="active">
              About Us
            </Link>
            <Link to="/news" activeClassName="active">
              News Room
            </Link>
            <Link to="/faq" activeClassName="active">
              FAQ
            </Link>
            <Link to="/contact" activeClassName="active">
              Contact Us
            </Link>
          </ul>
        </div>
      </nav>
      <div>
        <main>{children}</main>
        <div
          style={{ background: "#15415B", padding: "60px 130px 40px 130px" }}
        >
          <div css={footer}>
            <div css={footermain}>
              <h2>Mealfeaver</h2>

              <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/news">News Room</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact Us</Link>
              </ul>
            </div>

            <div css={footersub}>
              <h3>Some Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <br />
          <hr css={hra} />
          <br />
          <br />
          <div css={footer}>
            <div css={socialicons}>
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
            <div css={paragraph}>
              <p>
                © 2020 Food Delivery - Your Favorite Food, on the way! Integer
                rutrum, ante nec hendrerit blandit, neque mauris eleifend odio,
                nec mollis dolor urna nec neque. Quisque egestas consequat
                suscipit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const logo = css`
  img {
    height: 40px;
    width: auto;
    margin-bottom: 0px;
  }
`
const nav = css`
 display: flex;
 justify-content: space-between;
 padding: 10px;
    width: 100%;
    background: white;
    position: fixed !important;
    top: 0;
    left: 0;
    z-index:40;
    box-shadow: 0px 2px 20px rgba(0,0,0,0.09);
}

`

const navlinks = css`
  z-index: 100;
  ul {
    margin-bottom: 0px;
    margin-top: 5px;
    a {
      color: #ffa14c;
      text-decoration: none;
      margin-left: 50px;
      letter-spacing: 1.8px;
      font-size: 17px;
      line-height: 2;
      font-weight: 550;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }
`

const paragraph = css`
  flex: 9;
  p {
    color: #7591a2;
    font-size: 12px;
    line-height: 1.4em;
    padding: 10px;
  }
`

const socialicons = css`
  display: flex;
  padding-top: 12px;
  flex: 8;
  svg {
    color: #7591a2;
    font-size: 20px;
    padding: 0em;
    margin-right: 25px;
  }
`

const footer = css`
  display: flex;
  color: white;

  h2 {
    font-weight: 700;
    line-height: 1.2em;
    letter-spacing: 0px;
  }
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4em;
  }
`

const footermain = css`
  flex: 8;
  padding: 10px;
  ul {
    margin-left: 0px;
    a {
      display: block;
      color: #ffffff;
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 6px;
      padding-bottom: 6px;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
`
const footersub = css`
  flex: 9;
  padding: 10px;
`
const hra = css`
  background: rgba(255, 255, 255, 0.6);
  border-width: 1px;
`
