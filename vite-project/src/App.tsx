import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Layout from './components/Layout'

function App(): JSX.Element {
  return (
    <>
      <Layout header={<Header />} footer={<Footer />}>
        <p>Content</p>
      </Layout>
    </>
  )
}

export default App
