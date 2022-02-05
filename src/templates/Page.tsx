import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../layout/Layout"

interface Props {
  data: any
}

const BlogPost: React.FC<Props> = ({ data }) => {
  const post = data.allContentfulPage.edges[0].node
  console.log(post)

  return (
    <Layout>
      <h1 className="title">{post.title}</h1>

      <MDXRenderer>{post.content.childMdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($contentful_id: String!) {
    allContentfulPage(filter: { contentful_id: { eq: $contentful_id } }) {
      edges {
        node {
          content {
            childMdx {
              body
            }
          }
          title
        }
      }
    }
  }
`

export default BlogPost
