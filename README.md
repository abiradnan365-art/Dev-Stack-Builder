#Project Name
Dev Stack Builder

#Description
Dev Stack is a web application where developers can explore different technologies and build their own stack.

#Teachnologies Used
-React
-TypeScript
-Tailwind Css
-React Toastify
-Vite
-React Icons

#Features
-Explore frontend, backend, database, and other technologies.
-Add and remove technologies from your own stack.
-Showing toast notifications

#React Questions
1.What is JSX, and why is it used in React?
=> JSX is a syntax that allows us to write HTML like code inside JavaScript or TypeScript.

2.What is the difference between props and state?
=> Props are used to pass data form parent component to a child component and state are used to store and manage data that can change inside a component.

3.What does the useState hook do, and where did you use it in this project?
=> The useState hook is used to create and managed state in a React component.

4.What does the useEffect hook do, and why did you need it to load the JSON data?
=> The useEffect hook is used to perform side effects such as fetching data.

5.Why does every item in a .map() list need a unique key prop?
=> A unique key helps react identify each item in a list.

6.What is conditional rendering? Show one place you used it (example: the empty stack message).
=> Conditional rendering means displaying different UI based on a condition.I used it in the Your Stack section to show an empty message when no technology is selected and show the selected technologies when items are added.

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
=>A parent passes data to a child using props.A child can send data back by calling a function passed from the parent as a prop.
