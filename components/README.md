# State

## Changing State

When dealing with primitive values, state is easy to deal with; primitives are passed by value and updating such values will result in those changes propagating to any children using those values as props.

However, objects and arrays are passed by reference, making state changes a little trickier to handle.
