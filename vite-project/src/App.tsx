import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Layout from './components/Layout'
import MainRouter from './navigation'

function App(): JSX.Element {
  return (
    <>
      <Layout header={<Header />} footer={<Footer />}>
        <MainRouter />
      </Layout>
    </>
  )
}

export default App
