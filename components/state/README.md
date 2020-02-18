# State

React components can, and often do deal with `state`. If the state of a component is updated, the component will re-`render`.

## Changing State

State by its nature is set to change, and as a result is it is best to be conscious of some 'gotchas' when modifying component state.

### Mutating Composites Values

When dealing with primitive values, state is easy to deal with; primitives are passed by value and updating such values will result in those changes propagating to any children using those values as props.

However, objects and arrays are passed by reference, making state changes a little trickier to handle.
