import { Routes, Route } from 'react-router-dom'
import { Home } from './src/pages/Home'
import { History } from './src/pages/History'
import { DefaultLayout } from './src/DefaultLayout'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
