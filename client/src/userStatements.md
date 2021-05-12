- look into and clean up the public folder: index.html, manifest, and robots.txt file.

- From React docs
  - Advanced Guides
  - API Reference
  - Hooks
  - Testing

- Check from React Docs: ReactDOM.render() itself should really only fire once. React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state. Thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.

- PropTypes
- try ESLint extension again?
- See why ESLint said React, test, expect were undefined.

- Because props and state may be updated asynchronously, you should not rely on their values for calculating the next state. To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:
```
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

- When you call setState(), React merges the object you provide into the current state. ???  Not overwrite?

https://www.youtube.com/watch?v=3XaXKiXtNjw&t=896s

