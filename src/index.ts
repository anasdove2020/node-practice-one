import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'My name is Choirul Anas';
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Koa server is running on port ${port}`);
});
