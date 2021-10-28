import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { googleSigninService } from './googleSignin.service';

const server = setupServer(
  rest.post(
    'https://screenshot-gallery-api.herokuapp.com/googlesignin',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          screenshots: [],
          user: {
            id: 0,
            email: 'timbaron@gmail.com',
            name: '',
          },
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

it('Google sign in service is successful', async () => {
  const googleSignin = await googleSigninService('timbaron@gmail.com');
  expect(googleSignin.user.email).toBe('timbaron@gmail.com');
});
