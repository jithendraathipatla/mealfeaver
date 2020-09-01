import React, { useState } from "react"
import LayoutComponent from "../components/layout"
import { css } from "@emotion/core"
import SEO from "../components/seo"
import StepperContainer from "../components/stepper"
import Logo from "../images/favicon.png"

const FoodDelivery = () => {

  return (
    <LayoutComponent>
      <SEO title="Send Packages | MealFever" />
      <div css={mainheader}>
        <br />
        <br />
        <br />
        <h3>Send Packages</h3>
      </div>
      <div css={sendpackages}>
        <StepperContainer />
        <div css={sendpackagesTerms}>
          <div css={sendpackagesTermsStyle}>
            <p style={{color:"green", fontWeight:"600"}}>Some do’s &amp; Dont’s</p>
            <div>
              <div>
                <span style={{color:"#171e30", fontWeight:"600"}} font-size="2">
                  No Purchases -{" "}
                </span>
                <span style={{color:"#171e30"}}>
                  Delivery partner would not be able to make any purchase
                </span>
              </div>
              <br/>
              <div>
                <span style={{color:"#171e30", fontWeight:"600"}} font-size="2">
                  Package Weight -{" "}
                </span>
                <span style={{color:"#171e30"}}>
                  We cannot deliver items that can’t be easily carried on bike
                </span>
              </div>
              <br/>
              <div class="sc-bdVaJa bLipjj">
                <span style={{color:"#171e30", fontWeight:"600"}} font-size="2">
                  No Autos/Cabs -{" "}
                </span>
                <span style={{color:"#171e30"}}>
                  We will not be able to get something transported via these
                </span>
              </div>
              <br/>
              <div class="sc-bdVaJa bLipjj">
                <span style={{color:"#171e30", fontWeight:"600"}} font-size="2">
                  Restricted/Illegal Item -{" "}
                </span>
                <span style={{color:"#171e30"}}>
                  Please don’t hand over any restricted item
                </span>
              </div>
              <div css={imageContainer}>
                     <img src={Logo}/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </LayoutComponent>
  )
}

export default FoodDelivery


const imageContainer = css`
  text-align: center;
  img{
    height:300px;
    margin-bottom:0px;
  }
`

const sendpackagesTermsStyle = css`
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
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
    font-family: Gilroy, sans-serif;;
}
`

const sendpackages = css`
  background: rgb(240, 245, 247);
  display: grid;
  grid-template-columns: 7fr 5fr;
  padding: 40px 80px;
  grid-gap: 0px 20px;
`

const mainheader = css`
  background: #ffa14c;
  border-top: #242424;
  padding: 15px 170px;
`
