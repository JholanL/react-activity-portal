import { useState } from "react"

function Activity1({ setCurrentPage }) {
  const [employeeName, setEmployeeName] = useState("")
  const [timeIn, setTimeIn] = useState("")
  const [result, setResult] = useState(null)
  const [fieldErrors, setFieldErrors] = useState({})

  function checkAttendance(event) {
    event.preventDefault()

    const numericTime = Number(timeIn)
    const nextErrors = {}

    if (employeeName.trim() === "") {
      nextErrors.employeeName = "Please enter employee name."
    }

    if (timeIn.trim() === "") {
      nextErrors.timeIn = "Please enter time in."
    } else if (Number.isNaN(numericTime) || numericTime < 0 || numericTime > 24) {
      nextErrors.timeIn = "Please enter a valid time from 0 to 24."
    }

    if (nextErrors.employeeName || nextErrors.timeIn) {
      setResult(null)
      setFieldErrors(nextErrors)
    } else if (numericTime <= 8) {
      setFieldErrors({})
      setResult({
        name: employeeName.trim(),
        time: numericTime,
        status: "On Time",
        message: "Status: On Time - Good job!",
        tone: "success",
      })
    } else if (numericTime <= 9) {
      setFieldErrors({})
      setResult({
        name: employeeName.trim(),
        time: numericTime,
        status: "Late",
        message: "Status: Late - Please be on time tomorrow.",
        tone: "warning",
      })
    } else {
      setFieldErrors({})
      setResult({
        name: employeeName.trim(),
        time: numericTime,
        status: "Very Late",
        message: "Status: Very Late - Report to your supervisor.",
        tone: "danger",
      })
    }
  }

  function resetForm() {
    setEmployeeName("")
    setTimeIn("")
    setResult(null)
    setFieldErrors({})
  }

  return (
    <main className="activity-page shell">
      <button
        className="back-button"
        onClick={() => setCurrentPage("dashboard")}
      >
        Back to Dashboard
      </button>

      <section className="activity-content attendance-layout page-enter">
        <div className="activity-intro">
          <span className="activity-page-number">Activity 01</span>
          <h1>Employee Attendance Checker</h1>
          <p>
            Enter the employee name and time-in value, then check the attendance
            status. Use decimal format for minutes.
          </p>

          <div className="instruction-list">
            <span>Complete both fields before checking.</span>
            <span>Use a valid time-in value only.</span>
            <span>View the attendance result after submitting.</span>
          </div>
        </div>

        <form className="activity-form" onSubmit={checkAttendance}>
          <label>
            Employee Name
            <input
              type="text"
              value={employeeName}
              onChange={(event) => {
                setEmployeeName(event.target.value)
                setFieldErrors({ ...fieldErrors, employeeName: "" })
              }}
              placeholder="e.g. Ana Santos"
              className={fieldErrors.employeeName ? "input-error" : ""}
            />
            {fieldErrors.employeeName && (
              <span className="field-error">{fieldErrors.employeeName}</span>
            )}
          </label>

          <label>
            Time In
            <input
              type="number"
              step="0.01"
              value={timeIn}
              onChange={(event) => {
                setTimeIn(event.target.value)
                setFieldErrors({ ...fieldErrors, timeIn: "" })
              }}
              placeholder="e.g. 8.5"
              className={fieldErrors.timeIn ? "input-error" : ""}
            />
            {fieldErrors.timeIn && (
              <span className="field-error">{fieldErrors.timeIn}</span>
            )}
          </label>

          <div className="form-actions">
            <button type="submit">Check Attendance</button>
            <button className="secondary-button" type="button" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>

        {result && (
          <aside className={`result-panel ${result.tone}`}>
            <span className="result-label">Attendance Result</span>
            <h2>{result.status}</h2>
            <p>{result.message}</p>

            <dl>
              <div>
                <dt>Employee</dt>
                <dd>{result.name}</dd>
              </div>
              <div>
                <dt>Time In</dt>
                <dd>{result.time}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{result.status}</dd>
              </div>
            </dl>
          </aside>
        )}
      </section>
    </main>
  )
}

export default Activity1
