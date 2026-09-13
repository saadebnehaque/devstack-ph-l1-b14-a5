# Dev Stack 📦

Dev Stack is a modern, responsive web application built to help developers explore, compare, and assemble their ideal technology stack for modern software projects.

## 📝 Project Description

Dev Stack is designed to streamline the tech stack selection process for developers and teams. It features a curated list of technologies ranging from frontend frameworks to databases and DevOps tools. Users can filter, review details like difficulty and community ratings, and build a personalized deployment stack in real-time with instant alerts and clean sidebar management.

## 🛠️ Technologies Used

* **Framework:** React.js (Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS, DaisyUI
* **Notifications:** React Toastify (`react-toastify`)
* **Data Source:** Local JSON (`technologies-data.json`)

## ✨ Key Features & Functional Working Process

1. **Interactive Technology Exploration Grid:**
* **How it works:** Technologies are dynamically mapped into a responsive grid layout. Each card displays key metadata like icons, names, categories, ratings, and difficulty badges. Users can browse items efficiently across mobile, tablet, and desktop viewports.


2. **Real-Time Stack Management & Validation:**
* **How it works:** When a user clicks the "Add to Stack" button on any technology card, the application checks if the item already exists in the stack array state. If it is already present, a warning alert is triggered via Toastify. If it's a new item, it gets appended to the state, the card's button transforms into a disabled state reading "✓ Added to Stack", and the sidebar counter updates instantly.


3. **Asynchronous Loading & Toast Feedback:**
* **How it works:** Data fetching from the local JSON file is wrapped using React `Suspense` with a custom `LoadingSpinner` fallback. Furthermore, `react-toastify` is integrated globally with custom flip transitions to provide immediate, animated visual feedback for every user action (adding items, duplicate attempts, single item removal, and clearing the entire stack).



---

## 💡 React Concept Questions & Answers

### What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like markup directly inside JavaScript files. It is used in React because it makes code easier to read, write, and maintain by keeping UI structure and logic tightly coupled.

### What is the difference between props and state?

* **Props (Properties):** Read-only data passed down from a parent component to a child component to configure or display data. They are immutable from the child's perspective.
* **State:** Local data managed *inside* a component that can change over time based on user interactions or network events, triggering a re-render when updated.

### What does the useState hook do, and where did you use it in this project?

The `useState` hook allows functional components to maintain and update local state variables. In this project, it was used to manage the selected items in the user's stack, handling additions, removals, and active filters.

### What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook lets you perform side effects (such as data fetching, subscriptions, or manually changing the DOM) in functional components after rendering. It is used to load external or local JSON data asynchronously when the component mounts. *(Note: In modern React with Suspense, data fetching hooks or promises can also coordinate with Suspense boundaries).*

### Why does every item in a .map() list need a unique key prop?

React uses `key` props to efficiently identify which items have changed, been added, or been removed in a list. Without unique keys, React cannot reliably track DOM elements, leading to performance bottlenecks or rendering bugs.

### What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering is the practice of rendering different UI elements or components based on specific conditions (like JavaScript `if` statements, ternary operators, or logical `&&` operators).
*Example used in the stack sidebar:*

```tsx
{stack.length === 0 ? (
  <p className="text-gray-500">Your stack is empty.</p>
) : (
  <YourStackList items={stack}/>
)}

```

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

* **Parent to Child:** Data is passed down via attributes called **props** (e.g., `<ChildComponent data="{parentData}"/>`).
* **Child to Parent (Inverse Data Flow):** The parent passes a **callback function** down as a prop to the child. When an event happens in the child, it invokes that callback function, passing data back up to the parent.