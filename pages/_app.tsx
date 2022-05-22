import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {Component.displayName ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

function Auth({ children }: any) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;

  React.useEffect(() => {
    if (status === "loading") return;
    // if (!isUser) signIn();
    // if (!isUser) router.push("/signin");
    if (!isUser) signIn();
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
  //  return <LoadingComponent />;
}