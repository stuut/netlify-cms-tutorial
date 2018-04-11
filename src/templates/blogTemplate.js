import React from "react"
import Img from 'gatsby-image'



export default function Template({data, featuredimage}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
      <img src={post.frontmatter.image.childImageSharp.responsiveSizes.base64} width="100%" data-src={post.frontmatter.image.childImageSharp.responsiveSizes.src} data-srcset={post.frontmatter.image.childImageSharp.responsiveSizes.srcSet} data-sizes={post.frontmatter.image.childImageSharp.responsiveSizes.sizes} className="lazyload" alt={post.frontmatter.title}/>

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
           responsiveSizes(maxWidth: 400) {
             src
             srcSet
             sizes
           }
         }
       }
      }
    }
  }
`;
