```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldUpdate, setShouldUpdate] = useState(false);

  useEffect(() => {
    if (shouldUpdate) {
      setCount(count + 1);
      setShouldUpdate(false);
    }
  }, [count, shouldUpdate]);

  useEffect(() => {
    // Simulate an event that triggers the update
    const timeoutId = setTimeout(() => {
      setShouldUpdate(true);
    }, 1000);  // Update every 1 second
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```