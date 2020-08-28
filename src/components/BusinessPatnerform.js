import React from "react"
import TextFieldComponant from "../components/FormField"
import { css } from "@emotion/core"

const BusinessFormSignup = () => {
  return (
    <div css={main}>
      <h4>Get Your Business Online</h4>

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
    font-size: 20px;
    text-align: center;
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
