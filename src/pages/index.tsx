import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Matts966.github.io</h1>
        <p>Welcome to my Gatsby site.</p>
        <a href="https://matts966.github.io/slides/">my slides</a>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
