import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ModalComponant from '../components/modal'
import { css } from "@emotion/core"
import Categories from "../components/categories"

import BusinessFormSignup from "../components/BusinessPatnerform"
import DeliveryFormSignup from '../components/DeliveryForm'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Categories />
        <div css={division}></div>
        <div css={sponser}>
          <div>
            <img src="https://puzzlerbox.com/template-kits/food-delivery/wp-content/uploads/sites/37/elementor/thumbs/01-elements-30-food-delivery-icons-W5NQ6ZA-otks8k8vwl3ur0ri2maolpef6u6k5lljp3zmojeo6g.png" />
            <h3>Become a Patner</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              rutrum, ante nec hendrerit blandit, neque mauris eleifend odio,
              nec mollis dolor urna nec neque. Quisque egestas consequat
              suscipit. Cras condimentum dui vitae laoreet feugiat.
            </p>
            <ModalComponant name="Learn More"><BusinessFormSignup/></ModalComponant>
          </div>
          <div>
            <img src="https://puzzlerbox.com/template-kits/food-delivery/wp-content/uploads/sites/37/elementor/thumbs/02-elements-30-food-delivery-icons-W5NQ6ZA-otks8k8vwl3ur0ri2maolpef6u6k5lljp3zmojeo6g.png" />
            <h3>Become a Courier</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              rutrum, ante nec hendrerit blandit, neque mauris eleifend odio,
              nec mollis dolor urna nec neque. Quisque egestas consequat
              suscipit. Cras condimentum dui vitae laoreet feugiat.
            </p>
            <ModalComponant name="Learn More"><DeliveryFormSignup/></ModalComponant>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

const sponser = css`
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  display: flex;
  justify-content: space-around;
  padding: 5% 104px;
  text-align: center;
  color: black;
  div :nth-child(1) {
    border-right: 1px solid #242424;
  }
  h3 {
    color: #000000;
    font-family: "Montserrat", Sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4em;
  }
  p {
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8em;
    padding: 0px 40px;
  }
  img {
    margin-bottom: 0px;
  }
  a {
    font-weight: 700;
    fill: #1a75e9;
    color: #1a75e9;
  }
`

const division = css`
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: rgba(255, 136, 136, 0.31);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  padding: 0px 0px 100px 0px;
`
