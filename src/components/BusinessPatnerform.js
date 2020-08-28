import React from "react"
import TextFieldComponant from "../components/FormField"
import { css } from "@emotion/core"

const BusinessFormSignup = () => {
  return (
    <div css={main}>
      <h4>Get your business Online</h4>

      <TextFieldComponant
        label="Enter Business Name"
        id="outlined-size-small"
        size="small"
      />
      <TextFieldComponant
        label="Your Business Address"
        id="outlined-size-small"
        size="small"
      />
      <TextFieldComponant
        label="Your Emailid"
        id="outlined-size-small"
        size="small"
      />
      <TextFieldComponant
        label="Your Phone Number"
        id="outlined-size-small"
        size="small"
      />
      <div style={{ textAlign: "center" }}>
        <button css={button}>Submit</button>
      </div>
    </div>
  )
}

export default BusinessFormSignup

const main = css`
  h4 {
    font-size: 16px;
    text-align: center;
    color: rgb(21,65,91);
    text-transform: uppercase;
    padding-bottom: 6px;
    margin: 20px 40px;
    margin-top: 1px;
    border-bottom: 2px solid orange;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  }
`

const button = css`
background-color: #EE931B;
color: #FFFFFF;
border: none;
font-size: 12px;
padding: 7px 30px;
border-radius: 4px;
text-transform: uppercase;
font-weight: 600;
letter-spacing: 0.7px;
:hover{
  cursor: pointer;
  text-decoration: underline;
}
`
