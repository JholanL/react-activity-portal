function Dashboard({ setCurrentPage }) {
  return (
    <main className="dashboard shell">
      <section className="dashboard-hero page-enter">
        <div className="hero-copy">
          <p className="dashboard-label">React JS Practical Assessment</p>
          <h1>React Activity Portal</h1>
          <p className="dashboard-subtitle">
            A collection of React activities focused on inputs, events,
            validation, conditional logic, and clear result displays.
          </p>
        </div>
      </section>

      <section className="activity-grid" aria-label="Activity list">
        <article className="activity-card feature-card">
          <span className="activity-number">01</span>
          <h2>Employee Attendance Checker</h2>
          <p>
            Enter an employee name and time-in value, then show the attendance
            status with a follow-up message.
          </p>
          <button onClick={() => setCurrentPage("activity1")}>
            Open Attendance
          </button>
        </article>

        <article className="activity-card construction-card">
          <span className="activity-number">02</span>
          <span className="card-badge">In Development</span>
          <h2>Placeholder</h2>
          <p>
            Reserved for your groupmate. This page is ready for their assigned
            activity once they add the final content.
          </p>
          <button onClick={() => setCurrentPage("activity2")}>
            View Placeholder
          </button>
        </article>

        <article className="activity-card construction-card">
          <span className="activity-number">03</span>
          <span className="card-badge">In Development</span>
          <h2>Placeholder</h2>
          <p>
            Reserved for your groupmate. This page is ready for their assigned
            activity once they add the final content.
          </p>
          <button onClick={() => setCurrentPage("activity3")}>
            View Placeholder
          </button>
        </article>
      </section>
    </main>
  )
}

export default Dashboard
