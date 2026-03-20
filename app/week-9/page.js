// Import the useUserAuth hook
import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

// Sign in to Firebase with GitHub authentication
await gitHubSignIn();

// Sign out of Firebase
await firebaseSignOut();

// Display some of the user's information
<p>
  Welcome, {user.displayName} ({user.email})
</p>;

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  };

  return (
    <main>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut}>Logout</button>
          <Link href="/shopping-list">Shopping List</Link>
        </div>
      ) : (
        <button onClick={handleSignIn}>Login</button>
      )}
    </main>
  );
}