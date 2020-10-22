console.log("This app is running~!~!~!");

// JSX
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const removeAll = () => {
    app.options = []
    render();
}

var appRoot = document.getElementById('app')
// JSX: Objects aren't supported
// Strings, Numbers, Booleans, undefined and null
 
const numbers = [55, 101, 1000]
const render = () => {
var template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options && app.options.length > 0 ? 'Here are options' : 'No options'}</p>
    <p>{app.options.length}</p>
    <button onClick={removeAll}>Remove All</button>
    {
        /*numbers.map((number) => {
            return <p key={number}>Number : {number}</p>
        })*/
    }
    <ol>
        {/* map over app.options getting back an array of lis (set key and text) */}
        {
            app.options.map((option) => <li key={option}>{option}</li>)
        }
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
</div>
);
    ReactDOM.render(template, appRoot)
}

render();