import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { deleteScreenshotService } from './deleteScreenshot.service';

const server = setupServer(
  rest.delete(
    'https://screenshot-gallery-api.herokuapp.com/screenshot',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          screenshots: [
            {
              id: 21,
              screenshot: 'http://www.waterstones.co.uk.webp',
              email: 'bob@gmail.com',
              url: 'http://www.waterstones.co.uk',
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

it('Delete screenshot service is successful', async () => {
  const deleteScreenshot = await deleteScreenshotService('bob@gmail.com', 30);
  expect(deleteScreenshot.screenshots[0].url).toBe(
    'http://www.waterstones.co.uk'
  );
});
