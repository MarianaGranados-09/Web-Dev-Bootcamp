//React.Component subclasses

//Here, ShoppingList is a React component class which takes in parameters called 
//props (properties) and return a hierarchy of views to display via the render method


//The render method returns a description of what is shown on screen
//render returns a react element
//The <div /> syntax is transformed at build time to React.createElement('div')


class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
  
  ReactDOM.render( <ShoppingList name="Mark" />, document.getElementById("root"))
