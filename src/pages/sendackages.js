import React, { useState } from "react"
import LayoutComponent from "../components/layout"
import { css } from "@emotion/core"
import SEO from "../components/seo"
import StepperContainer from "../components/stepper"

const FoodDelivery = () => {
  const [eventvenue, seteventvenue] = useState("")
  let _venue = "Bangalore"
  const handleVenue = value => {
    _venue = value
  }
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
        <div>
          <div >
            <div>
              <p color="green.3" >
                Some do’s &amp; Dont’s
              </p>
              <div >
                <div>
                  <span
                    color="black.2"
                    font-size="2"
                    
                  >
                    No Purchases -{" "}
                  </span>
                  <span
                    color="gray.5"
                    font-size="2"
                    
                  >
                    Delivery partner would not be able to make any purchase
                  </span>
                </div>
                <div >
                  <span
                    color="black.2"
                    font-size="2"
                    
                  >
                    Package Weight -{" "}
                  </span>
                  <span
                    color="gray.5"
                    font-size="2"
                    
                  >
                    We cannot deliver items that can’t be easily carried on bike
                  </span>
                </div>
                <div class="sc-bdVaJa bLipjj">
                  <span
                    color="black.2"
                    font-size="2"
                    
                  >
                    No Autos/Cabs -{" "}
                  </span>
                  <span
                    color="gray.5"
                    font-size="2"
                   
                  >
                    We will not be able to get something transported via these
                  </span>
                </div>
                <div class="sc-bdVaJa bLipjj">
                  <span
                    color="black.2"
                    font-size="2"
                  
                  >
                    Restricted/Illegal Item -{" "}
                  </span>
                  <span
                    color="gray.5"
                    font-size="2"
                    
                  >
                    Please don’t hand over any restricted item
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutComponent>
  )
}

export default FoodDelivery

const sendpackages = css`
  background: rgb(240, 245, 247);
  display: grid;
  grid-template-columns: 7fr 5fr;
  padding: 40px 80px;
`

const mainheader = css`
  background: #ffa14c;
  border-top: #242424;
  padding: 15px 170px;
`
