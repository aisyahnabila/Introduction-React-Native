// // Hello
// let myElement = "Hello World";

// // Basic Rules
// myElement = "<h3>Hello React</h3>"; // wrong
// myElement = <h3>Hello React</h3>; // correct

// Basic Rules
// kode ini salah karena tidak ditutup dengan tanda "/" sebelum kurung siku
// myElement = <img src="https://placehold.co/600x400" >; // wrong
// myElement = <img src="https://placehold.co/600x400" />; // correct

// Basic Rules
//  salah karena tidak ada elemen yang lebih besar untuk membungkus 2 tag string tersebut
// myElement = (
//     <p>Learn Javascript</p>
//     <p>Learn React</p>
// ); // wrong
myElement = (
    <div>
        <p>Learn Javascript</p>
        <p>Learn React</p>
    </div>
); // correct

// // Statement in JSX
// let myText = "Learn React";
// myElement = (
//     <div>
//         <h3>{myText}</h3>
//     </div>
// );

// // Array Processing
// let items = ["Table", "Handphone", "Computer"];
// myElement = (
//     <ul>
//         {items.map((item, index) => <li>{item}</li>)}
//     </ul>
// );

const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);