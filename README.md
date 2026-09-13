# Dev Stack 

DevStack is a simple and interactive web application that helps developers explore different frontend, backend, database, and development tools. Users can view technology details and build their own development stack by selecting the technologies they want.

## Technologies Used

- React.js
- Vite
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON (for technology data)

## Features

1. **Interactive Technology Cards** – Browse 15 popular technologies with icons, ratings, difficulty level, category, and badges in a fully responsive grid.
2. **Your Stack Builder** – Add technologies to a personal stack panel, remove single items or clear everything at once. 
3. **Modern UI & Responsive Design** – Sticky navbar, gradient brand theme (orange → pink → violet), hero section, loading , toast notifications, and fully responsive layout for mobile, tablet, and desktop.

---

## React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a special syntax that lets us write HTML-like code inside JavaScript. It is used in React because it makes the UI code clean, readable, and easier to understand. Behind the scenes, JSX is converted into normal JavaScript function calls.

### 2. What is the difference between props and state?
Props are data that a parent component sends to a child component. Props cannot be changed by the child. State is data that belongs to the component itself and can be updated using a setter function. When state changes, the component re-renders.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` is used to store and update data inside a functional component. In this project I used it for:
- Storing the list of technologies
- Storing the selected stack items
- Managing the loading state
- Controlling the mobile navbar open/close state

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` is used to run side effects after the component renders. I used it to fetch the technologies data from the JSON file when the page first loads. Without `useEffect`, the fetch would run on every re-render, which is wrong and inefficient.

### 5. Why does every item in a .map() list need a unique key prop?
React needs a unique `key` to track each item in the list. When the list changes (add/remove), React uses the key to update only the changed items instead of re-rendering the whole list. This makes the app faster and more efficient.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different content based on a condition.  
Example: In the Stack Panel, if the stack is empty I show an empty message. If there are selected technologies, I show the list of items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- Parent to Child: Data is passed using props. Example: `<TechnologyCard tech={tech} />`
- Child to Parent: A function is passed as a prop from parent to child. The child calls that function to send data back. Example: `onAdd={handleAddToStack}`

---

