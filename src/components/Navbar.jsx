function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="top-nav" aria-label="Main navigation">
      <button className="brand-button" onClick={() => setCurrentPage("dashboard")}>
        React Activity Portal
      </button>

      <div className="nav-links">
        <button
          className={currentPage === "dashboard" ? "active" : ""}
          onClick={() => setCurrentPage("dashboard")}
        >
          Home
        </button>
        <button
          className={currentPage === "activity1" ? "active" : ""}
          onClick={() => setCurrentPage("activity1")}
        >
          Activity 1
        </button>
        <button
          className={currentPage === "activity2" ? "active" : ""}
          onClick={() => setCurrentPage("activity2")}
        >
          Activity 2
        </button>
        <button
          className={currentPage === "activity3" ? "active" : ""}
          onClick={() => setCurrentPage("activity3")}
        >
          Activity 3
        </button>
      </div>
    </nav>
  )
}

export default Navbar
