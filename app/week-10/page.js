"use client";
import { useUserAuth } from "@/app/contexts/AuthContext";
import Link from "next/link";

export default function Page() {
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
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white active:bg-gray-400 active:text-gray-900 cursor-pointer"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md text-white hover:from-blue-600 hover:to-purple-600 active:from-blue-700 active:to-purple-700 cursor-pointer"
          onClick={handleSignIn}
        >
          Login
        </button>
      )}
    </main>
  );
}