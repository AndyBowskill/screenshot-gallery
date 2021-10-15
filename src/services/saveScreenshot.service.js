export async function saveScreenshotService(email, url) {
  const response = await fetch(
    'https://screenshot-gallery-api.herokuapp.com/screenshot',
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        url: url,
      }),
    }
  );
  const saveScreenshot = await response.json();

  return saveScreenshot;
}
