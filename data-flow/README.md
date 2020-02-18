# Data Flow

React promotes one-way data flow in applications; _everything_ goes through a single flow; user input, realtime updates from sever, initial payload.

### Updates

The React engine handles updates in the following ways:

- **Flows**; React Updates components from the top to the bottom of a component tree using the one-way data flow.
- **Trigger**; Prop/State changes trigger an update of the tree from the place where the update occurred.

Render is called when things change, these are then compared and based in the differences a mutated version of the component is created.

#### Updating the DOM

React utilises reconciliation - it keeps the UI fresh by automatically updating the DOM as the data changes.

The `render()` method does not always result in the real DOM being updated - React is clever enough to know when to update the actual DOM

How does it do this?
The Virtual DOM

React has is it’s own DOM, the VDOM,and it uses that to decide when to update the real DOM - this is how it works:

1. RENDER CALL
2. ANALYZES EXISTING VDOM
3. COMPARES AGAINST THE INCOMING VDOM
4. DECIDES ON WHETHER TO UPDATE THE ACTUAL DOM

(See: https://www.draw.io/#G1d1QyRWQBbPu9nDr4xnKspAFeTsCTD7fU)
