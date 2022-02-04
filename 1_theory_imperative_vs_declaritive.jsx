// Imperative - enable & disable step by step

$("button .login").onClick(() => {
    $("form").attr("enabled", false)
    $("body").append($("div.spinner"))
  
    doLogin((success, username) => {
      if (success) {
        // Remove the form and show login
        $("form").remove()
        $("div.spinner").remove()
        $("body").append($(`Welcome back ${username}`))
      } else {
        // Stop the spinner and enable form again
        $("form").attr("enabled", true)
        $("form.error").text("Could not login")
        $("div.spinner").remove()
      }
    })
  })

  // Declarative - declare only what you want to appear

  function App({ state = "logged_out", username = null }) {
    if (state === "logged_out") {
      return <Login />
    }
    if (state === "logging_in") {
      return <Spinner />
    }
    if (state === "logged_in") {
      return <div>Welcome back {username}</div>
    }
  }