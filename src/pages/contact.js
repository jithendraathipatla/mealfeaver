import React from "react"
import LayoutComponant from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import FormFieldComponant from "../components/FormField"
import TextAreaFromComponant from "../components/FormTextArea"
import SelectComponant from "../components/FomSelect"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "city_bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LayoutComponant>
      <br />
      <br />
      <div css={one}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <div css={two}>
          <h2>Contact Us</h2>
          <span>We are Here to help You</span>
        </div>
        <br />
        <br />
        <div css={three}>
          <div>
            <h3>Customer Service</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <br />
            <h3>Need Help With Your Order?</h3>
            <p>
              <strong>+1 718 555 55 55</strong>
            </p>
            <hr css={seperator}></hr>
            <br />
            <h3>Send Us a Message</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <br />
            <FormFieldComponant
              label="Your Name"
              id="outlined-size-small"
              size="small"
            />
            <FormFieldComponant
              label="Your Email"
              id="outlined-size-small"
              size="small"
            />{" "}
            <FormFieldComponant
              label="Your Phone"
              id="outlined-size-small"
              size="small"
            />
            <SelectComponant />
            <br />
            <div style={{ textAlign: "center" }}>
              <button css={button}>Send Message</button>
            </div>
          </div>
          <div css={last}>
            <h3>Headquarters</h3>
            <p>
              NewYork
              <br />
              121 Montague St
              <br />
              Brooklyn, NY 11201
              <br />
              Monday – Friday, 9:30 am – 5:30 pm
              <br />
              <a href="#">Get Directions</a>
              <br />
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9280684916944!2d88.42931490895513!3d22.58179349522903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275bcb7382f41%3A0xb6578006dd943c57!2sKamlesh%20Dhaba!5e0!3m2!1sen!2sin!4v1598424756244!5m2!1sen!2sin"
              width="500"
              height="550"
              frameborder="0"
              style={{ border: "0px" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
        <br />
        <br />
      </div>
    </LayoutComponant>
  )
}

export default About

const last = css`
  background-color: #f8f6eb;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  margin: 0px 60px 0px 60px;
  padding: 40px 40px 10px 40px;
  p {
    color: #000000;
    font-family: "Open Sans", Sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8em;
  }
`

const seperator = css`
  border-top: var(--divider-border-width) var(--divider-border-style)
    var(--divider-border-color);
`

const three = css`
  padding: 0px 180px 0px 141px;
  display: flex;
  justify-content: space-between;
`

const one = css`
  img {
    position: relative;
  }
`

const two = css`
  position: absolute;
  top: 20%;
  padding: 0px 140px;
  h2 {
    color: #1d1d1d;
    font-family: "Montserrat", Sans-serif;
    font-size: 55px;
    font-weight: 700;
    line-height: 1.2em;
    letter-spacing: 0px;
    margin-bottom: 2px;
  }
  span {
    color: #7a7a7a;
    font-weight: 700;
    padding-left: 5px;
  }
`
const button = css`
  background-color: #ee931b;
  color: #ffffff;
  border: none;
  font-size: 12px;
  padding: 7px 30px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.7px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
