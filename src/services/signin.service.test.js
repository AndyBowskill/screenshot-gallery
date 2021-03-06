import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { signinService } from './signin.service';

const server = setupServer(
  rest.post(
    'https://screenshot-gallery-api.herokuapp.com/signin',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          screenshots: [],
          user: {
            id: 3,
            email: 'timbaron@gmail.com',
            name: 'Tim Banon',
          },
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

it('Sign in service is successful', async () => {
  const signin = await signinService('timbaron@gmail.com', '123123');
  expect(signin.user.email).toBe('timbaron@gmail.com');
});
