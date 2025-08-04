
---

## 🧠 What Are We Building?

You’re building a **simple authentication system** using React’s **Context API**:

* The user can **log in** by entering their name and password.
* Once logged in, their name appears on the **Profile** page.
* We avoid prop drilling by using Context API.

---

## ✅ Folder Structure

```
src/
├── context/
│   ├── UserContext.js
│   └── UserContextProvider.jsx
├── components/
│   ├── Login.jsx
│   └── Profile.jsx
├── App.jsx
```

---

## 1. 🧱 `UserContext.js`

```js
const UserContext = React.createContext();
```

### 🔍 What it does:

* Think of `UserContext` as a **"global room"** that stores shared user info.
* `createContext()` is used to create this room.

---

## 2. 📦 `UserContextProvider.jsx`

```js
const [user, setUser] = useState(null);
```

This component is a **Provider** that:

* Creates a `user` state (initially `null`).
* Shares `user` and `setUser` with every component inside it using:

```jsx
<UserContext.Provider value={{user, setUser}}>
    {children}
</UserContext.Provider>
```

So anything wrapped inside this provider can:

* Read `user`
* Update `user` using `setUser`

📌 `children` means whatever you wrap with `UserContextProvider` (e.g., `<App />`).

---

## 3. 💻 `App.jsx`

```jsx
<UserContextProvider>
  <Login />
  <Profile />
</UserContextProvider>
```

You're **wrapping your whole app** inside `UserContextProvider`.
Now both `<Login />` and `<Profile />` can access user data.

---

## 4. 🔑 `Login.jsx`

```js
const { setUser } = useContext(UserContext);
```

* Here you're getting `setUser` from context.
* When the user fills in name and password, `setUser` is called to update the context.

```js
setUser({username, password});
```

➡️ This updates the **global user object** with login info.

---

## 5. 👤 `Profile.jsx`

```js
const { user } = useContext(UserContext);
```

* Here, you're reading `user` from context.

```js
if (!user) return <div>Please login</div>;
return <div>Welcome {user.username}</div>;
```

✅ If user is logged in, show their name
❌ If not, ask them to log in

---

## 🛠 How the Data Flows

```
            App.jsx
              │
  ┌───────────┴────────────┐
Login.jsx            Profile.jsx
  │                          │
setUser()  🔄 updates     user is read and shown
```

All of this happens through **context**, no props needed!

---

## 💡 Real-Life Analogy

🧓 Grandfather (`UserContextProvider`)
👩 Parent1 (`Login`) → gives login info
👦 Parent2 (`Profile`) → reads the info

They **share a common memory (context)** rather than passing notes to each other.

---

## ✅ Benefits

| Feature          | Explanation                                      |
| ---------------- | ------------------------------------------------ |
| No prop drilling | You don’t need to pass props through every level |
| Global state     | All components can read/update the same state    |
| Clean structure  | Easy to manage login, theme, user, cart, etc     |

---

## 🧪 What Happens When You Click Submit?

1. User types "ranjit" and "1234"
2. Clicks submit → `setUser({ username: "ranjit", password: "1234" })`
3. The context `user` gets updated
4. `Profile` re-renders → now shows "Welcome ranjit"

---

## 📌 Summary

| File                      | Purpose                                          |
| ------------------------- | ------------------------------------------------ |
| `UserContext.js`          | Creates context                                  |
| `UserContextProvider.jsx` | Provides `user` & `setUser` globally             |
| `Login.jsx`               | Sets user data from input                        |
| `Profile.jsx`             | Reads user data from context                     |
| `App.jsx`                 | Wraps all components inside the context provider |

---
