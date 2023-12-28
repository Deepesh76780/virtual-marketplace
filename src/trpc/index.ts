import { publicProcedure, router } from "./trpc";
import { AuthRouter } from "./authRouter";

export const appRouter = router({
  auth: AuthRouter,
});

export type AppRouter = typeof appRouter;
