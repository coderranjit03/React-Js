

---

## 📦 React Props (Properties) – In-Depth Guide

### 🔹 What are Props?

**Props** (short for **properties**) are **read-only inputs** passed from a parent component to a child. Props allow components to be **customized**, **reused**, and **dynamic** without rewriting the component logic.

---

## 🧠 Real-Life Analogy

> Think of a React component like a **coffee vending machine**.
>
> * You provide **props** like `sugar="2 cubes"`, `milk="yes"`, `flavor="vanilla"`
> * The machine (component) makes a drink based on those inputs
> * But you **can’t change the settings from inside the machine** — only from outside (parent)

---

## 💡 Syntax

### ➤ Passing Props

```jsx
<Welcome name="Ranjit" message="Good to see you!" />
```

### ➤ Receiving Props in a Function Component

```jsx
function Welcome(props) {
  return <h1>Hello {props.name}, {props.message}</h1>;
}
```

### ➤ Destructuring for Cleaner Code

```jsx
function Welcome({ name, message }) {
  return <h1>Hello {name}, {message}</h1>;
}
```

---

## 🎯 Default Props in Function Components

You can define **default values** directly during destructuring:

```jsx
function Welcome({ name = "Guest", message = "Welcome back!" }) {
  return <h1>Hello {name}, {message}</h1>;
}
```

### 🔧 Example

```jsx
<Welcome /> 
// Output: Hello Guest, Welcome back!
```

---

## 🎯 Default Props in Class Components

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}, {this.props.message}</h1>;
  }
}

Welcome.defaultProps = {
  name: "Guest",
  message: "Welcome back!"
};
```

---

## 📦 Full Example (Function Component)

```jsx
import React from 'react';

function Welcome({ name = "Guest", message = "Welcome to our site!" }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
    </div>
  );
}

export default Welcome;
```

### ✅ Usage

```jsx
<Welcome name="Ranjit" message="Have a great day!" />
<Welcome />  // Will show default props
```

---

## 🧪 Real-World Use Case

### `ProductCard` Component

```jsx
function ProductCard({ name = "Unknown Product", price = 0 }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

// Usage
<ProductCard name="iPhone 14" price={79999} />
<ProductCard />  // Uses defaults
```

---

## ⚠️ Key Points

| Feature        | Explanation                                        |
| -------------- | -------------------------------------------------- |
| Read-only      | Props cannot be changed in child components        |
| Unidirectional | Props flow from parent to child only               |
| Dynamic        | Props allow dynamic rendering of UI                |
| Default Props  | Ensures fallback values when props aren't provided |

---

## 🧩 Visual Reference

```
[App Component]
     |
     v
[Welcome name="Ranjit"] ---> (props = { name: "Ranjit" })
```

---

## 📌 Summary

| Concept        | Details                                              |
| -------------- | ---------------------------------------------------- |
| Props          | Input to a component                                 |
| Usage          | `<Component propName="value" />`                     |
| Accessing      | `props.propName` or `{ propName }` in destructure    |
| Default Values | `name = "Guest"` or `Component.defaultProps = {...}` |
| Real-world use | Pass user info, settings, event handlers, etc.       |

---

