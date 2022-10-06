import { Application, viewEngine, ejsEngine, oakAdapter } from "./src/dependencies.ts";
import router from "./src/routes/routes.ts";

const app = new Application();

app.use(viewEngine(oakAdapter, ejsEngine, {viewRoot: './public'}))
app.use(router.routes())

await app.listen({port: 3000})