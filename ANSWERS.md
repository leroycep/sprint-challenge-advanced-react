- [x] Why would you use class component over function components (removing hooks
      from the question)?

  - Prior to hooks, class components were the only way to store state.

- [x] Name three lifecycle methods and their purposes.

  - `componentDidMount` let's us run logic that needs to run once at the
    beginning of a component's lifecycle. Like requesting data from a server.
  - `componentDidUpdate` let's us run logic that needs to run every time a
    component's state is updated.
  - `componentWillUnmount` let's us run logic that needs to run one the
    component is going to be removed. You can delete timers that will no longer
    be needed, or cancel axios requests that are no longer necessary.

- [x] What is the purpose of a custom hook?

  - To take some logic and make it reusable. It's an important part of following
    DRY.

- [x] Why is it important to test our apps?

  - So we can feel confident that the application works. More confident, at
    least. It helps use catch bugs and regressions by automatically checking
    whether things work out the way we expect.
