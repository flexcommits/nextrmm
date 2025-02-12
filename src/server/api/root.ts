import { locationRouter } from "~/server/api/routers/location";
import { organizationRouter } from "~/server/api/routers/organization";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  organization: organizationRouter,
  location: locationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
