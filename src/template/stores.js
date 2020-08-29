import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    merchantJson(slug: { eq: $slug }) {
      title
      price
    }
  }
`

const MerchPage = ({ data }) => {
  const merch = data.merchantJson

  return (
    <Layout>
      <div style={{padding:"100px 30%"}}>
      <h1>{merch.title}</h1>
      <h2>{merch.price}</h2>
      <div>Item List Coming soon</div>
      </div>
    </Layout>
  )
}

export default MerchPage