import React from 'react'
import LayoutComponent from '../components/layout'
import {css} from '@emotion/core'

const FoodDelivery = () => {
    return(
        <LayoutComponent>
           <div css={mainheader}>
               <br/>
               <br/>
               <br/>
               <h3>Gifts And Life</h3>
           </div>
           <div style={{height:"400px"}}>

           </div>
        </LayoutComponent>
    )
}

export default FoodDelivery;

const mainheader = css`
background: #ffa14c;
border-top: #242424;
padding: 15px 170px;
`