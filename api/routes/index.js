import userRouter from './user';

const applyRoutes = (app) => {
  app.use('/', userRouter);
};

export default applyRoutes;
