import React from "react";
import Img from "gatsby-image";
import PropTypes from 'prop-types'



export default function Template({data, featuredimage}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
      <img sizes={post.frontmatter.image.childImageSharp.sizes}></img>

        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

ProductPageTemplate.propTypes = {
  image: PropTypes.string,

}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            sizes(maxWidth: 786) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
