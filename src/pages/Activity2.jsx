import { useState } from "react"

const VALID_USERNAME = "admin"
const VALID_PASSWORD = "admin123"

function Activity2({ setCurrentPage }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [message, setMessage] = useState(null)
  const [fieldErrors, setFieldErrors] = useState({})

  function handleLogin(event) {
    event.preventDefault()

    if (username.trim() === "" || password.trim() === "") {
      setFieldErrors({
        username: username.trim() === "" ? "Username is required." : "",
        password: password.trim() === "" ? "Password is required." : "",
      })
      setMessage({ text: "Please enter username and password.", tone: "error" })
    } else if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setFieldErrors({})
      setMessage({ text: "Login successful!", tone: "success" })
      setIsLoggedIn(true)
    } else {
      setFieldErrors({
        username: "Check your credentials.",
        password: "Check your credentials.",
      })
      setMessage({ text: "Invalid username or password.", tone: "error" })
    }
  }

  function handleLogout() {
    setIsLoggedIn(false)
    setUsername("")
    setPassword("")
    setMessage(null)
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
          <span className="activity-page-number">Activity 02</span>
          <h1>Login Authentication</h1>
          <p>
            Enter a username and password to sign in. On a successful login
            the form is replaced with a welcome message and a logout option.
          </p>

          <div className="instruction-list">
            <span>Both fields are required.</span>
            <span>Demo credentials: admin / admin123</span>
            <span>Use Logout to return to the login form.</span>
          </div>
        </div>

        <div>
          {!isLoggedIn ? (
            <>
              <form className="activity-form" onSubmit={handleLogin}>
                <label>
                  Username
                  <input
                    type="text"
                    value={username}
                    onChange={(event) => {
                      setUsername(event.target.value)
                      setFieldErrors({ ...fieldErrors, username: "" })
                    }}
                    placeholder="e.g. admin"
                    className={fieldErrors.username ? "input-error" : ""}
                  />
                  {fieldErrors.username && (
                    <span className="field-error">{fieldErrors.username}</span>
                  )}
                </label>

                <label>
                  Password
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value)
                      setFieldErrors({ ...fieldErrors, password: "" })
                    }}
                    placeholder="Enter your password"
                    className={fieldErrors.password ? "input-error" : ""}
                  />
                  {fieldErrors.password && (
                    <span className="field-error">{fieldErrors.password}</span>
                  )}
                </label>

                <div className="form-actions">
                  <button type="submit">Login</button>
                </div>
              </form>

              {message && (
                <aside className={`result-panel ${message.tone === "error" ? "danger" : "success"}`}>
                  <span className="result-label">Status</span>
                  <p>{message.text}</p>
                </aside>
              )}
            </>
          ) : (
            <aside className="result-panel success">
              <span className="result-label">Welcome</span>
              <h2>Hello, {username}!</h2>
              <p>{message?.text}</p>

              <div className="form-actions">
                <button type="button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </aside>
          )}
        </div>
      </section>
    </main>
  )
}

export default Activity2
