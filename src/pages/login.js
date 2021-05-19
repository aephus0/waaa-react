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
    <div className="bg-gray-100 container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-1/3 max-w-xs ml-5 bg-transparent">
        <img src="https://cdn.lewd.host/qbk23JtA.png" alt="zero two" />
      </div>
      <div className="flex flex-col w-1/3">
        <div className="flex flex-col items-center bg-white p-4 border rounded mb-2">
          <h1 className="flex justify-center w-full">Login</h1>
        </div>
      </div>
    </div>
  );
}
