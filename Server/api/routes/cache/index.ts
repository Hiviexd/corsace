import Router from "@koa/router";
import { cache, deleteEndpoints } from "../../../../Server/cache";
import { isInterOp } from "../../../../Server/middleware";

const cacheRouter = new Router;

cacheRouter.use(isInterOp);

cacheRouter.get("/reset", async (ctx) => {
    cache.clear();
    ctx.body = {
        success: "Success",
    };
});

cacheRouter.post("/del", async (ctx) => {
    if (
        !ctx.request.body?.endpoints || 
        !Array.isArray(ctx.request.body?.endpoints) || 
        ctx.request.body?.endpoints.length === 0 || 
        ctx.request.body?.endpoints.some(e => typeof e !== "string")
    ) {
        ctx.body = {
            success: false, 
            error: "Missing/invalid endpoints",
        };
        return;
    }
    const endpoints: string[] = ctx.request.body.endpoints;
    deleteEndpoints(endpoints);

    ctx.body = {
        success: true,
    };
});

export default cacheRouter;