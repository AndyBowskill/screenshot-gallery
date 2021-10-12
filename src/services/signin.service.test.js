import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { signinService } from './signin.service';

const server = setupServer(
  rest.get(
    'https://screenshot-gallery-api.herokuapp.com/signin',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ data: { user: { email: 'bob@gmail.com' } } })
      );
    }
  )
);

it('Sign in is successful', async () => {
  const data = await signinService('bob@gmail.com', '123123');
  expect(data.user.email).toBe('bob@gmail.com');
});
