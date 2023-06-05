import { useState } from "react";
import classes from "./login.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

let initialValue = { name: "", password: "" };

export default function Login() {
  const [inputField, setInputField] = useState(initialValue);

  const router = useRouter();

  //Bind input field
  const onChangeHandler = (e) => {
    e.preventDefault();

    const { name } = e.target;
    const { value } = e.target;

    setInputField((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  // submit login form
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputField),
      });

      if (response.status === 200) {
        const data = await response.json();
        setInputField(initialValue);
        router.push("/adminpanel");
      } else {
        window.alert("Login Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Head>
      <title>Login</title>
      <meta name="robots" content="noindex" />
      <link rel="canonical" href="https://www.teermania.com/login" />
    </Head>
      <div className={classes.main}>
        <div className={classes.background}>
          <div className={classes.shape}></div>
          <div className={classes.shape}></div>
        </div>
        <form className={classes.forms}>
          <h3>~ Admin Login ~</h3>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={onChangeHandler}
            name="name"
            placeholder="Enter your name"
            value={inputField.name}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={onChangeHandler}
            name="password"
            placeholder="Enter your password"
            value={inputField.password}
          />

          <button onClick={submitHandler}>Log In</button>
        </form>
      </div>
    </>
  );
}
