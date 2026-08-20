import { useState } from "react"

function Activity3({ setCurrentPage }) {
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")

  const checkPassword = () => {
    if (password === "") {
      setStatus("Please enter a password.")
      setMessage("")
    } else if (password.length < 6) {
      setStatus("Weak Password")
      setMessage("Status: Weak – Create a stronger password.")
    } else if (password.length <= 9) {
      setStatus("Medium Password")
      setMessage("Status: Weak – Create a stronger password.")
    } else {
      setStatus("Strong Password")
      setMessage("Status: Strong – You can use this password.")
    }
  }

  const clearPassword = () => {
    setPassword("")
    setStatus("")
    setMessage("")
  }

  return (
    <main className="activity-page">
      <button
        className="back-button"
        onClick={() => setCurrentPage("dashboard")}
      >
        ← Back to Dashboard
      </button>

      <div className="password-layout">
        <div className="password-intro">
          <div className="password-number">
            ACTIVITY 03
          </div>

          <h1>
            Password Strength
            <br />
            Checker
          </h1>

          <p>
            Classify a password by length as Weak, Medium, or Strong.
          </p>

          <div className="password-notes">
            <div>Check the password length.</div>
            <div>Get a Weak, Medium, or Strong result.</div>
            <div>View the strength message after checking.</div>
          </div>
        </div>

        <div className="password-panel">
          <div className="password-section">
            <h2>Inputs & Buttons</h2>

            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
            />

            <div className="password-buttons">
              <button
                className="check-button"
                onClick={checkPassword}
              >
                Check Password
              </button>

              <button
                className="clear-button"
                onClick={clearPassword}
              >
                Clear
              </button>
            </div>
          </div>

          <div className="password-result">
            <h2>Result Panel Shows</h2>

            <div className="result-box">
              <div className="result-title">
                Password Status
              </div>

              {status && (
                <div className="result-status">
                  {status}
                </div>
              )}
            </div>

            <div className="result-box">
              <div className="result-title">
                Strength Message
              </div>

              {message && (
                <div className="result-message">
                  {message}
                </div>
              )}
            </div>

            <div className="result-box">
              <div className="result-title">
                Visual Strength Indicator
              </div>

              {password && (
                <div className="strength-text">
                  {password.length} characters
                </div>
              )}

              <div className="strength-bar">
                {password.length >= 10 && (
                  <div className="strength-fill strong-bar"></div>
                )}

                {password.length >= 6 &&
                  password.length < 10 && (
                    <div className="strength-fill medium-bar"></div>
                  )}

                {password.length > 0 &&
                  password.length < 6 && (
                    <div className="strength-fill weak-bar"></div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Activity3