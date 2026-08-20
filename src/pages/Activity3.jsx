function Activity3({ setCurrentPage }) {
  return (
    <main className="activity-page">
      <button
        className="back-button"
        onClick={() => setCurrentPage("dashboard")}
      >
        ← Back to Dashboard
      </button>

      <div className="activity-content">
        <span className="activity-page-number">Activity 03</span>

        <h1>Activity 3</h1>

        <p>
          Activity 3 content will be placed here.
        </p>
      </div>
    </main>
  )
}

export default Activity3