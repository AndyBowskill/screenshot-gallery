export async function googleSigninService(email) {
  const response = await fetch(
    'https://screenshot-gallery-api.herokuapp.com/googlesignin',
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
      }),
    }
  );
  const googleSignin = await response.json();

  return googleSignin;
}
