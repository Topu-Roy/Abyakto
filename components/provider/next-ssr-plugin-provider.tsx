import { ourFileRouter } from "@/app/api/uploadthing/core";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { cacheLife } from "next/cache";
import { extractRouterConfig } from "uploadthing/server";

export async function NextSSRPluginProvider({ children }: { children: React.ReactNode }) {
  "use cache";
  cacheLife({ revalidate: 60 });

  return (
    <>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      {children}
    </>
  );
}
