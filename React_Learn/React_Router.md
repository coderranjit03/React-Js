
---

### ✅ Table of Contents

1. **What is React Router DOM?**
2. **Two Ways to Define Routes**

   * `BrowserRouter` + `Routes` + `Route` (Old/Declarative)
   * `createBrowserRouter` + `RouterProvider` (New/Data API)
3. **Nesting with `Outlet`**
4. **Dynamic Values via URL Parameters**
5. **Dynamic Search Values in URL (Query Params)**
6. **Common Hooks: `useNavigate`, `useParams`, `useLocation`, `useSearchParams`**
7. **Which to Use? (`BrowserRouter` vs `RouterProvider`)**
8. **Best Practices**

---

## 🧠 1. What is React Router DOM?

React Router DOM is a routing library that enables navigation between components in a **React Single Page Application (SPA)**, without full-page reloads.

---

## 🔀 2. Routing: Two Methods

---

### ✅ A. **Traditional (Declarative) Method**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

### ✅ B. **Data API Method (Newer)**

```jsx
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
```

> ✅ **RouterProvider** replaces `BrowserRouter`
> ✅ **createBrowserRouter** gives control over routing, loaders, errors, etc.
> ✅ **createRoutesFromElements** lets you define routes in JSX.

---

## 🔗 3. Nesting Routes with `Outlet`

```jsx
<Route path="/" element={<Layout />}>
  <Route path="home" element={<Home />} />
  <Route path="contact" element={<Contact />} />
</Route>
```

### 🧱 Layout Component (with `Outlet`)

```jsx
// Layout.jsx
import { Outlet, Link } from "react-router-dom";

const Layout = () => (
  <div>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <Outlet /> {/* Render child routes here */}
  </div>
);
```

> Think of `Outlet` as a **placeholder** for nested child routes.

---

## 🔁 4. Dynamic Routing (URL Parameters)

```jsx
<Route path="/user/:username" element={<User />} />
```

```jsx
// User.jsx
import { useParams } from "react-router-dom";

const User = () => {
  const { username } = useParams();
  return <h1>Hello {username}</h1>;
};
```

Visit `/user/ranjit` → `Hello ranjit`

---

## 🔍 5. Dynamic Search Values in URL (Query Parameters)

### Add Search Params in URL

```jsx
navigate("/search?query=react");
```

### Read Search Params

```jsx
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return <h2>Search result for: {query}</h2>;
};
```

---

## 🧰 6. Useful Hooks

| Hook                | Use                                              |
| ------------------- | ------------------------------------------------ |
| `useNavigate()`     | Navigate programmatically                        |
| `useParams()`       | Read dynamic URL values (`/user/:id`)            |
| `useSearchParams()` | Manage query strings in URL (`?query=xyz`)       |
| `useLocation()`     | Read entire location object (path, search, hash) |

---

## 🆚 7. When to Use Which?

| Feature                         | BrowserRouter | createBrowserRouter + RouterProvider |
| ------------------------------- | ------------- | ------------------------------------ |
| Simpler setup                   | ✅             | ❌ (More config)                      |
| Loader, Error Boundary, Actions | ❌             | ✅ (Built-in)                         |
| Nested routes with layouts      | ✅             | ✅                                    |
| Scalable & structured apps      | ❌             | ✅ (Better suited)                    |

---

## 💡 8. Real Project Structure Example

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "profile/:id", element: <Profile /> },
      { path: "search", element: <Search /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
```

---

## 🏁 Summary of All Concepts

| Feature                    | Description                                                |
| -------------------------- | ---------------------------------------------------------- |
| `Outlet`                   | Placeholder for nested routes                              |
| `RouterProvider`           | Provides routing context (used with `createBrowserRouter`) |
| `createBrowserRouter`      | New route definition API                                   |
| `createRoutesFromElements` | JSX-based route definitions                                |
| `useParams`                | Get `:id` or `:username` from URL                          |
| `useSearchParams`          | Read/query string like `?q=abc`                            |
| `useNavigate`              | Redirect in JS                                             |
| `useLocation`              | Get full current location object                           |
| ` Route    `              | Catch-all for 404                                          |
| `Search Input`               | Append query string dynamically                            |
| `App-level Wrapper `         | Only use `BrowserRouter` or `RouterProvider` once at root  |

---

