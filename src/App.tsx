import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PDFEditingInterface from './pages/PDFEditingInterface'
import ExportOptionsScreen from './pages/ExportOptionsScreen'
import MergePDFsScreen from './pages/MergePDFsScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/edit" element={<PDFEditingInterface />} />
        <Route path="/export" element={<ExportOptionsScreen />} />
        <Route path="/merge" element={<MergePDFsScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

