# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by incorrectly updating state within the useEffect dependency array.

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows the corrected code.

## Bug Description
The `useEffect` hook is used to perform side effects after a component renders.  The dependency array specifies which values to watch for changes.  If a state variable is updated within the `useEffect` function, and that same state variable is in the dependency array, it will create an infinite loop.

## Solution
The solution is to avoid directly updating the state variable within the `useEffect` function that is also in the dependency array.  Use a flag variable or other mechanism to control when state is updated.