import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`

    query MyQuery {
        allMerchantJson {
          nodes {
            slug
            title
            price
          }
        }
      }
      
  
`

const MerchPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
     
     
    </Layout>
  )
}

export default MerchPage
