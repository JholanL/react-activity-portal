function Activity3({ setCurrentPage }) {
  return (
    <main className="activity-page shell">
      <button
        className="back-button"
        onClick={() => setCurrentPage("dashboard")}
      >
        Back to Dashboard
      </button>

      <section className="activity-content placeholder-page page-enter">
        <div className="activity-intro placeholder-intro">
          <span className="activity-page-number">Activity 03</span>
          <h1>Placeholder</h1>
          <p>
            This activity page is reserved for your groupmate. The final
            content can be added here once their assigned activity is ready.
          </p>

          <div className="rule-list">
            <span>In Development</span>
            <span>Groupmate Area</span>
            <span>Same Portal Style</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Activity3
