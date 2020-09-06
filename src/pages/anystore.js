import React, { useState } from "react"
import LayoutComponent from "../components/layout"
import { css } from "@emotion/core"
import PaperComponant from "../components/materialUiComponents/paper"
import Accordion from '../components/materialUiComponents/accordion'
import Logo from "../images/favicon.png"

const FoodDelivery = () => {

  return (
    <LayoutComponent>
      <div css={mainheader}>
        <br />
        <br />
        <br />
        <h3>Any Store in Khidderpore</h3>
      </div>
      <div css={mainform}>
        <PaperComponant>
          <div css={insideform}>
            <div css={form}>
              
          <Accordion/>
              
            
            </div>
            <div css={sendpackagesTerms}>
              <div css={sendpackagesTermsStyle}>
                <p
                  style={{
                    color: "green",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  How It Works ?
                </p>
                <div>
                  <div>
                    <span
                      style={{ color: "#171e30", fontWeight: "600" }}
                      font-size="2"
                    >
                      WE GET THE STORE INFO -{" "}
                    </span>
                    <span style={{ color: "#171e30" }}>
                      Delivery partner would not be able to make any purchase
                    </span>
                  </div>
                  <br />
                  <div>
                    <span
                      style={{ color: "#171e30", fontWeight: "600" }}
                      font-size="2"
                    >
                      CALL FROM THE STORE -{" "}
                    </span>
                    <span style={{ color: "#171e30" }}>
                      We cannot deliver items that can’t be easily carried on
                      bike
                    </span>
                  </div>
                  <br />
                  <div>
                    <span
                      style={{ color: "#171e30", fontWeight: "600" }}
                      font-size="2"
                    >
                      NOTING DOWN ITEMS -{" "}
                    </span>
                    <span style={{ color: "#171e30" }}>
                      We will not be able to get something transported via these
                    </span>
                  </div>
                  <br />
                  <div>
                    <span
                      style={{ color: "#171e30", fontWeight: "600" }}
                      font-size="2"
                    >
                      DELIVERY OF LISTED PRODUCTS -{" "}
                    </span>
                    <span style={{ color: "#171e30" }}>
                      Please don’t hand over any restricted item
                    </span>
                  </div>
                  <div css={imageContainer}>
                    <img src={Logo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PaperComponant>
      </div>
    </LayoutComponent>
  )
}

export default FoodDelivery
const imageContainer = css`
  text-align: center;
  img {
    height: 100px;
    margin-bottom: 0px;
    margin-top: 60px;
  }
`

const sendpackagesTermsStyle = css`
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 0px;
  padding-bottom: 24px;
`

const sendpackagesTerms = css`
box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}`

const insideform = css`
  padding: 20px 40px;
  display: grid;
  grid-template-columns: 7fr 5fr;
  grid-gap: 20px 40px;
`
const form = css`
  border-right: 1px solid #eeee;
  padding-right: 40px;
  padding-bottom: 5px;
`
const mainform = css`
  padding: 10px 140px;
  background: rgb(240, 245, 247);
`

const mainheader = css`
  background: #ffa14c;
  border-top: #242424;
  padding: 15px 170px;
`
