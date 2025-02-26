import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import MainLayout from "./pages/MainSelected"
import MainCreate from "./pages/MainCreate"
import Layout from "./layout/Layout"
import MainEdit from "./pages/MainEdit"

const App = () => {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<MainLayout /> } />
          <Route path="/create" element={<MainCreate /> } />
          <Route path="/:id/edit" element={<MainEdit /> } />
      </Routes>
    </Layout>
  )
}

export default App
