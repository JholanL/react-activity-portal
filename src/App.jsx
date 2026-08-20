import { useState } from "react"
import Dashboard from "./pages/Dashboard"
import Activity1 from "./pages/Activity1"
import Activity2 from "./pages/Activity2"
import Activity3 from "./pages/Activity3"
import Navbar from "./components/Navbar"

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard")

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "dashboard" && (
        <Dashboard setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "activity1" && (
        <Activity1 setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "activity2" && (
        <Activity2 setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "activity3" && (
        <Activity3 setCurrentPage={setCurrentPage} />
      )}
    </>
  )
}

export default App
