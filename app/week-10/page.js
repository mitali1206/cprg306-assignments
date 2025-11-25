"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Login handler
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {!user ? (
        <>
          <h1>Welcome to the Shopping List App</h1>
          <p>Please log in with your GitHub account to continue.</p>
          <button onClick={handleLogin}>Login with GitHub</button>
        </>
      ) : (
        <>
          <h1>Welcome, {user.displayName}</h1>
          <p>Email: {user.email}</p>
          <div style={{ margin: "20px" }}>
            <Link href="/week-10/shopping-list">
              <button>Go to Shopping List</button>
            </Link>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}
