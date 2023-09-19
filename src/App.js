import { Routes, Route } from 'react-router-dom'
import loadable from '@loadable/component'

// Page containers
const Landing = loadable(() => import('./containers/Landing'))
const Hayward = loadable(() => import('./containers/Hayward'))
const Newark = loadable(() => import('./containers/Newark'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="hayward" element={<Hayward />} />
      <Route path="newark" element={<Newark />} />
    </Routes>
  )
}

export default App
