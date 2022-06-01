import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const response = await fetch ("https://floating-hollows-19339.herokuapp.com/projects");
    const projects: any[] = await response.json();


    const fields: ISitemapField[] = projects.map(project => ({loc: `https://www.cococreativeweb.com/projects/${project.slug}`, lastmod: new Date().toISOString()}))


    return getServerSideSitemap(ctx, fields);
}


export default function Site(){}