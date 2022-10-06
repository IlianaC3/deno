import { agregar, getColores } from "../services/colores.ts";
import { Router } from "../dependencies.ts";

const router = new Router();

router.get("/", async function (ctx) {
    ctx.response.body = await getColores();
});

router.post("/", async function (ctx) {
    if (!ctx.request.hasBody) {
        ctx.response.body = {
            err: 404,
            value: 'No se envió color'
        };
    } else {
        const color = await ctx.request.body({ type: 'form' })
        const value = await color.value;
        // console.log(value.get('color'));
        agregar(value.get('color'));
        ctx.response.body = {
            err: null,
            value: value.get('color')
        }
    }
    
});

router.get("/home", async function (ctx, next) {
    await ctx.render("home.ejs", {data: await getColores()})
});

export default router;
