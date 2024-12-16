import { useCallback, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const ref = collection(db, "posts");
const AddPost = () => {
  const [body, setBody] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addDoc(ref, {
        body: body,
      });
    },
    [body]
  );
  return (
    <div className="mt-8 mb-16">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="What are you working on?"
          className="bg-gray-300 p-4 rounded-md"
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
        />
        <input
          type="submit"
          value="Send"
          className="p-4 bg-zinc-800 rounded-md text-white cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddPost;
