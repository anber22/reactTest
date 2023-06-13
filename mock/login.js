import { rest } from 'msw';
import { dataResponse } from '@/response';
import { routers, loginData, userInfo } from '@/data';

const login = [
  rest.post('/auth/custom/authorize', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(dataResponse(loginData))),
  ),
  rest.post('/auth/logout/token', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(dataResponse())),
  ),
  rest.get('/customer/mesMenu/getRouters', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(dataResponse(routers))),
  ),
  rest.get('/auth/user/userInfo', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(dataResponse(userInfo))),
  ),
];
export default login;
