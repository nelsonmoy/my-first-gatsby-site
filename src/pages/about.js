import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Greeting from "../components/greeting"

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

export const Head = () => <title>About Us</title>

export default AboutPage