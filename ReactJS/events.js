//Handling events in react

//With JSX you pass a function as the event handler, rather than a string

//React:
//<button onClick={shoot}>Take the Shot!</button>

// //html
// <button onclick="shoot()">Take the Shot!</button>

//shoot function inside football component:
function Football() {
  const shoot = (a) =>{
    a.preventDefault();
    alert(a);
  }

  return(
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);

//Passing arguments: using arrow functions
