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
        <button>Submit</button>
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
