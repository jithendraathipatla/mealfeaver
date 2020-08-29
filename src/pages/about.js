import React from "react"
import LayoutComponant from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about_bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pizzaImage: file(relativePath: { eq: "people-eating-pizza.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      promoImage: file(relativePath: { eq: "people-eating-sweet.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LayoutComponant>
      <div>
        <div css={firstBanner}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
        <div css={firstBannertText}>
          <div>
            <h1>About Us</h1>
            <span>
              MealFeaver is on a Mission to Transform the Way Customers Eat
            </span>
          </div>
          <div css={besideAbout}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              pharetra metus metus, vitae consequat justo facilisis at. Nunc
              vestibulum augue iaculis augue bibendum iaculis. Integer
              sollicitudin laoreet sapien et vehicula.
            </p>
            <p>
              Cras id accumsan lacus. Morbi mollis metus vitae felis suscipit,
              in venenatis risus rutrum. Maecenas consequat hendrerit lorem vel
              efficitur.
            </p>
            <br />
            <br />
            <h3>Our Mission</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              pharetra metus metus, vitae consequat justo facilisis at. Nunc
              vestibulum augue iaculis augue bibendum iaculis. Integer
              sollicitudin laoreet sapien et vehicula. Cras id accumsan lacus.
              Morbi mollis metus vitae felis suscipit, in venenatis risus
              rutrum.
            </p>
          </div>
        </div>
        <br />
        <div css={imagesAtLast}>
          <Img fluid={data.pizzaImage.childImageSharp.fluid} />
          <Img fluid={data.promoImage.childImageSharp.fluid} />
          <Img fluid={data.pizzaImage.childImageSharp.fluid} />
          <Img fluid={data.promoImage.childImageSharp.fluid} />
          <Img fluid={data.pizzaImage.childImageSharp.fluid} />
          <Img fluid={data.promoImage.childImageSharp.fluid} />
          <Img fluid={data.pizzaImage.childImageSharp.fluid} />
          <Img fluid={data.promoImage.childImageSharp.fluid} />
          <Img fluid={data.pizzaImage.childImageSharp.fluid} />
          <Img fluid={data.promoImage.childImageSharp.fluid} />
          <Img fluid={data.pizzaImage.childImageSharp.fluid} />
          <Img fluid={data.promoImage.childImageSharp.fluid} />
        </div>

        <div css={last}>
          <div>
            <h3>Our Qoal is to Offer You Food of the Best Quality and Taste</h3>
            <p>
              Morbi felis sapien, tempor sit amet eleifend eget, dignissim non
              tellus. Ut ut tempor est. Etiam ullamcorper libero sed turpis
              tempus ultrices eget in enim. Morbi tellus mauris, lobortis id
              tellus nec, ultrices iaculis lectus. Phasellus eget leo eu turpis
              vulputate scelerisque eu lobortis eros. Nulla facilisi. Etiam
              finibus leo purus, ac vehicula justo sagittis eget.
            </p>
            <p>
              Integer orci nibh, cursus ac nunc et, mattis ullamcorper massa.
              Donec ac sapien turpis. Nulla facilisi. Praesent ut leo pretium,
              fermentum ante a, pellentesque ligula. Nunc facilisis, tellus
              facilisis ornare tristique, libero felis rutrum urna, accumsan
              interdum nibh arcu eget urna. In hac habitasse platea dictumst.
              Phasellus scelerisque ut nunc vel maximus.
            </p>
            <p>
              Nunc facilisis, tellus facilisis ornare tristique, libero felis
              rutrum urna, accumsan interdum nibh arcu eget urna.
            </p>
          </div>
          <div>
            <h3>Quality Food</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <hr />
            <h3>Fast Delivery</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <hr />
            <h3>Affordable Prices</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            
          </div>
        </div>

        <div css={investors}>
          
            <h3>Our Investors</h3>
        </div>
      </div>
    </LayoutComponant>
  )
}

export default About

const investors = css`
 background: #EEF5F7;
 height:300px;
 text-align: center;
 h3 {
    color: #000000;
    font-family: "Montserrat", Sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.4em;
    padding-top:30px;
  }
`

const last = css`
  display: grid;
  grid-gap:10px 60px;
  grid-template-columns:6.5fr 5.5fr;
  padding: 10px 6%;
  text-align: justify;
`

const imagesAtLast = css`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  padding: 10px 6%;
  grid-gap: 20px;
  height: 1000px;
`

const besideAbout = css`
  text-align: justify;
  padding-left: 10%;
  padding-right: 10%;
  h3 {
    color: #000000;
    font-family: "Montserrat", Sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4em;
  }
`

const firstBannertText = css`
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin-top: -35%;
  width: 100%;
  text-align: center;
  padding-left: 10%;
  h1 {
    text-shadow: 0px 5px 5px rgba(255, 255, 255, 0.15);
    color: #1d1d1d;
    font-family: "Montserrat", Sans-serif;
    font-size: 60px;
    font-weight: 900;
    line-height: 1.1em;
  }
  span {
    color: rgba(2, 1, 1, 0.37);
    font-family: "Nunito", Sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.4em;
  }
`
const firstBanner = css`
  position: relative;
`
