import { GetServerSideProps } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Image from "next/image";
import { FC } from "react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br /> */}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context);

//   return {
//     props: {
//       session,
//     },
//   };
// };

Home.displayName = true;