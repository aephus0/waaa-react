import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - AnimeSite";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screed-md items-center h-screen">
      <div className="flex w-1/5 max-w-xs">
        <img src="/images/goblin.png" alt="goblin" />
      </div>
      <div className="flex flex-col w-3/5">
        <div className="flex flex-col items-center bg-white p-4 border rounded mb-2">
          <h1 className="flex justify-center w-full">Login</h1>
        </div>
      </div>
    </div>
  );
}
