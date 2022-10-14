// React helps us write composable code
//ReactDOM.render(<h1>Hello React</h1>, document.getElementById("root"))
// const h1 = document.createElement("h1");
// h1.textContent = "Imperative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1);

//JSX Javascript XML
//Instead of class we use className
// const element = <h1 className="header">This is JSX</h1>
// console.log(element) 
// ReactDOM.render(element, document.getElementById("root"))

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
);

//console.log(page);

ReactDOM.render(
    page,
    document.getElementById("root")
)


