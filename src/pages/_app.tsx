import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

// import { trpc } from "../utils/trpc";

import "../styles/inter.css";
import "../styles/globals.css";

const DaisyUiTemplatesApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default DaisyUiTemplatesApp;
// export default trpc.withTRPC(DaisyUiTemplatesApp);
