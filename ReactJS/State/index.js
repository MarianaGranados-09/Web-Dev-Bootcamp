//State allows React components to change their output over time in 
//response to user actions, network responses and anything else

//One way to update the UI: root.render()
//const root = ReactDOM.createRoot(document.getElementById('root'));
  
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);}

// setInterval(tick, 1000);

// //Make the Clock component truly reusable and encapsulated:
// //it will set up its own timer and update itself every second

// //encapsulating how the clock looks:
// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Clock(props){
//   return(
//     <div>
//       <h1>Hello!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick(){
//   root.render(<Clock date = {new Date()} />);
// }

// setInterval(tick, 1000);

//State is similar to props, but it is private and controlled by the component

//Convert a function component like Clock to a class:
// class Clock extends React.component {
//   render(){
//     return(
//       <div>
//         <h1>Hello!</h1>
//         //Replace props with this.props
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//     </div>
//     );
//   }
// }

//Clock is now defined as a class rather than a function, the render method will be called
//each time an update happens

//Adding Local state to a class
//replace this.props.date with this.state.date in the render() method

//then add a class constructor that assigns the initial this.state

// *pass props to the base constructor
class Clock extends React.Component {
  //A constructor is part of OOP: creates an object.
  //This is where we want to set up the state for the component
  constructor(props) {
    super(props);
    this.state = {date: new Date()};  
  }
  //Lifecycle methods
  componentDidMount(){
    //runs after the component output has been rendered to the DOM
    this.timerID = setInterval(
    () => this.tick(), 1000
    );
  }S
  componentWillUnmount(){
    //tearing down the timer
    clearInterval(this.timerID);
  }
  //Implement a method called tick that the CLock component will run 
  //every second, we use this.setState() to schedule 
  //updates to the component local state
  tick(){
    this.setState({
      date: new Date()
    });
  }
  render(){
    return(
      <div>
        <h1>Hello!</h1>
        {/* //Replace props with this.props */}
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);

//Next we make the clock set up its own timer and update itself

//Adding lifecycle methods to a class

//By setting up a timer whenever clock is rendered to the DOM for the first time
//we are "mounting"  in React, and by clearing the timer whenever the dom produced by
//the Clock is removed, we are "unmounting"

//ABOUT THIS.STATE

//When <Clock /> is passed to root.render(), React calls the
//constructor of the Clock component, Clock needs to display the current time, so it initializes this.state with an object incluiding the current time. 

//In react apps, whether a component is stateful or stateless is 
//considered an implementation detail of the component that may change
//over time



//A component may choose to pass its state down as props to its child components

