import React from "react"
import {Link} from 'gatsby'
import { css } from "@emotion/core"

import GroceryAndEssentials from "../images/grocery.png"
import FruitsAndVegitables from "../images/fruitsVegetables.png"
import SendPackages from "../images/sendPackages.png"
import MeatAndFish from "../images/meatFish.png"
import FoodDelivery from "../images/restaurants.png"
import Medicines from "../images/medicine.png"
import PetSupplies from "../images/petSupplies.png"
import HealthAndWellness from "../images/Wellness.png"
import GiftsAndLife from "../images/gifting.png"

const Categories = () => {
  const cate = [
    {
      name: "Grocery And Essentials",
      Image: GroceryAndEssentials,
      link: "/groceryandessentials",
    },
    {
      name: "Fruits And Vegitables",
      Image: FruitsAndVegitables,
      link: "/fruitsandvegitables",
    },
    {
      name: "Send Packages",
      Image: SendPackages,
      link: "/sendackages",
    },
    {
      name: "Meat And Fish",
      Image: MeatAndFish,
      link: "/meatandfish",
    },
    {
      name: "Food Delivery",
      Image: FoodDelivery,
      link: "/fooddelivery",
    },
    {
      name: "Medicines",
      Image: Medicines,
      link: "/medicines",
    },
    {
      name: "Pet Supplies",
      Image: PetSupplies,
      link: "/petsupplies",
    },
    {
      name: "Health And Wellness",
      Image: HealthAndWellness,
      link: "/healthandwellness",
    },
    {
      name: "Gifts And Life",
      Image: GiftsAndLife,
      link: "/giftsandlife",
    },
  ]

  const displayingCategories = () => {
    return cate.map((item, i) => {
      return (
           <Link to={item.link}>
           <div key={i} css={card}>
            <img src={item.Image} />
            <br />
            <h3>{item.name}</h3>
          </div>
           </Link>
      )
    })
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h2 style={{ textAlign: "center" }}>Shop by Categories</h2>
      <div css={main}>{displayingCategories()}</div>
    </div>
  )
}

export default Categories

const main = css`
  text-align: center;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  margin: 0px 40px;
  a{
    text-decoration: none;
  }
`

const card = css`
  display: flex;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: rgba(255, 136, 136, 0.2);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.15);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  margin: 20px 20px 20px 20px;
  padding: 20px 20px 20px 20px;
  :hover {
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: #ee931b;
    cursor: pointer;
  }
  img {
    height: 60px;
    width: 60px;
    margin-bottom: 0px;
  }
  h3 {
    margin-left: 16px;
    color: rgb(23, 30, 48);
    font-size: 20px;
    line-height: 26px;
    margin-top: 15px;
  }
`
