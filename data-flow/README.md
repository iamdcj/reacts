# Data Flow

React ensures the application rendering is kept consitent with the data via a particular data-flow mechanism; _one-way data flow_.

One-way data flow is promoted in Reacts applications; _everything_ goes through a single flow; user input, realtime updates from sever, initial payload, all of which contribute to UI changes and updates.

### Updating the UI

The React engine handles updates in the following ways:

- **Flows**; React Updates components from the top to the bottom of a component tree using the one-way data flow.
-
- **Trigger**; Prop/State changes trigger an update of the tree from the place where the update occurred, these changes then flow to the necessary parts of the application.

#### Render

The `render` method is called whenever things change in the application, this results in changes propagating throughout the application tree. In essence the new data compared with the current data, and based on the differences a mutated version of the UI is generated; this is known as '**reconciliation**'.

#### Updating the DOM

React utilises reconciliation to ensure the UI is fresh and current; but it does it in a performant manner, ensuring these updates and comparisons don't result in slow UI changes.

**How does it do this?**
The Virtual DOM

React has is it’s own DOM, the VDOM, and it uses that to decide when to update the real DOM - this is how it works:

1. RENDER CALL
2. ANALYZES EXISTING VDOM
3. COMPARES AGAINST THE INCOMING VDOM
4. DECIDES ON WHETHER TO UPDATE THE ACTUAL DOM

So, `render()` method does not always result in the real DOM being updated, because React is clever enough to know when to update the actual DOM

(See: https://www.draw.io/#G1d1QyRWQBbPu9nDr4xnKspAFeTsCTD7fU)
