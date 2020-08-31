import React,{useState} from "react"
import LayoutComponent from "../components/layout"
import { css } from "@emotion/core"
import AutoPlaceSuggest from "../components/autoPlaceSuggest"

const FoodDelivery = () => {
    const [eventvenue, seteventvenue] = useState('')
    let _venue = 'Bangalore';
    const handleVenue = (value) => {
        _venue = value;
    };
  return (
    <LayoutComponent>
      <div css={mainheader}>
        <br />
        <br />
        <br />
        <h3>Send Packages</h3>
      </div>
      <div style={{ height: "400px" }}>
        <h1>PickUp</h1><AutoPlaceSuggest
          value={eventvenue}
          handleVenue={handleVenue}
        />

<h1>Drop</h1><AutoPlaceSuggest
          value={eventvenue}
          handleVenue={handleVenue}
        />
      </div>
    </LayoutComponent>
  )
}

export default FoodDelivery

const mainheader = css`
  background: #ffa14c;
  border-top: #242424;
  padding: 15px 170px;
`
