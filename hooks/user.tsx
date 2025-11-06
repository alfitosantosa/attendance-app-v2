//make sure you're using the react client
import { createAuthClient } from "better-auth/react";
const { useSession } = createAuthClient();

export function User() {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = useSession();
  return <div>{session ? <p>Logged in as {session.user.email}</p> : <p>Not logged in</p>}</div>;
}
