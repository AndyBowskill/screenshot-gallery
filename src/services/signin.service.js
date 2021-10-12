export async function signinService(email, password) {
  const response = await fetch(
    'https://screenshot-gallery-api.herokuapp.com/signin',
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }
  );
  const signin = await response.json();

  return signin;
}
