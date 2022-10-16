//Embedding Expressions in JSX
// const name = 'John Foe'
// const element = <h1> Hello, {name} </h1>


// function formatName(user){
//     return user.firstName + ' '+ user.lastName;
// }

// const user = {
//     firstName: 'Har',
//     lastName: 'Perez'
// };

// const element = (
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// )

// function getGreeting(user){
//     let doc;
//     if(user) {
//          doc = <h1>Hello, {formatName(user)}! </h1>
//     }else{
//         doc =  <h1>Hello, Stranger.</h1>
//     }
//     let docComplete = 
//     <div>
//         {doc}
//         <a href="https://www.reactjs.org"> link </a>
//     </div>
//     return docComplete;
// }

//  ReactDOM.render(getGreeting(user), document.getElementById("root"));

//JSX tags with children:
const element = (
    <div>
        <h1>Hello!</h1>
        <p>
            Good to see you!
        </p>
    </div>
)

ReactDOM.render(element, document.getElementById("root"));

//Object are called 'React elements' which are descriptions of what you want
//to see on the screen. React reads these objects and uses them to construct
//the DOM and keep it up to date