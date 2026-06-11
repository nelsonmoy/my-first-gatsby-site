import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <p>I'm a software developer with a passion for learning new technologies and sharing my knowledge with others. In my free time, I enjoy hiking, cooking, and spending time with my family.</p>
        </Layout>
    )
}

export const Head = () => <title>About Us</title>

export default AboutPage