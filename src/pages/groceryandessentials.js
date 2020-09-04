import React, { useState } from "react"
import LayoutComponent from "../components/layout"
import { css } from "@emotion/core"

const FoodDelivery = () => {
  const [cart, setcart] = useState([])
  const products = [
    {
      name: "Milk Packet",
      quantity: "1 Ltr",
      price: 20,
      image:
        "https://5.imimg.com/data5/QX/KR/MY-55842462/full-cream-milk-500x500.jpg",
    },
    {
      name: "Tea Packet",
      quantity: "500 Grms",
      price: 200,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61iBkK-xklL._SL1200_.jpg",
    },
    {
      name: "Sugar",
      quantity: "1 Kg",
      price: 40,
      image:
        "https://media.gettyimages.com/photos/sugar-packet-picture-idAA010896?s=612x612",
    },
  ]

  const addItemtocart = item => {
    setcart([...cart, item])
    alert("item has successfully added to cart")
  }

  const removeCartitem = item1 => {
    alert("item has successfully removed from cart")
    setcart(cart.filter(item => item != item1))
  }

  const displayingTheProjects = () => {
    return products.map(item => {
      return (
        <div key={item} css={card}>
          <img src={item.image} alt={item.name} />
          <br />
          {item.name}
          <br />
          {item.quantity}
          <br />
          <button onClick={() => addItemtocart(item)}>Add To cart</button>
        </div>
      )
    })
  }

  const returningitemsinthecart = () => {
    return cart.map(item => {
      console.log(item)
      return (
        <div key={item} css={card}>
          <img src={item.image} alt={item.name} />
          <br />
          {item.name}
          <br />
          {item.quantity}
          <br />
          <button onClick={() => removeCartitem(item)}>Remove</button>
        </div>
      )
    })
  }
  return (
    <LayoutComponent>
      <div css={mainheader}>
        <br />
        <br />
        <br />
        <h3>Grocery Essentials</h3>
      </div>
      <div css={global}>
        <div css={prod}>{displayingTheProjects()}</div>
        <div css={cartitems}>
          <div style={{ textAlign: "center" }}>
            <h6>Items in cart</h6>
          </div>
          {returningitemsinthecart()}
        </div>
      </div>
    </LayoutComponent>
  )
}

export default FoodDelivery

const global = css`
  display: flex;
  padding: 10px 30px;
`
const cartitems = css``

const prod = css`
  display: grid;
  grid-template-columns: 6fr 6fr;
  grid-gap: 30px;
`
const mainheader = css`
  background: #ffa14c;
  border-top: #242424;
  padding: 15px 170px;
`
const card = css`
  box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.2);
  padding: 0px 140px;
  img {
    height: 200px;
  }
`
