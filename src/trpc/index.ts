import { publicProcedure, router } from "./trpc";
import { AuthRouter } from "./authRouter";
import { z } from "zod";
import { queryValidator } from "../lib/validators/query_validator";
import { getPayloadClient } from "../get-payload";
import { paymentRouter } from "./paymentRouter";

export const appRouter = router({
  auth: AuthRouter,
  payment: paymentRouter,
  getInfiniteProducts: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100),
        cursor: z.number().nullish(),
        query: queryValidator,
      })
    )
    .query(async ({ input }) => {
      const { query, cursor } = input;
      const { sort, limit, ...queryOpts } = query;
      const payload = await getPayloadClient();
      const parseQueryOpts: Record<string, { equals: string }> = {};
      Object.entries(queryOpts).forEach(([key, value]) => {
        parseQueryOpts[key] = {
          equals: value,
        };
      });
      const page = cursor || 1;
      const {
        docs: items,
        hasNextPage,
        nextPage,
      } = await payload.find({
        collection: "products",
        where: {
          approvedForSale: {
            equals: "approved",
          },
          ...parseQueryOpts,
        },
        sort,
        depth: 1,
        limit,
        page,
      });

      return {
        items,
        nextPage: hasNextPage ? nextPage : null,
      };
    }),
});

export type AppRouter = typeof appRouter;
