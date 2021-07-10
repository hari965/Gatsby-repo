import React from "react"
import Layout from "../components/layout";
import { graphql, useStaticQuery } from 'gatsby';

const Blog = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark {
            edges {
                node {
                    frontmatter{
                        title
                    }
                }
            }
        }
    }
    `)
    console.log(data);
    return (
        <Layout>
            <h1>Blogs</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edges) => {
                    return (
                        <li>
                            <h2>{edges.node.frontmatter.title}</h2>
                            {/* <p>{edges.node.frontmatter.date}</p> */}
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default Blog;
