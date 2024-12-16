import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email) {
        return;
      }

      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert(
            "We have sent you a reset password email. Check your inbox. It may take 5 min"
          );
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [email]
  );

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl">Forgot Password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-4 bg-gray-100 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          type="submit"
          value="Send Reset Password Email"
          className="p-4 bg-sky-500 rounded-md "
        />

        <Link className="ml-auto bg-fuchsia-400 p-2" to="/sign-in">
          Back to Sign In
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
