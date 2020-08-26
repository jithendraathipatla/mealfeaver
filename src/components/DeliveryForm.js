import React from "react"
import TextFieldComponant from "../components/FormField"
import { css } from "@emotion/core"

const DeliveryFormSignup = () => {
  return (
    <div css={main}>
      <h4>Become a Delivery Agent</h4>
      <TextFieldComponant label="Your Name"  id="outlined-size-small" size="small"/>
      <TextFieldComponant label="Your Emailid"  id="outlined-size-small" size="small" />
      <TextFieldComponant label="Your Phone Number"  id="outlined-size-small" size="small"/>
      <div style={{ textAlign: "center" }}>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default DeliveryFormSignup

const main = css`
  h4{
      font-size:20px;
      text-align: center;
  }
`