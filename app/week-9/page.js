"use client";
// Import the useUserAuth hook
import { useUserAuth } from "@/app/contexts/AuthContext";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [signInPressed, setSignInPressed] = useState(false);
  const [signOutPressed, setSignOutPressed] = useState(false);

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
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 flex flex-col items-center gap-6 pt-12">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      {user ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">
            Welcome, {user.displayName} ({user.email})
          </p>
          <Link href="/week-9/shopping-list" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md hover:from-blue-600 hover:to-purple-600">
            Shopping List
          </Link>
          <button
            style={{ cursor: 'pointer' }}
            className={`px-4 py-2 rounded-md ${signOutPressed ? 'bg-gray-400 text-gray-900' : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'}`}
            onMouseDown={() => setSignOutPressed(true)}
            onMouseUp={() => { setSignOutPressed(false); handleSignOut(); }}
            onMouseLeave={() => setSignOutPressed(false)}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          style={{ cursor: 'pointer' }}
          className={`px-4 py-2 bg-gradient-to-r rounded-md text-white ${signInPressed ? 'from-blue-700 to-purple-700' : 'from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'}`}
          onMouseDown={() => setSignInPressed(true)}
          onMouseUp={() => { setSignInPressed(false); handleSignIn(); }}
          onMouseLeave={() => setSignInPressed(false)}
        >
          Login
        </button>
      )}
    </main>
  );
}