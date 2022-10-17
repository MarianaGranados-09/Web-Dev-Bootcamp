// const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );
  
//   function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     root.render(element);  //update the UI by creating a new element and 
//     //passing it to root.render()

// }
  
//   setInterval(tick, 1000);


//Components lets you split the UI into independent reusable pieces.
//Components are like JS functions, they accept arbitrary inputs called props
//and return React elements describing what should appear on the screen

//Simplest way to define a component is to write a JS function:
// function Welcome(props) {
//     return <h1>Hello, {props.name} </h1>
// }

//It accepts a single 'props' object argument with data and returns a React element, we call such components "function components" because they are Javascript functions

//ES6 class syntax
// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }

//Elements can represent user-defined components:
//const element = <Welcome name = "Sara" />
//When react sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object
//We call this object "props" 

// function Welcome(props){
//     return <h1>Hello, {props.name} !</h1>
// }

 const root = ReactDOM.createRoot(document.getElementById("root"));
// //We call root.render() with the <Welcome name="Sara" /> element.
// //React calls the Welcome component with {name: 'Sara'} as the props
// const element = <Welcome name = "Sara" />;
//root.render(element)

//Composing components: components can refer to other components in their output

//App component that renders Welcome many times

function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return(
        <div>
            <Welcome name="Sara" />      
            <Welcome name="Cahal" />     
             <Welcome name="Edite" />
        </div>
    )
}

//root.render(App())

//Extracting Components
function Comment(props) {
    return(
        <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
    );
}

//It accepts author (an object), text (a string) and date (a date) as props, 
//and describes a comment on a social media website

//Extracting Avatar:
function Avatar(props){
  return(
    <img className="Avatar"
      src = {props.user.avatarUrl}
      alt = {props.user.name}
    />
  );
}

//Simplifying Comment:
function Comment(props){
  return(
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}

//Extracting UserInfo component that renders an Avatar 
//next to the user's name
function UserInfo(props){
  return(
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

//Simplifying Comment even further:
function Comment(props){
  return(
    <div className="Comment">
      <UserInfo user={props.author} />      
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

//Extracting components comes in handing when a part of our UI is used several times
//or is complex enough on its own

//Props are Read-Only

function sum(a, b){
  return a+b;
}
//such functions are called "pure" because they do not attempt to change their
//inputs, and always return the same result for the same inputs

//In contrast, this function is impure because it changes its own input:
function withdraw(account, amount){
  account.total -=amount;
}

//ALL REACT COMPONENTS MUST ACT LIKE PURE FUNCTIONS WITH RESPECT TO THEIR PROPS
