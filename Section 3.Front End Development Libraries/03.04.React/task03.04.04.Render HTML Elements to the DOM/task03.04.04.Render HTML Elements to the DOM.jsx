const JSX = (
    <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
    </div>
);
// Change code below this line

{/** There is a div with id='challenge-node' available for you to use. */}
const node = document.getElementById("challenge-node");

ReactDOM.render(JSX, node);