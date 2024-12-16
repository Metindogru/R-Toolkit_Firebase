import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Posts from "../componenets/Posts";
import AddPost from "../componenets/AddPost";

const Home = () => {
  const [user, isLoading] = useAuthState(auth);

  const handleSignOut = useCallback(() => {
    signOut(auth);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-md py-12 mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <p className="bg-cyan-300 p-2 mb-1">
            <span className="text-orange-500 font-bold">User Name: </span>
            {user.displayName}
          </p>
          <p className="bg-cyan-300 p-2 mb-2">
            <span className="text-orange-500 font-bold">User Email: </span>
            {user.email}
          </p>
        </div>
        <button
          onClick={handleSignOut}
          className="p-4 bg-zinc-800 rounded-md text-white"
        >
          Sign Out
        </button>
      </div>
      <AddPost />
      <Posts />
    </div>
  );
};

export default Home;
