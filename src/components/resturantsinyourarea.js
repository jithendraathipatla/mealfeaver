import React from "react"
import { css } from "@emotion/core"

const Resturants = () => {
  const Name = [
    {
      resturantName: "First Resturant Name",
      resturantImage:
        "https://puzzlerbox.com/template-kits/food-delivery/wp-content/uploads/sites/37/2020/08/vegan-food-RF62EUL.jpg",
      resturantDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      resturantName: "Second Resturant",
      resturantImage:
        "https://puzzlerbox.com/template-kits/food-delivery/wp-content/uploads/sites/37/2020/08/vegan-food-RF62EUL.jpg",
      resturantDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      resturantName: "Third Resturant",
      resturantImage:
        "https://puzzlerbox.com/template-kits/food-delivery/wp-content/uploads/sites/37/2020/08/vegan-food-RF62EUL.jpg",
      resturantDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      resturantName: "Fourth Resturant",
      resturantImage:
        "https://puzzlerbox.com/template-kits/food-delivery/wp-content/uploads/sites/37/2020/08/vegan-food-RF62EUL.jpg",
      resturantDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      resturantName: "Fith Resturant",
      resturantImage:
        "https://puzzlerbox.com/template-kits/food-delivery/wp-content/uploads/sites/37/2020/08/vegan-food-RF62EUL.jpg",
      resturantDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      resturantName: "Sixth Resturant",
      resturantImage:
        "https://puzzlerbox.com/template-kits/food-delivery/wp-content/uploads/sites/37/2020/08/vegan-food-RF62EUL.jpg",
      resturantDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]

  const returningResturants = () => {
    return Name.map((item, i) => {
      return (
        <div key={i} css={card}>
          <img src={item.resturantImage} />
          <br />
          <h3>{item.resturantName}</h3>
          <p>{item.resturantDescription}</p>

          <span>Free Delivery</span>
        </div>
      )
    })
  }
  return (
    <div style={{ margin: "0px 104px", marginTop:"100px" }} css={main}>
    
      <h2>The Best Restaurants in Your Area</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

      <div css={Nearyou}>{returningResturants()}</div>
    </div>
  )
}

export default Resturants

const main = css`
text-align: center;  
  h2{
    color: #1d1d1d;
    font-family: "Montserrat", Sans-serif;
    font-size: 55px;
    font-weight: 700;
    line-height: 1.2em;
    letter-spacing: 0px;
    padding: 0% 20% 0% 20%;
  }
  p{
    padding: 0% 25% 0% 25%;
  }
`


const mainheading = css`
  color: #1d1d1d;
  font-family: "Montserrat", Sans-serif;
  font-size: 55px;
  font-weight: 700;
  line-height: 1.2em;
  letter-spacing: 0px;
  padding: 0% 20% 0% 20%;
  text-align: center;
`

const Nearyou = css`
  max-width: 1140px;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
`

const card = css`
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: rgba(255, 136, 136, 0.2);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.15);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  margin: 20px 20px 20px 20px;
  padding: 20px 20px 20px 20px;
  p {
    color: #000000;
    font-family: "Open Sans", Sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8em;
    margin-bottom: 20px;
    padding: 0px
  }
  span {
    font-size: 14px;
    font-weight: 600;
  }
  :hover {
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: #ee931b;
    cursor: pointer;
  }
`
