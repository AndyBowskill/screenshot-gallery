export async function registerService(email, name, password) {
  const response = await fetch(
    'https://screenshot-gallery-api.herokuapp.com/register',
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
      }),
    }
  );
  const register = await response.json();

  return register;
}
