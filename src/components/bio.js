/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/_avatar_kethyn.jpeg/" }) {
        childImageSharp {
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            instagram
            linkedin
            whatsapp
            email
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1),
      }}
      className="bio"
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 90,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Meu nome é <strong>{author.name}</strong>. {author.summary}
        <br />
        <a
          href={`https://linkedin.com/in/${social.linkedin}`}
          target="_blank"
          rel="noreferrer"
          className="social"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href={`https://www.instagram.com/${social.instagram}`}
          target="_blank"
          rel="noreferrer"
          className="social"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=${social.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="social"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="noreferrer"
          className="social"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href={`mailto:${social.email}`}
          target="_blank"
          rel="noreferrer"
          className="social"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </p>
    </div>
  )
}

export default Bio
