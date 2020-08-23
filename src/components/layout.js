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
      <nav css={nav} >
        <div style={{zIndex:'100'}}>
          <h4>Mealfeaver</h4>
        </div>
        <div css={navlinks}>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/news">News Room</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact Us</Link>
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

const nav = css`
 display: flex;
 justify-content: space-around;
 position: absolute;
 padding: 30px 10px;
 width: 100%;
}

`

const navlinks = css`
z-index: 100;
 ul{
  a{
    color: white;
    -webkit-text-decoration: none;
    text-decoration: none;
    padding-left: 40px;
    letter-spacing: 0.2px;
    font-size: 16px;
    line-height: 1.8em;
    font-weight: 600;
    font-family: "Open Sans",Sans-serif;
    :hover{
      text-decoration: underline;
    }
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
  padding-top: 10px;
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
