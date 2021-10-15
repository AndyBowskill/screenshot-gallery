import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { saveScreenshotService } from './saveScreenshot.service';

const server = setupServer(
  rest.post(
    'https://screenshot-gallery-api.herokuapp.com/screenshot',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          screenshots: [
            {
              id: 32,
              screenshot: 'http://www.game.co.uk.webp',
              email: 'bob@gmail.com',
              url: 'http://www.game.co.uk',
            },
          ],
          user: {
            email: 'bob@gmail.com',
          },
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

it('Save screenshot service is successful', async () => {
  const saveScreenshot = await saveScreenshotService(
    'timbaron@gmail.com',
    'www.game.co.uk'
  );
  expect(saveScreenshot.screenshots[0].url).toBe('http://www.game.co.uk');
});
