function Activity2({ setCurrentPage }) {
  return (
    <main className="activity-page">
      <button
        className="back-button"
        onClick={() => setCurrentPage("dashboard")}
      >
        ← Back to Dashboard
      </button>

      <div className="activity-content">
        <span className="activity-page-number">Activity 02</span>

        <h1>Activity 2</h1>

        <p>
          Activity 2 content will be placed here.
        </p>
      </div>
    </main>
  )
}

export default Activity2