

---

## 🧠 What is React Fiber?

**React Fiber** is the **reimplementation of React’s core algorithm** (released in React 16). It enables incremental rendering — the ability to split rendering work into units and spread it out over multiple frames, improving responsiveness.

### ✅ Why React Fiber?

The old rendering system (stack reconciler) was:

* Synchronous
* Non-interruptible
* Inefficient for complex UIs

**Fiber**:

* Breaks work into **units of work (fiber nodes)**
* Can pause, resume, and prioritize rendering
* Enables features like **concurrent rendering**, **error boundaries**, and **suspense**

---

## 🧬 How Fiber Works

Each component instance is represented by a **Fiber node**, a JavaScript object that holds:

* The component type
* Props
* State
* Child and sibling fibers
* Effect information

Fiber creates a **tree structure** (the Fiber Tree) that mirrors the component hierarchy.

### 🌳 Fiber Tree Structure

```
App
├── Header
│   └── Logo
└── Main
    ├── Content
    └── Footer
```

### 🧱 Scheduling in Fiber

Fiber uses a **work loop** to schedule updates:

1. **Begin phase**: Build/update the fiber tree (can be paused)
2. **Complete phase**: Commit changes to the DOM (cannot be paused)

---

## 🔁 What is Reconciliation?

**Reconciliation** is the **process of updating the DOM** when the state or props of components change.

### ⚙️ Steps of Reconciliation:

1. **Render Phase** (diffing):

   * Compare new virtual DOM with old virtual DOM
   * Build new Fiber tree with the minimal number of changes

2. **Commit Phase**:

   * Apply DOM updates
   * Trigger side effects like `useEffect`, `componentDidMount`

---

## ⚡ Key Optimizations in Reconciliation

### 1. **Key Prop Optimization**

React uses `key` to track items in a list:

```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

This helps avoid unnecessary re-renders or unmount/remount.

### 2. **Heuristics Used by React**

* Same type? Reuse the component and update props
* Different type? Unmount and create new one
* Keys are used to preserve identity in lists

---

## 🖼️ Visual Representation

### Fiber Architecture

```
[Component] => [Fiber Node] => [Unit of Work] => [DOM Update]
```

![Fiber Architecture Diagram](https://media.geeksforgeeks.org/wp-content/uploads/20241228111254637293/Diffing-Algorithm.jpg)

---

## 🆚 Virtual DOM vs Fiber

| Feature       | Virtual DOM   | React Fiber                          |
| ------------- | ------------- | ------------------------------------ |
| Introduced In | React v0.3+   | React v16                            |
| Update Model  | Synchronous   | Asynchronous + interruptible         |
| DOM Updates   | All at once   | Spread over time (non-blocking)      |
| Supports      | Basic updates | Concurrent rendering, Suspense, etc. |

---

## 📚 Summary

| Concept            | Explanation                                                       |
| ------------------ | ----------------------------------------------------------------- |
| **Fiber**          | Engine under React for incremental and prioritized rendering      |
| **Reconciliation** | Algorithm to update the DOM based on component state/prop changes |
| **Goal**           | Better performance and responsiveness                             |
| **Benefits**       | Pausing work, scheduling priorities, supporting concurrency       |

---

