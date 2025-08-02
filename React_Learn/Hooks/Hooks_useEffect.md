
---

# 📘 React `useEffect` – Explained Simply with Basic Examples

---

## 🔹 What is `useEffect`?

In simple words:

> `useEffect` runs some code **after** your component renders.
> You use it when you want to **do something** like:
>
> * Fetching data from an API
> * Setting a timer
> * Updating the page title
> * Listening for key presses

---

## 🧠 Real-Life Analogy

> Think of `useEffect` like saying:
> “When the page is shown or when something changes, **do this task**.”

For example:

* When your app **loads** ➝ say "Welcome!"
* When the user **clicks a button**, update something
* When the **window size changes**, re-calculate layout

---

## ✅ Basic Syntax

```jsx
useEffect(() => {
  // code to run after render
  // example: fetch data, log, update something
}, [dependencies]);
```

---

## 🔍 Let's Understand with Basic Examples

---

### ✅ **1. Run only once (on page load)**

> 🔔 Like: “When the page opens, say Hello.”

```jsx
import { useEffect } from "react";

function HelloMessage() {
  useEffect(() => {
    console.log("👋 Hello! Component loaded.");
  }, []); // ← empty array: run only once

  return <h1>Welcome!</h1>;
}
```

📌 **`[]` means:**

> “Run this effect only ONCE when the component first appears (mounts).”

---

### ✅ **2. Run on every render (no dependency array)**

> 🔁 Like: “Every time I look at the screen, say something.”

```jsx
function Counter({ count }) {
  useEffect(() => {
    console.log("🔄 Render happened! Count:", count);
  }); // ← no dependency array

  return <h2>Count: {count}</h2>;
}
```

📌 **No `[]` means:**

> Run this effect **every time** the component renders (on **initial load** + **every update**).

---

### ✅ **3. Run only when a specific value changes**

> 🎯 Like: “If the temperature changes, update display.”

```jsx
import { useState, useEffect } from "react";

function Temperature() {
  const [temp, setTemp] = useState(30);

  useEffect(() => {
    console.log("🌡️ Temperature updated:", temp);
  }, [temp]); // ← run when temp changes

  return (
    <div>
      <p>Current temperature: {temp}°C</p>
      <button onClick={() => setTemp(temp + 1)}>Increase</button>
    </div>
  );
}
```

📌 **`[temp]` means:**

> Run this effect only when `temp` changes.

---

### ✅ **4. Cleanup with return function**

> 🧹 Like: “When leaving the room, turn off the light.”

```jsx
import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("⏱️ Running timer...");
    }, 1000);

    return () => {
      clearInterval(interval); // clean up when component is removed
      console.log("❌ Timer stopped.");
    };
  }, []);

  return <p>Timer is running... Check console</p>;
}
```

📌 The **`return` function** is used to:

> Clean up (stop timer, remove listener) **when component is removed or before effect re-runs**.

---

## 👀 All 3 useEffect Patterns

| useEffect Code                      | When it Runs                         |
| ----------------------------------- | ------------------------------------ |
| `useEffect(() => { ... }, [])`      | Only once (like `componentDidMount`) |
| `useEffect(() => { ... })`          | Every render (initial + updates)     |
| `useEffect(() => { ... }, [value])` | On mount + when `value` changes      |

---

## 🧠 Summary

| Concept           | Description                             |
| ----------------- | --------------------------------------- |
| What it does      | Runs code after render (side effects)   |
| Runs on mount     | ✅ If `[]` is passed                     |
| Runs on update    | ✅ If specific values change (`[count]`) |
| Cleanup possible? | ✅ Yes, return a cleanup function        |
| Real uses         | API calls, logging, timers, DOM events  |

---

## ✅ Final Real-Life Example: Fetch user info when ID changes

```jsx
import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data when userId changes
    fetch(`https://api.example.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return <h2>{user.name}'s Profile</h2>;
}
```

📌 `useEffect` runs:

* When component **first renders**
* When `userId` **changes**

---
