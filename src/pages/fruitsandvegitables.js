import React, { useState } from "react"
import LayoutComponent from "../components/layout"
import { css } from "@emotion/core"
import MerchantData from "../../data/merchant.json"
import { Link } from "gatsby"

const FoodDelivery = () => {
  const displayingMerchantData = () => {
    let data = MerchantData.filter(item => {
      return item.category === "fruits_and_vegitables"
    })
    return data.map((item, i) => {
      return (
        <Link to={`/stores/${item.slug}`}>
          <div key={i} css={card}>
          {item.title}
        </div>
        </Link>
      )
    })
  }

  return (
    <LayoutComponent>
      <div css={mainheader}>
        <br />
        <br />
        <br />
        <h3>Fruits And Vegitables</h3>
      </div>
      <div css={merchantArea}>{displayingMerchantData()}</div>
    </LayoutComponent>
  )
}

export default FoodDelivery

const merchantArea = css`
  display: grid;
  grid-template-columns: 6fr 6fr;
  padding: 40px 20%;
  grid-gap: 50px;
  a{
    text-decoration: none;
    color:none;
}
`

const card = css`
  display: flex;
  box-shadow: rgba(188, 188, 188, 0.5) 0px 2px 9px 0px;
  border-radius: 16px;
  padding: 10px;
  min-height:120px;
  :hover{
      cursor: pointer;
      transform: translateY(-1px);
      border:1px solid;
  }
`

const mainheader = css`
  background: #ffa14c;
  border-top: #242424;
  padding: 15px 170px;
  
`
