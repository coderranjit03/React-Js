
---

# 📘 `useState` Hook 

---

## 🧠 What is `useState`?

`useState` is a **React Hook** that lets you **add and manage state** (i.e., changing data) inside a **functional component**.

Before Hooks, only **class components** could have state using `this.state`. Now, with `useState`, **functional components** can also be dynamic and interactive.

---

## 🏠 Real-Life Analogy

### **Situation**: Water Tracker

Imagine you are tracking how many glasses of water you drink every day.
You start at 0. Every time you drink, you press a button in your app and it adds 1.

This "glass count" needs to:

✅ **Start with a value (0)**
✅ **Change when you drink water**
✅ **Remember the value between actions**

That’s exactly what `useState` does in your component.

---

## ✅ Basic Syntax of `useState`

```jsx
const [state, setState] = useState(initialValue);
```

### Example:

```jsx
const [count, setCount] = useState(0);
```

* `count`: The current value of the state
* `setCount`: A function to **update the state**
* `0`: The initial state value

---

## 💡 Important Notes

| Term           | Meaning                                    |
| -------------- | ------------------------------------------ |
| `useState()`   | Hook to add state                          |
| `initialValue` | The starting value of your state           |
| `setState()`   | Function to update and trigger a re-render |
| Re-rendering   | The UI updates when state changes          |

---

## 🧪 Example 1: Water Tracker (Real-Life)

```jsx
import React, { useState } from "react";

function WaterTracker() {
  const [glasses, setGlasses] = useState(0); // Start with 0 glasses

  const drinkWater = () => {
    setGlasses(glasses + 1); // Increase by 1 every time you drink
  };

  return (
    <div>
      <h2>Glasses of water: {glasses}</h2>
      <button onClick={drinkWater}>Drink</button>
    </div>
  );
}

export default WaterTracker;
```

🧾 Output: Each time you click the button, the count increases by 1.

---

## 🧪 Example 2: Toggle Light Switch (ON/OFF)

> Real Life: A switch toggles the light between ON and OFF.

```jsx
function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h2>The light is {isOn ? "ON" : "OFF"}</h2>
      <button onClick={toggleLight}>Toggle</button>
    </div>
  );
}
```

---

## 🔁 Every Time State Changes

1. You call `setState()` (like `setGlasses()`).
2. React updates the value internally.
3. React re-renders the component.
4. You see the **updated UI**.

---

## 📦 useState with Strings, Objects, Arrays

### 🔹 Strings

```jsx
const [name, setName] = useState("Guest");
```

```jsx
setName("Ranjit");
```

---

### 🔹 Arrays

> Example: Add items to a cart

```jsx
const [cart, setCart] = useState([]);

setCart([...cart, "Apple"]);
```

---

### 🔹 Objects

> Example: User Profile

```jsx
const [user, setUser] = useState({ name: "Ranjit", age: 25 });

setUser({ ...user, age: 26 }); // Update only age
```

---

## 💥 Common Mistakes

### ❌ Directly modifying state:

```js
user.name = "Bob"; // ❌
```

### ✅ Correct way:

```js
setUser({ ...user, name: "Bob" });
```

---

## 📊 Visual Flow

```
[Component Mounts]
   ↓
useState(0) → [count = 0, setCount]
   ↓
User clicks "Drink Water"
   ↓
setCount(count + 1)
   ↓
Component re-renders with new count
```

---

## 🧠 Summary

| Concept             | Description             |
| ------------------- | ----------------------- |
| Hook Name           | `useState`              |
| Used In             | Functional Components   |
| Purpose             | Adds and manages state  |
| Arguments           | Initial state value     |
| Returns             | `[state, setState]`     |
| Triggers Re-render? | ✅ Yes                   |
| Updates UI?         | ✅ Automatically         |
| Can be multiple?    | ✅ Use as many as needed |

---

## ✅ Best Practices

* Always use the `setState()` function to update state
* Never mutate state directly
* For objects/arrays, use spread operator (`...`)
* Organize multiple state variables logically

---

