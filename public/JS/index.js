const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(); //TODO: INSERT Handlebar page
  } else {
    alert(response.statusText);
  }
};

const loginFormHandler = async (event) => {
  event.preventDefault()

  const email = document.querySelector("#email-input").value.trim()
  const password = document.querySelector("#password-input").value.trim()

  const response = await fetch("/api/users/login", {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers: {'Content-Type': 'application/json'},
  })

  if (response.ok) {
    document.location.replace('/')
  } else {
    alert(response.statusText)
  }
}

document
  .querySelector('.login')
  .addEventListener('submit', loginFormHandler);

  