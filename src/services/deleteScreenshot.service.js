export async function deleteScreenshotService(email, id) {
  const response = await fetch(
    'https://screenshot-gallery-api.herokuapp.com/screenshot',
    {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        id: id,
      }),
    }
  );
  const deleteScreenshot = await response.json();

  return deleteScreenshot;
}
