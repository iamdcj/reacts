# JSX

JSX is the templating language (most)engineers use to build components in React. It extends regular JavaScript, allowing engineers to code UI components with the full power of JS.

> It is used to describe what the UI should look like.

## Separation of Concerns

The classic idea of separating all concerns into different files goes against React's ideology, opposed to separating markup, logic and styles into different files it embraces placing these concerns into components, with each component containing its structure(markup) and logic(JavaScript).

> JSX components contain both the markup, and the logic for a particular abstraction, e.g. a form component and the handling code.

### Markup

```
<div className="a-component>
    <h1>Hi, I am a React component</h1>
</div>
```

### Logic

If you want to use regular JS within your JSX code you simply need to wrap it in curly braces.

You cannot do perform multi-line, complex calculations in your JSX, but you can output single-line, basic calculations and data within your markup.

```
const Person = () => {
  return <p>I am a person, and I am  {Math.floor(Math.random() * 30)} years old</p>;
}
```

### Styles

JSX can easily contain any styles needed for the component's presentation directly in the file, resulting in all component concerns living in one file, however the styles are usually placed in a separate file.

---

#### Refs. and Resources

- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
