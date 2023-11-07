import * as React from "react"
import {graphql, HeadFC, PageProps} from "gatsby";
import {QueryResult} from "../../graphql/types";
import MainLayout from "../../layouts/main";
import "../../styles/app.scss";
import BeforeContent from "../../components/before-content";
import Meta from "../../components/meta";
import Seo from "../../components/seo";
import "prismjs/themes/prism-solarizedlight.css";
import {useEffect} from "react";
import ArticlesNavigation from "../../components/articlesNavigation";

const DocsPageTemplate = ({data, location}: PageProps<QueryResult>) => {
  const {markdownRemark} = data;
  const {frontmatter, html, timeToRead, fileAbsolutePath} = markdownRemark;

  useEffect(() => {
    // @ts-ignore
    handleCopy();
    // @ts-ignore
    handleTitleLinks();
    // @ts-ignore
    rskTokenBridge();
    // @ts-ignore
    twoWayPegin();
    // @ts-ignore
    accordions();
    // @ts-ignore
    switches();
    // @ts-ignore
    customTerminals();

    if (window.location.hash) {
      // @ts-ignore
      document.querySelector(window.location.hash).scrollIntoView();
    }
  }, []);

  // @ts-ignore
  return (
    <MainLayout pathname={typeof location !== 'undefined' ? location.pathname : '/'}
                href={typeof location !== 'undefined' ? location.href : '/'}>
      <Meta timeToRead={timeToRead} fileAbsolutePath={fileAbsolutePath} title={frontmatter.title}/>
      <BeforeContent className="mb-4 mt-3"/>
      <h1>{frontmatter.title}</h1>
      <div className="page-content__markdown main-central-col" dangerouslySetInnerHTML={{__html: html}}/>
      <div className="render-features" data-features={frontmatter.render_features || ''}/>
      <ArticlesNavigation path={location.pathname} />

      <svg id="anchor-icon-template" style={{ display: 'none' }} width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 31.891 31.891">
        <g style={{ fill: 'white' }}>
          <path d="M30.543,5.74l-4.078-4.035c-1.805-1.777-4.736-1.789-6.545-0.02l-4.525,4.414c-1.812,1.768-1.82,4.648-0.02,6.424
            l2.586-2.484c-0.262-0.791,0.061-1.697,0.701-2.324l2.879-2.807c0.912-0.885,2.375-0.881,3.275,0.01l2.449,2.42
            c0.9,0.891,0.896,2.326-0.01,3.213l-2.879,2.809c-0.609,0.594-1.609,0.92-2.385,0.711l-2.533,2.486
            c1.803,1.781,4.732,1.789,6.545,0.02l4.52-4.41C32.34,10.396,32.346,7.519,30.543,5.74z"/>
          <path d="M13.975,21.894c0.215,0.773-0.129,1.773-0.752,2.381l-2.689,2.627c-0.922,0.9-2.414,0.895-3.332-0.012l-2.498-2.461
            c-0.916-0.906-0.91-2.379,0.012-3.275l2.691-2.627c0.656-0.637,1.598-0.961,2.42-0.689l2.594-2.57
            c-1.836-1.811-4.824-1.82-6.668-0.02l-4.363,4.26c-1.846,1.803-1.855,4.734-0.02,6.549l4.154,4.107
            c1.834,1.809,4.82,1.818,6.668,0.018l4.363-4.26c1.844-1.805,1.852-4.734,0.02-6.547L13.975,21.894z"/>
          <path d="M11.139,20.722c0.611,0.617,1.611,0.623,2.234,0.008l7.455-7.416c0.621-0.617,0.625-1.615,0.008-2.234
            c-0.613-0.615-1.611-0.619-2.23-0.006l-7.457,7.414C10.529,19.103,10.525,20.101,11.139,20.722z"/>
        </g>
      </svg>
    </MainLayout>
  );
}

export default DocsPageTemplate;

export const pageQuery = graphql`
  query($nodeId: String!) {
    markdownRemark(fields: { nodeId: { eq: $nodeId } }) {
      ...PageInfo
    }
  }
`;

export const Head: HeadFC = ({pageContext}) => {
  return (
    <>
      {/*@ts-ignore*/}
      <Seo title={`RSK Devportal - ${pageContext.title}`}>
        <link href="/assets/css/owl.carousel.min.css" rel="stylesheet"/>
        <link href="/assets/css/owl.theme.default.min.css" rel="stylesheet"/>
        <link href="/assets/css/code.css" rel="stylesheet"/>
      </Seo>
    </>
  );
}
