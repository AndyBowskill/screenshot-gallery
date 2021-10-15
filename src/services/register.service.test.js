import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { registerService } from './register.service';

const server = setupServer(
  rest.post(
    'https://screenshot-gallery-api.herokuapp.com/register',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          user: {
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

it('Register service is successful', async () => {
  const register = await registerService(
    'timbaron@gmail.com',
    'Tim Baron',
    '123123'
  );
  expect(register.user.email).toBe('timbaron@gmail.com');
});
