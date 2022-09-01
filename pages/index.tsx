
import Layout from '../src/components/Layout'
import Button from '../src/components/Buttons/Button'
import { ButtonVariant } from '../src/components/Buttons/Button.styled'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Button label={"Hello"}/>
    <Button label={"Hello"} variant={ButtonVariant.Secondary}/>
  </Layout>
)

export default IndexPage
