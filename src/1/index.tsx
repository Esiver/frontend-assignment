// Style
import { FunctionComponent, useState } from "react";
import "./index.scss";

const Task1: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event: React.FormEvent) => {
    // If you want to do something with form submit
    const formElement = event.target as HTMLElement;
      if(email.length == 0 || password.length == 0 ) { // stupid "security"
        formElement.classList.add("error")
      } else {
        formElement.classList.remove("error")

      }
      event.preventDefault()
  };

  return (
    <div id="task-1">
      <form onSubmit={onSubmit} className="">
        <h1>Welcome back.</h1>
        <label htmlFor="task-1-input">Email</label>
        <input
          autoComplete="email"
          type="email"
          id="task-1-input"
          name="email"
          onChange={(event) => setEmail(event.currentTarget.value)}
          value={email}
        />
        <label htmlFor="task-1-password">Password</label>
        <input
          autoComplete="password"

          id="task-1-password"
          name="password"
          type="password"
          onChange={(event) => setPassword(event.currentTarget.value)}
          value={password}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Task1;
