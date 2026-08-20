function Dashboard({ setCurrentPage }) {
  return (
    <main className="dashboard">
      <section className="dashboard-header">
        <p className="dashboard-label">React JS Practical Assessment</p>

        <h1>React Activity Portal</h1>

        <p className="dashboard-subtitle">
          Select an activity below to get started.
        </p>
      </section>

      <section className="activity-grid">
        <article className="activity-card">
          <span className="activity-number">01</span>

          <h2>Activity 1</h2>

          <p>
            Activity 1 description will be placed here.
          </p>

          <button onClick={() => setCurrentPage("activity1")}>
            Open Activity
          </button>
        </article>

        <article className="activity-card">
          <span className="activity-number">02</span>

          <h2>Activity 2</h2>

          <p>
            Login Authentication — sign in with a username and password.
          </p>

          <button onClick={() => setCurrentPage("activity2")}>
            Open Activity
          </button>
        </article>

        <article className="activity-card">
          <span className="activity-number">03</span>

          <h2>Activity 3</h2>

          <p>
            Activity 3 description will be placed here.
          </p>

          <button onClick={() => setCurrentPage("activity3")}>
            Open Activity
          </button>
        </article>
      </section>
    </main>
  )
}

export default Dashboard