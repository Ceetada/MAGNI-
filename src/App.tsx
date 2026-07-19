import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import HomeV2 from './pages/HomeV2'
import ProjectDetail from './pages/ProjectDetail'
import ScrollProgress from './components/ScrollProgress'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<HomeV2 />} />
        {/* the redesign was promoted to the homepage; old links to /v2 follow it */}
        <Route path="/v2" element={<Navigate to="/" replace />} />
        {/* the original design, kept as an archive */}
        <Route path="/classic" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App
