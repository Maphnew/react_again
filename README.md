# react_again
Learn React from Udemy


## Section 1: Welcome
10분 

1. Welcome & Asking Good Questions
5분

- How to build React App
- Part 1: How to build, render, submit form, user interaction
- Part 2: Advanced, Ecosystem, Auth, Deploy
- Using Q&A  

2. "Why should I learn React?"
5분

- Library
- The React community

## Section 2: Setting up Your Environment
7분

3. Section Intro: Setting up Your Environment
1분

4. Installing Visual Studio Code
2분

5. Installing Node.js & Yarn
4분

```bash
$ npm i -g yarn
$ yarn --version
```

## Section 3: Hello React
0 / 16|3시간 45분

6. Section Intro: Hello React
2분

- http://indecision.mead.io
- http://links.mead.io/indecision

- Fundermentals
- JSX

7. Setting up a Web Server
12분

```bash
$ npm install -g live-server
$ live-server -v
$ live-server public
```

8. Hello React
19분

```JavaScript
// app.js

console.log('App.js is running!')

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js</p>
var template = React.createElement("h1", {
    id: "aa s",
    className: "aaa fff fff"
  }, "This is JSX ggg");
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
```

9. Setting up Babel
17분

```bash
$ yarn global add babel-cli@6.24.1
or $ npm i -g babel-cli@6.24.1
$ babel --help
```

```bash
$ yarn init
$ yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
```
- Created package.json and yarn.lock

```bash
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```
- JSX to JavaScript

- To install node modules
```bash
$ yarn install
```
- git ignore
```bash
$ git rm -r --cached .
$ git add .
$ git commit -m "fixed untracked files"
```

10. Exploring JSX
15분

```JavaScript
// app.js


console.log('App.js is running!')

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

var templateTwo = (
    <div>
        <h1>Maphnew Kim</h1>
        <p>Age: 20</p>
        <p>Location: KOREA</p>
    </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
```

11. JSX Expressions
10분

```JavaScript
// app.js

console.log('App.js is running!')

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)
var user = {
    name: 'Maphnew',
    age: 25,
    location: 'New York'
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
```

12. Conditional Rendering in JSX
23분


```shell
> live-server public
> babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

- Conditional Rendering
- Conditional Logic in general

- 1. if statements
```JavaScript
// 1. if statements

// app.js
var user = {
    name: 'Maphnew',
    age: 25
}
function getLocation(location) {
    if (location) {
        return location
    } else {
        return 'Unknown';
    }
}
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
)
```
- 2. ternary operators
```JavaScript
// ternary operators
true ? 'Maphnew' : 'Anonymous'
"Maphnew"

false ? 'Maphnew' : 'Anonymous'
"Anonymous"

// app.js
var user = {
    name: 'Maphnew',
    age: 25
}
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    } 
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
)
```
- 3. logical and operator
```JavaScript
// logical and operator
true && 'Some age'
"Some age"

false && 'Some age'
false

// app.js
var user = {
    name: 'Maphnew',
    age: 35,
    location: 'Ulsan'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    } 
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
```


13. ES6 Aside: const and let
16분
- Create folder and file 'playground/es6-let-const.js'
```bash
babel .\src\playground\es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
```

```JavaScript
// playground/es6-let-const.js

var nameVar = 'Maphnew'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'Juli'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

function getPetName() {
    const petName = 'Hal'
    return petName
}

const petName = getPetName()
console.log(petName)

// Block scoping (let, const)

const fullName = 'Jen Kim'
let firstName

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)
```

14. ES6 Aside: Arrow Functions
13분

```JavaScript
// playground/es6-arrow-function.js

const square = function (x) {
    return x * x
}

function anotherSquare(x) {
    return x * x
}

// const squareArrow = (x) => {
//     return x * x
// }

const squareArrow = (x) => x * x

console.log(square(8))
console.log(squareArrow(4))

// challenge - use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntex

const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}
console.log(getFirstName('Mike Smith'))

const getFirstName2 = (fullName) => fullName.split(' ')[0]
console.log(getFirstName2('Sam Smith'))
```

15. ES6 Aside: Arrow Functions Part II
20분

```JavaScript
// playground/es6-arrow-function2.js

// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments)
    return a + b
}

console.log(add(55, 1, 1001))

// this keyword - no longer bound

const user = {
    name: 'Maphnew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + this.city)
    }
}

console.log(user.printPlacesLived())

// challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply()) // [1,2,3] 2 [2,4,6]
```

16. Events and Attributes
17분


```JavaScript
// src/app.js

let count = 0
const addOne = () => {
    console.log('addOne')
}
const minusOne = () => {
    console.log('minusOne')
}
const reset = () => {
    console.log('reset')
}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
)

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"

const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
```

17. Manual Data Binding
12분

- Data Binding
- Virtual DOM algorithm

```JavaScript
// src/app.js

let count = 0
const addOne = () => {
    count++
    rederCounterApp()
}
const minusOne = () => {
    // subtract 1 from count - rerender
    count--
    rederCounterApp()
}
const reset = () => {
    // set count to 0 a rerender
    count = 0
    rederCounterApp()
}

const appRoot = document.getElementById('app')

const rederCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot)
}

rederCounterApp()
```

18. Forms and Inputs
18분

```JavaScript
// src/app.js

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
    }
    render()
}

const onRemoveAll = () => {
    app.options = []
    render()
}

const appRoot = document.getElementById('app')

const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
    
}

render()
```

19. Arrays in JSX
14분

- map Arrays & return some html thing.

```JavaScript
// src/app.js

const numbers = [55, 101, 1000]

const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                numbers.map((number)=>{
                    return <p key={number}>Number: {number}</p>
                })
            }
            {<p>1</p>}
            <ol>
                {/* map over app.options getting back an array of lis (set key and text) */
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
    
}

```

20. Picking an Option
9분

- Random, Floor
- disabled

```JavaScript

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

```

21. Build It: Visibility Toggle
9분

- Change source to watch!

```bash
$ babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react
```

```JavaScript
// playground/build-it-visible.js
let visibility = false

const toggleVisibility = () => {
    visibility = !visibility
    render()
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
        
    )

    ReactDOM.render(jsx, document.getElementById('app'))
}

render()
```


## Section 4: React Components
3시간

22. Section Intro: React Components
1분

- React is component based architecture
- Break big complex application up into small pieces(component)

23. Thinking in React
7분

> Twitter  
- header component \<Header />
- profile component \<ProfileWidget />
- trends component \<Trends />
- trend component \<Tend />
- tweet component \<Tweet />
- parent component \<DashboardPage />

> Indecision app  
- \<IndecisionApp />
- \<Header />
- \<Action />
- \<Options />
- \<Option />
- \<AddOption />

24. ES6 Classes: Part I
21분

- Class
- constructor function
- back tick `` and ${}
- instances

```JavaScript
// playground/e6-classes-1.js

// Challenge
// Setup constructor to take name and age (default to 0)
// getDescription - Maphnew Kim is 35 year(s) old.

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        // return 'Hi. I am ' + this.name + '!'
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }
}

const me = new Person('Maphnew Kim', 35)
console.log(me.getDescription())

const other = new Person()
console.log(other.getDescription())
```

25. ES6 Classes: Part II
18분

- extends class
- super()
- !!''

```JavaScript

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
        // !'' true
        // !!'' false
        // !!'andrew' true
        // !!undefined false
    }
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGreeting(){
        let greeting = super.getGreeting()

        if (this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}`
        }

        return greeting
    }
}

// Challenge
// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Maphnew Kim. I'm visiting from New York.
// 2. Hi. I am Maphnew Kim.

const me = new Traveler('Maphnew Kim', 35, 'New York')
console.log(me.getGreeting())

const other = new Traveler(undefined, undefined, 'Nowhere')
console.log(other.getGreeting())

```

26. Creating a React Component
15분

- UpperCase
- render()
- \<Component />

```JavaScript
// src/app.js

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a Computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

// Challenge
// Options  -> Options component here
class Options extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>option1</li>
                    <li>option2</li>
                    <li>option3</li>
                </ul>
            </div>
        )
    }
}

// Challenge
// AddOption -> AddOption component here
class AddOption extends React.Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button>ADD</button>
            </div>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))
```

27. Nesting Components
6분

- Nesting Components
```JavaScript
// src/app.js
class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a Computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component here
                <Option />
            </div>
        )
    }
}

// Challenge
// Option -> Option component here
class Option extends React.Component {
    render() {
        return (
            <div>
                Option component here
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button>ADD</button>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
```

28. Component Props
14분

- props
- this.props.something

```JavaScript
// scr/app.js

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a Computer'
        const options = ['Thing one','Thing two', 'Thing four']

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

// Challenge
// Setup options prop for Options component
// Render the length of the array

// Render new p tag for each option (set text, set key)

class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}

// Challenge
// Option -> Option component here
class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button>ADD</button>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

```

29. Events & Methods
11분

- jsx onClick, onSubmit
- function in the class

```JavaScript
// src/app.js

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
                
            </div>
        )
    }
}

// Challenge

// Add Remove All button
// Setup handleRemoveAll -> alert some message
// Setup onClick to fire the method

class Options extends React.Component {
    handleRemoveAll() {
        alert('handleRemoveAll')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}


// Challenge

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        if(option) {
            alert(option)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>ADD Option</button>
                </form>
            </div>
        )
    }
}
```

30. Method Binding
11분

```JavaScript
// example

const obj = {
    name: 'Virkram',
    getName() {
        return this.name
    }
}

// const getName = obj.getName // x
const getName = obj.getName.bind(obj)
// const getName = obj.getName.bind({ name: 'Maphnew'})

console.log(getName())

```
- constructor(props)

```JavaScript
// src/app.js

class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
        console.log(this.props.options)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}
```
31. What Is Component State?
7분

> 1. Setup default state object   
> 2. Component rendered with default state values   
> 3. Change state based on event   
> 4. Component re-rendered using new state values
> 5. Start again at 3  

32. Adding State to Counter App: Part I
8분

```JavaScript
// playground/counter-example.js

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
    handleAddOne(){
        console.log('AddOne')
    }
    handleMinusOne(){
        console.log('MinusOne')
    }
    handleReset(){
        console.log('Reset')
    }

    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// Create three methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor

ReactDOM.render(<Counter />, document.getElementById('app'))
```

33. Adding State to Counter App: Part II
11분

```JavaScript
// playground/counter-example.js

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne(){
        // Call this.setState decrement the count by 1
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}
```

34. Alternative setState Syntax
7분

```JavaScript
// playground/counter-example.js
// example

    handleReset(){
        this.setState(() => {
            return {
                count: 0
            }
        })
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
        // this.setState({
        //     count: 0
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })
    }
```

35. Build It: Adding State to VisibilityToggle
8분

```JavaScript
// playground/build-it-visible.js

// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return { 
                visibility : !prevState.visibility
            }
        })

    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey, These are some details you can now see!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
```

36. Indecision State: Part I
17분

- state / options(changing values), props / methods, binding props and state

```JavaScript
// src/app.js

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.state = {
            options : ['Thing one','Thing two', 'Thing four']
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }
    // handlePick - pass down to Action and setup onClick - bind here
    // randomly pick an option and alert it
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a Computer'
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
                
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}


```

37. Indecision State: Part II
15분

- child class has constructor and props/state

```JavaScript
// src/app.js
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options : []
        }
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) =>{
            return {
                options : prevState.options.concat(option)
            }
        })
    }
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a Computer'
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props) 
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => {
            return { error }
        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>ADD Option</button>
                </form>
            </div>
        )
    }
}
```

38. Summary: Props vs. State
4분

- Props    
> - One way(parent -> child)   
> - An object   
> - Can be used when rendering    
> - Changes (from above) cause re-renders   
> - Comes from above   
> - Can't be changed by component itself   

- State   
> - An object   
> - Can be used when rendering    
> - Changes cause re-renders   
> - Defined in component itself   
> - Can be changed by component itself   

## Section 5: Stateless Functional Components
1시간 23분

39. Section Intro: Stateless Functional Components
1분

40. The Stateless Functional Component
14분

```JavaScript
// src/app.js

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
            
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} optionText={option} />)
            }
    </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    )
}
```

41. Default Prop Values
10분

```JavaScript
// src/app.js


        this.state = {
            options : props.options
        }

IndecisionApp.defaultProps = {
    options: []
}

// src/playground/counter-example.js

        this.state = {
            count: props.count
        }

Counter.defaultProps = {
    count: 0
}

```

42. React Dev Tools
7분

- google serach "chrome react devtools"    
- add "react developer tools" extension to chrome  
- restart the tabs
- f12 
- check Components tab

43. Removing Individual Options
16분

- Make it single line
```JavaScript
//
    handleDeleteOptions() {
        this.setState(() =>({ options: [] }))
    }
//
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
```
- delete individual option
```JavaScript
///
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    /////
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />

///
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                remove
            </button>
        </div>
    )
}

```


44. Lifecycle Methods
10분

- componentDidMount
- componentDidUpdate
- componentWillUnmount

- search : react component lifecycle, click "React.Component - React - Facebook Code"

```JavaScript
// src/app.js
    componentDidMount() {
        console.log('fetching data')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('saving data!')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    handleDeleteOptions() {
        this.setState(() =>({ options: [] }))
    }
```
45. Saving and Loading Options Data
15분

```JavaScript

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
    
            if(options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
        
    }
/// props.option.length === 0 
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    )
}

/// after add an option, remove input space

    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
```

46. Saving and Loading the Count
11분

```JavaScript
// playground/counter-example.js

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count')
            const count = parseInt(stringCount,10)
            if (!isNaN(count)) {
                this.setState(() => ({ count }))
            }
        } catch (e) {

        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            
            localStorage.setItem('count', this.state.count)
        }
        
    }
```

## Section 6: Webpack
2시간 16분

47. Section Intro: Webpack
1분

- React feature
- 3rd party library

48. What Is Webpack?
9분

49. Avoid Global Modules
8분

- delete 

```bash
$ npm uninstall -g babel-cli live-server
```

- install

```bash
$ yarn add live-server babel-cli@6.24.1
```
- add to package.json

```json
  "scripts": {
    "serve": "live-server public/",
    "build": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
  },
```

- type "yarn run serve", "yarn run build"

```bash
$ yarn run serve

$ yarn run build
```

- test on app.js

50. Installing & Configuring Webpack
17분

```bash
$ yarn add webpack@3.1.0
```

- modify package.json

```json
  "scripts": {
    "serve": "live-server public/",
    "build": "webpack --watch",
    "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
  },
```

- create webpack.config.js
```JavaScript
// entry point -> output
const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};
```

```bash
$ node webpack.config.js
```

- remove public/scripts folder

- delete change script down below in index.html
-   

```html
<!-- delete -->
        <script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
<!-- change -->
        <script src="/bundle.js"></script>
```

51. ES6 import/export
19분

```JavaScript
// src/person.js

console.log('person!')

const isAdult = (age) => age >= 18
    
const canDrink = (age) => age >= 21

export { isAdult, canDrink }
```
```JavaScript
// src/app.js
import { isAdult, canDrink } from './person.js'

console.log('app!')
console.log(isAdult(18))
console.log(canDrink(18))
```
52. Default Exports
11분


```JavaScript
// src/app.js

// import './utils.js'
// import subtract, { square, add } from './utils.js'

// console.log('app.js is running')
// console.log(square(4))
// console.log(add(2,3))
// console.log(subtract(54,3))

import isSenior, {isAdult, canDrink} from './person.js';
console.log('app!')
console.log(isAdult(18))
console.log(canDrink(18))
console.log(isSenior(64))
```

```JavaScript
// src/utils.js
console.log('utils.js is running')

export const square = (x) => x * x;

export const add = (a, b) => a + b;

// const subtract = (a ,b) => a-b;

export default (a ,b) => a-b;

// export { square, add, subtract as default }
// exports - default export - named exports
```

```JavaScript
// src/person.js
console.log('person!')

const isAdult = (age) => age >= 18
const canDrink = (age) => age >= 21
const isSenior = (age) => age >= 65

// export default (age) => age >= 65
// export { isAdult, canDrink}
export { isAdult, canDrink, isSenior as default }
```
53. Importing npm Modules
11분

```bash
$ yarn add react@16.0.0 react-dom@16.0.0
```
```JavaScript
// src/app.js

// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'testing 123')
ReactDOM.render(template, document.getElementById('app'))
```

54. Setting up Babel with Webpack
9분
```bash
$ yarn add babel-core@6.25.0 babel-loader@7.1.1
```
```JavaScript
// webpack.config.js

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
```

- create .babelrc on root directory
```json
{
    "presets": [
        "env", 
        "react"
    ]
}
```

```JavaScript
// src/app.js

// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>This is jsx from webpack</p>
ReactDOM.render(template, document.getElementById('app'))
```

55. One Component per File
18분

- Move, import, export

```JavaScript
// src/app.js

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

// Moving the component code
// Setup import/export
// Move the imports that new files (and setup an import here)


// Challenge
// Create the file, copy the code, setup import/export

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
```

56. Source Maps with Webpack
5분

```JavaScript
// webpack.config.js

// entry point -> output
const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map'
};
```

57. Webpack Dev Server
9분

```bash
$ yarn add webpack-dev-server@2.5.1
```
```JavaScript
// webpack.config.js

// entry point -> output
const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
```
- modify "scripts"
```json
// package.json

  "scripts": {
    "serve": "live-server public/",
    "build": "webpack",
    "dev-server": "webpack-dev-server"
  },
```
- turn off yarn run serve, yarn run build
```bash
$ yarn run dev-server
```

58. ES6 class properties
18분

- babel plugin

```bash
$ yarn add bable-plugin-transform-class-properties@6.24.1
```

```json
// .babelrc

{
    "presets": [
        "env", 
        "react"
    ],
    "plugins": [
        "transform-class-properties"
    ]
}
```

```JavaScript

// src/app.js

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting() {
        return `Hi, My name is ${this.name}`
    }
}

const oldSyntax  = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// ---------------------

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi, My name is ${this.name}`
    }
}

const newSyntax = new NewSyntax()
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting())
```

```JavaScript
// AddOptions.js

import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>ADD Option</button>
                </form>
            </div>
        )
    }
}
```

```JavaScript
// IndecisionApp.js

// pull the state out of constructor
// convert all 4 event handler to class properties (arrow functions)
// delete the constructor completely
// start with class properties and end with method


    state = {
        options: []
    }
    handleDeleteOptions = () => {
        this.setState(() =>({ options: [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
```

## Section 7: Using a Third-Party Component
29분

59. Section Intro: Using a Third-Party Component
1분

60. Passing Children to Component
6분

```JavaScript
// app.js
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    )
}

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
)

ReactDOM.render((
    <Layout>
        <div>
            <h1>Page Title</h1>
            <p>This is my page</p>
        </div>
    </Layout>
), document.getElementById('app'))
```

61. Setting up React-Modal
19분

- pop up

```bash
$ yarn add react-modal@2.2.2
```

```JavaScript
// OptionModal.js

import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
)

export default OptionModal;

// !!"test" -> true
// !!undefined -> false

// Create a new event handle in IndecisionApp that clears selectedOption state
// Pass that into OptionModal
// Call it on button click
```
```JavaScript
// src/app.js
    state = {
        options: [],
        selectedOption: undefined
    }
///    
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: false
        }))
    }
///

                <OptionModal 
                    handleClearSelectedOption={this.handleClearSelectedOption}
                    selectedOption={this.state.selectedOption}
                />
```


62. Bonus: Refactoring Other Stateless Functional Components
2분


## Section 8: Styling React
2시간 8분

63. Section Intro: Styling React
1분

64. Setting up Webpack with SCSS
13분

```bash
$ yarn add style-loader@0.18.2 css-loader@0.28.4
```
```JavaScript
// src/app.js
import './styles/styles.css'
```
```css

* {
    color: red;
}

```
```JavaScript
// webpack.config.js

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }]
    },
```
```bash
$ yarn add sass-loader@6.0.6 node-sass@4.5.3
```
```JavaScript
// webpack.config.js
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
```
- webpack-cli
```bash
$ yarn add webpack-cli@3.3.0
```
65. Architecture and Header Styles
15분

```scss
// style.scss

@import './base/base';
@import './components/header';
```

```scss
// styles/base/_base.scss

html {
    font-size: 62.5%;
}
body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
}
```

```scss
// styles/components/_header.scss

.header {
    background: #20222b;
    color: white;
    margin-bottom: 4.8rem;
    padding: 1.6rem 0;
}
// BEM block element modifier
// google BEM
.header__title {
    font-size: 3.2rem;
    margin: 0;
}

.header__subtitle {
    color: #a5afd7;
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0;
}
```

66. Reset That $#!*
5분

```bash
$ yarn add normalize.css@8.0.1
```

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
```
```JavaScript
// webpack.config.js

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },

```
67. Theming with Variables
14분

```scss
// _settings.scss
// Colors
$off-black: #20222b;
$dark-blue: #333745;
$off-white: #a5afd7;

// Spacing
$m-size: 1.6rem;
$l-size: 3.2rem;
$xl-size: 4.8rem;
```
```scss
// _container.scss
.container {
    max-width: 60rem;
    margin: 0 auto;
    padding: 0 $m-size;
}
```
```scss
// styles.scss
@import './base/settings';
@import './base/base';
@import './components/container';
@import './components/header';

```
```scss
// _base.scss
html {
    font-size: 62.5%;
}
body {
    background: $dark-blue;
    font-family: Arial, Helvetica, sans-serif;
    font-size: $m-size;
}
```
```scss
// _header.scss
.header {
    background: $off-black;
    color: white;
    margin-bottom: $xl-size;
    padding: $m-size 0;
}
// BEM block element modifier
// google BEM
.header__title {
    font-size: $l-size;
    margin: 0;
}

.header__subtitle {
    color: $off-white;
    font-size: $m-size;
    font-weight: 500;
    margin: 0;
}
```
```JavaScript
// IndecisionApp.js
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Options 
                        options={this.state.options} 
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption 
                        handleAddOption={this.handleAddOption}
                    />
                </div>
                
                <OptionModal 
                    handleClearSelectedOption={this.handleClearSelectedOption}
                    selectedOption={this.state.selectedOption}
                />
            </div>
        )
```

```JavaScript
// Header.js

import React from 'react'

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
)

Header.defaultProps = {
    title: 'Indecision'
}

export default Header
```

68. Big Button & Options List
15분

```scss
// _button.scss

// Big Button
.big-button {
    background:$purple;
    border: none;
    border-bottom: .6rem solid darken($purple, 10%);
    color: white;
    font-weight: bold;
    font-size: $l-size;
    margin-bottom: $xl-size;
    padding: 2.4rem;
    width: 100%;

}
// search google 'sass reference functions'

.big-button:disabled {
    opacity: .5;
}

// Button
.button {
    background: $purple;
    border: none;
    border-bottom: .3rem solid darken($purple, 10%);
    color: white;
    font-weight: 500;
    padding: $s-size;
}

.button--link {
    background: none;
    border: none;
    color: $off-white;
    padding: 0;
}

// bem
```

69. Styling the Options List
14분

```scss
// _widget.scss

// Widget
.widget {
    background:  $light-blue;
    margin-bottom: $xl-size;
}

.widget__message {
    border-bottom: 1px solid lighten($light-blue, 10%);
    color: $off-white;
    margin: 0;
    padding: $l-size;
    text-align: center;
}

// create a widget element selector (message) - use it on the p tag
// off-white color
// no margin
// l-size padding on all sides
// center the text using - text-align: center;
// set the bottom border to a 1px solid border lighted version of $light-blue 10%

// Widget Header
.widget-header {
    background: $blue;
    color:$off-white;
    display: flex;
    justify-content: space-between;
    padding: $m-size;
}

.widget-header__title {
    margin: 0;
}

// setup an element selector for widget-header
// set margin
// use the class
```

70. Styling Option Item
17분

```scss
// _add-options.scss

// Add Option Error
.add-option-error {
    color: $off-white;
    font-style: italic;
    margin: $m-size 0 0 0;
    padding: 0 $m-size;
}

// Add Option
.add-option {
    display: flex;
    padding: $m-size;
}

.add-option__input {
    background: $dark-blue;
    border: none;
    color: $off-white;
    border-bottom: .3rem solid darken($dark-blue, 10%);
    flex-grow: 1;
    margin-right: $s-size;
    padding: $s-size;
}
```

71. Styling React-Modal
18분

- style modal
- word-break
- transition

```scss
// _modal.scss

.ReactModalPortal > div {
    opacity: 0;
}

.ReactModalPortal .ReactModal__Overlay {
    align-items: center;
    display: flex;
    justify-content: center;
    transition: opacity 200ms ease-in-out;
}

.ReactModalPortal .ReactModal__Overlay--after-open {
    opacity: 1;
}

.ReactModalPortal .ReactModal__Overlay--before-close {
    opacity: 0;
}

.modal {
    background: $light-blue;
    color: white;
    max-width: 30rem;
    outline: none;
    padding: $l-size;
    text-align: center;
}

.modal__title {
    margin: 0 0 $m-size 0;
}

.modal__body {
    font-size: 2rem;
    font-weight: 300;
    margin: 0 0 $l-size 0;
    word-break: break-all;
}
```

72. Mobile Considerations
13분

- meta viewport content width=device-width
```html
<!-- index.html -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Indecision App</title>
    </head>
    <body>
        <div id="app"></div>
        <script src="/bundle.js"></script>
    </body>
</html>
```

- flex-direction
- @media with min/max-width

```scss
// _add-options.scss

// Add Option
.add-option {
    display: flex;
    flex-direction: column;
    padding: $m-size;
}

.add-option__input {
    background: $dark-blue;
    border: none;
    color: $off-white;
    border-bottom: .3rem solid darken($dark-blue, 10%);
    flex-grow: 1;
    margin: 0 0 $s-size 0;
    padding: $s-size;
}

@media (min-width: $desktop-breakpoint) {
    .add-option {
        flex-direction: row;
    }

    .add-option__input {
        margin: 0 $s-size 0 0;
    }
}
```

```scss
// _header.scss

.header {
    background: $off-black;
    color: white;
    margin: 0 0 $m-size 0;
    padding: $m-size 0;
}

@media (min-width: $desktop-breakpoint) {
    .header {
        margin: 0 0 $xl-size 0;
    }
}
```

```scss
// _button.scss

.big-button {
    background:$purple;
    border: none;
    border-bottom: .6rem solid darken($purple, 10%);
    color: white;
    font-weight: bold;
    font-size: $l-size;
    margin: 0 0 $m-size 0;
    padding: 2.4rem;
    width: 100%;

}

@media (min-width: $desktop-breakpoint) {
    .big-button {
        margin: 0 0 $xl-size 0;
    }
}

```
73. Bonus: Favicon
3분

```html
// index.html

        <link rel="icon" type="image/png" href="/images/favicon.png"
```

## Section 9: React-Router
1시간 35분

74. Section Intro: React Router
3분

75. Server vs. Client Routing
5분

76. Setting Up Budget App
7분

77. React-Router 101
20분

- for web (react-router-dom)
- for mobile (react-router-native)


```bash 
$ yarn add react-router-dom@5.1.2
```

- historyApiFallback: true

```JavaScript
// webpack.config.js

// entry point -> output
const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};
```

```JavaScript
// src/app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is Edit Expense component
    </div>
)

const HelpPage = () => (
    <div>
        This is Help page component
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
        </div>
    </BrowserRouter>
);

// /edit EditExpensePage
// /help HelpPage

ReactDOM.render(routes, document.getElementById('app'))
```

- http://localhost:8080/help
- http://localhost:8080/edit
- http://localhost:8080/create
- http://localhost:8080/

78. Setting up a 404
6분

- Switch
- one by one

```JavaScript
// src/app.js
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

```

79. Linking Between Routes
14분

- Link
- NavLink

```JavaScript
// src/app.js

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

// link to home page
// link to the create expense page
// link to the edit page
// linking to the help page

const routes = (
    <BrowserRouter>
        <dev>
            <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage} />
        </Switch>
        </dev>
    </BrowserRouter>
);

```
```scss
// _base.scss

.is-active {
    font-weight: bold;
    
}
```
80. Organizing Our Routes
13분

- create a directory "routers"
- create "AppRouter.js"
- check each file in components directory

```JavaScript

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboard'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import HelpPage from '../components/Help'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'


// Create 6 new files for the 6 components
// setup imports, component, default export
// import into AppRouter so they can be used

const AppRouter = () => (
    <BrowserRouter>
        <dev>
            <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage} />
        </Switch>
        </dev>
    </BrowserRouter>
);

export default AppRouter;
```

```JavaScript
// src/app.js

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<AppRouter />, document.getElementById('app'))

```

81. Query Strings and URL Parameters
9분

- localhost:8080/edit?query=rent&sort=date
- console.log(props) : Object - location - search

- localhost:8080/edit#contact-us
- console.log(props) : Object - location - hash


```JavaScript
// routers/AppRouter.js
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

```

```JavaScript
// components/EditExpensePage.js

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            Editing the expense with id of {props.match.params.id}
        </div>
    )
}
```

- go to localhost:8080/edit/88

82. Build It: Router for Portfolio Site
18분

- portfolio-site!

## Section 10: Redux
3시간

83. Section Intro: Redux
2분

- Data
- State is Not enough 

84. Why Do We Need Something Like Redux?
14분

- Cool

85. Setting up Redux
8분

```bash
$ yarn add redux@4.0.5
```

```JavaScript
// redux-101.js
import { createStore } from 'redux'
const store = createStore((state) => {

})
// same
this.setState((prevState) => {
    return prevState
})
```
```JavaScript
(state = { count : 0 }) // default state
```

```JavaScript
// redux-101.js
import { createStore } from 'redux'

const store = createStore((state = { count : 0 }) => {
    return state
})

console.log(store.getState()) // {count:0}

// NEXT
// Actions
// I'd like to increment the count
// I'd like to reset the count to zero
```

86. Dispatching Actions
13분

```JavaScript
// redux-101.js

import { createStore } from 'redux'

const store = createStore((state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            }
        default: 
            return state
    }

    // if (action.type === 'INCREMENT') {
    //     return {
    //         count: state.count + 1
    //     }
    // } else {
    //     return state
    // }
})

console.log(store.getState())

// Actions - than an object that gets sent to the store

// walk, stop_walking, sit, work, stop_working

// increment, decrement, reset

// I'd like to increment the count
store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'INCREMENT'
})

// RESET - set the count equal to zero
store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENT'
})

// I'd like to reset the count to zero

console.log(store.getState())
```

87. Subscribing and Dynamic Actions
10분

- subscribe
```JavaScript
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
```

- action.incrementBy  
- action.decrementBy  
- action.count   

```JavaScript
// redux-101.js

import { createStore } from 'redux'

const store = createStore((state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default: 
            return state
    }
})

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENT',
})

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
})

store.dispatch({
    type:'SET',
    count: 101
})
```

88. ES6 Object Destructuring
16분

```JavaScript
// playground/destructuring

// const person = {
//     name: 'Maphnew',
//     age: 34,
//     location: {
//         city: 'Ulsan',
//         temp: 12
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city = 'somewhere', temp: temperature} = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }


// Challenge
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
}

const {name:publisherName = 'Self-Published'} = book.publisher
console.log(publisherName)
```

89. ES6 Array Destructuring
11분

```JavaScript
// playground/destructuring

///
/// Array Destructuring
///

// 1. const address = [ '1299 S Junper Street', 'Philadelphia', 'Pennsylvania', '19147' ]
// 2. const address = [ ]
// 3. const address = [ '1299 S Junper Street', 'Philadelphia', 'Pennsylvania', '19147' ] 

// 1. const [street, city, state, zip] = address
// 1. console.log(`You are in ${city} ${state}.`)

// 2. const [, , state = 'New York'] = address
// 2. console.log(`You are in ${state}.`)

// 3. const [, city, state = 'New York'] = address 
// 3. console.log(`You are in ${city} ${state}.`)

// Challange
const item = [ 'Coffee (iced)', '$3.00', '$3.50', '$3.75' ]

// grab first and third items using array destructuring
const [ itemName, , mediumPrice ] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)
```

90. Refactoring and Organizing
17분

```JavaScript
// playground/redux-101.js

import { createStore } from 'redux'

// destructuring
const add = ({ a, b }, c) => {
    return a + b + c
}

console.log(add({a:1, b:12}, 100))

const incrementCount  = ({ incrementBy= 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

// setCount
const setCount = ({ count }) => ({
    type: 'SET',
    count
})

// resetCount
const resetCount = () => ({
    type: 'RESET'
})

const store = createStore((state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default: 
            return state
    }
})

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 101 }))
```

91. Reducers
12분

1. Reducers are pure functions
2. Never change state or action

```JavaScript
// playground/redux-101.js

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default: 
            return state
    }
}

const store = createStore(countReducer)

```
```JavaScript
// playground/redux-expensify.js

import { createStore, combineReducers } from 'redux'

const demoState = {
    expenses: [{
        id: 'dapappadoiqjq',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}


```
92. Working with Multiple Reducers
14분

```JavaScript
// playground/redux-expensify.js

import { createStore, combineReducers } from 'redux'

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPRENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// Filters reducer
// text => '', sortBy => 'date', startDate => undefined, endDate => undefined

const filtersReducerDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

console.log(store.getState())

const demoState = {
    expenses: [{
        id: 'dapappadoiqjq',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}


```

93. ES6 Spread Operator in Reducers
18분

```bash
$ yarn add uuid@7.0.1
```

```JavaScript
// playground/redux-expensify.js

import { createStore, combineReducers } from 'redux'
import { v4 as uuid } from 'uuid'

// ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})


// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPRENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        default:
            return state
    }
}

// Filters reducer
// text => '', sortBy => 'date', startDate => undefined, endDate => undefined

const filtersReducerDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))

store.dispatch(removeExpense({ id: expenseOne.expense.id }))

const demoState = {
    expenses: [{
        id: 'dapappadoiqjq',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}


```

94. Spreading Objects
15분

```JavaScript
console.log({
    ...user 
})
```

- error


- google: babel object spread operator   
- https://babeljs.io/docs/en/6.26.3/babel-plugin-transform-object-rest-spread   

```bash
$ yarn add babel-plugin-transform-object-rest-spread@6.26.0
```

- add to file .babelrc
```json
    "plugins": [
        "transform-class-properties",
        "transform-object-rest-spread"
    ]
}
```

```bash
$ yarn run dev-server
```

- no error   

```JavaScript
// redux-expensify.js

// EDIT_EXPRENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
```
- Apply to filter

```JavaScript

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})


const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}

store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter())

```

95. Wrapping up Our Reducers
10분

```JavaScript
// redux-expensify.js

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
store.dispatch(setEndDate(1250))
```

96. Filtering Redux Data
17분

```JavaScript

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDataMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        // figure out if expenses.description as the text variable string inside of it
        // includes 
        // convert both strings to lower case

        return startDateMatch && endDataMatch && textMatch
    })
}

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))

store.dispatch(setTextFilter('rent'))
// or
store.dispatch(setTextFilter('aaaa'))
// or
store.dispatch(setTextFilter('ffe'))

```

97. Sorting Redux Data
6분

- google: mdn array sort

```JavaScript
// redux-expensify

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDataMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        // figure out if expenses.description as the text variable string inside of it
        // includes 
        // convert both strings to lower case

        return startDateMatch && endDataMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
        // sortBy -> amount
        // put the ones with a greater amount first
    })
}

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))

store.dispatch(sortByAmount()) // amount 
```
## Section 11: React with Redux
3시간 2분

98. Section Intro: Connecting React and Redux
1분

99. Organizing Redux
15분

- Create Directories and files
- actions, reducers, selectors, store

- Edit wabpack.config.js
```JavaScript
// webpack.config.js

        entry: './src/app.js',
```

```JavaScript
// src/app.js

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill' }))
store.dispatch(addExpense({ description: 'Gas bill' }))
// store.dispatch(setTextFilter('bill'))
store.dispatch(setTextFilter('water'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

// addExpense -> Water bill
// addExpense -> Gas bill
// setTextFilter -> bill (2 items) -> water (1 item)
// getVisibleExpenses -> print visible ones to screen


ReactDOM.render(<AppRouter />, document.getElementById('app'))
```

100. The Higher Order Component
16분

```JavaScript
// playground/hoc.js

// Higher Order Components (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};

// requireAuthentication

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please login to view the info</p>
            ) }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));
```

101. Connecting Store and Component with React-Redux
16분

- google: react-redux

```bash
$ yarn add react-redux@7.2.0
```

```JavaScript
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill' }))
store.dispatch(addExpense({ description: 'Gas bill' }))
// store.dispatch(setTextFilter('bill'))
store.dispatch(setTextFilter('water'))

setTimeout(() => {
    store.dispatch(setTextFilter('rent'))
}, 3000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

// 1. Provider Component
const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
```

```JavaScript
// components/ExpenseDashboard.js

import React from 'react';
import ExpenseList from './ExpenseList'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseList />
    </div>
);


export default ExpenseDashboardPage
```

```JavaScript
// components/ExpenseList.js

import React from 'react'
import { connect } from 'react-redux'

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.filters.text}
        {props.expenses.length}
    </div>
)

// 2. Higher Order Component
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList)

```


102. Rendering Individual Expenses
9분


```JavaScript
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas bill' }))
// store.dispatch(setTextFilter('bill'))
store.dispatch(setTextFilter('water'))

setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
}, 3000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
```


```JavaScript
// components/ExpenseList.js

import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)

```

```JavaScript
// components/ExpenseListItem.js

// Export a stateless functional Component
// description, amount, createdAt

import React from 'react'

const ExpenseListItem = ({ description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        
    </div>
)

export default ExpenseListItem
```

103. Controlled Inputs for Filters
14분

- HOC

```JavaScript
// components/ExpenseDashboard.js

import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList />
    </div>
);


export default ExpenseDashboardPage
```

```JavaScript
// components/ExpenseListFilters.js

import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e)=> {
            props.dispatch(setTextFilter(e.target.value))
        }}/>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)
```

```JavaScript
// components/ExpenseListItem.js

import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }))
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem)
```
104. Dropdown for Picking SortBy
9분

```JavaScript
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
```

```JavaScript
// components/ExpenseListFilters.js

import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text} 
            onChange={(e)=> {
                props.dispatch(setTextFilter(e.target.value))
            }}
        />
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === 'date'){
                    props.dispatch(sortByDate())
                } else if(e.target.value === 'amount'){
                    props.dispatch(sortByAmount())
                }
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)
```

105. Creating Expense Add/Edit Form
20분

- Two ways to get the value(e.target.value)
- 1. pull e.target.value off
- 2. e.persist()

```JavaScript

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        // const note = e.target.value
        e.persist()
        this.setState(() => ({ note: e.target.value }))
    }
```


- To match numbers and decimal (1230000.12)   
```JavaScript

    onAmountChange = (e) => {
        const amount = e.target.value
        if ( amount.match(/^\d*(\.\d{0,2})?$/) ) {
            this.setState(() => ({ amount }))
        }
        
    }
```

```JavaScript
// components/ExpenseForm.js

import React from 'react'
// setup note state
// setup onChange and value for textarea
export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: ''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        // const note = e.target.value
        e.persist()
        this.setState(() => ({ note: e.target.value }))
    }
    // regex101.com : ^\d*(\.\d{0,2})?
    onAmountChange = (e) => {
        const amount = e.target.value
        if ( amount.match(/^\d*(\.\d{0,2})?$/) ) {
            this.setState(() => ({ amount }))
        }
        
    }
    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >

                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
```

```JavaScript
// components/AddExpensePage.js

import React from 'react';
import ExpenseForm from './ExpenseForm'

const AddExpensePage = () => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm />
    </div>
);

export default AddExpensePage

```

106. Setting up a Date Picker
22분

- Install moment, date-picker, shallow thing

```bash
$ yarn add moment@2.24.0 react-dates@12.7.0 react-addons-shallow-compare@15.6.2
```
- date-picker reference   
- ref: https://github.com/airbnb/react-dates

```JavaScript
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
```

- options
> isOutsideRange : past days to pick available   

```JavaScript
import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// const date = new Date()
const now = moment()
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calenderFocused: false
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        // const note = e.target.value
        e.persist()
        this.setState(() => ({ note: e.target.value }))
    }
    // regex101.com : ^\d*(\.\d{0,2})?
    onAmountChange = (e) => {
        const amount = e.target.value
        if ( amount.match(/^\d*(\.\d{0,2})?$/) ) {
            this.setState(() => ({ amount }))
        }
        
    }
    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }
    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >

                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
```

107. Wiring up Add Expense
17분

```JavaScript
// components/AddExpensePage.js

import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense))
                props.history.push('/')
            }}
        />
    </div>
);

export default connect()(AddExpensePage)
```

```JavaScript
// components/ExpenseForm.js

import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// const date = new Date()
const now = moment()
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calenderFocused: false,
        error: ''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        // const note = e.target.value
        e.persist()
        this.setState(() => ({ note: e.target.value }))
    }
    // regex101.com : ^\d*(\.\d{0,2})?
    onAmountChange = (e) => {
        const amount = e.target.value
        if ( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/) ) {
            this.setState(() => ({ amount }))
        }
        
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            // Set error state equal to 'Please provide description and amount'
            this.setState(() => ({ error: 'Please provide description and amount.'}))
        } else {
            // Clear the error
            this.setState(() => ({ error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >

                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
```

108. Wiring up Edit Expense
19분

```JavaScript
// components/EditExpensePage.js

import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            <ExpenseForm 
                expense = {props.expense}
                onSubmit = {(expense) => {
                    // Dispatch the action to edit the expense
                    // Redirect to the dashboard
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/')
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }))
                props.history.push('/')
            }}>Remove</button>
        </div>
    )
}
// Remove expense via dispatch and then redirect to dashboard
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage)

```

```JavaScript
// components/ExpenseFrom.js

import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// const date = new Date()
const now = moment()
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount  / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        // const note = e.target.value
        e.persist()
        this.setState(() => ({ note: e.target.value }))
    }
    // regex101.com : ^\d*(\.\d{0,2})?
    onAmountChange = (e) => {
        const amount = e.target.value
        if ( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/) ) {
            this.setState(() => ({ amount }))
        }
        
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            // Set error state equal to 'Please provide description and amount'
            this.setState(() => ({ error: 'Please provide description and amount.'}))
        } else {
            // Clear the error
            this.setState(() => ({ error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >

                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
```

```JavaScript
// components/ExpenseListItem.js

import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        
        <p>{amount} - {createdAt}</p>
        
    </div>
)

export default  ExpenseListItem
```

109. Redux Dev Tools
6분

- google: redux developer tools extension

- take some code to src/store/configureStore.js
```JavaScript
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
```

110. Filtering by Dates
20분

```JavaScript
// ExpenseListFilters.js

import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    render(){
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={(e)=> {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date'){
                            this.props.dispatch(sortByDate())
                        } else if(e.target.value === 'amount'){
                            this.props.dispatch(sortByAmount())
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)
```

- moment

```JavaScript
// reducers/filters.js

const filtersReducerDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}
```


```JavaScript
// selectors/expenses.js

        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDataMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

```

## Section 12: Testing Your Application
4시간 14분

111. Section Intro: Testing React Components
3분

112. Setting up Jest
20분

- Install jest
```bash
$ yarn add jest@20.0.4
```
- Run
```bash
$ yarn run test
```

```JavaScript
// tests/add.test.js
const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7)
});

test('should generate greeting from name', () => {
    const result = generateGreeting('JEN')

    expect(result).toBe('Hello JEN!')
})

test('should generate greeting for no name', () => {
    const result = generateGreeting()
    expect(result).toBe('Hello Anonymous!')
})
```

113. Testing Expenses Action Generators
17분

```JavaScript
// tests/actions/expenses.test.js

import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object' , () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123aaa' ,{ note: 'New note value' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123aaa',
        updates: {
            note: 'New note value'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount:0,
            createdAt:0,
            note:'',
            id: expect.any(String)
        }
    })
})
```

114. Testing Filters Action Generators
11분

```JavaScript
// tests/actions/filters.test.js

import moment from 'moment'
import { 
    setStartDate, 
    setEndDate, 
    setTextFilter,
    sortByDate,
    sortByAmount
} from '../../actions/filters'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate set text filter object with text value', () => {
    const text = 'Something in'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: text
    })
})

test('should generate set text filter object with default', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate action object for sort by date', ()=>{
    expect(sortByDate()).toEqual({ type:'SORT_BY_DATE' })
})

test('should generate action object for sort by amount', ()=>{
    expect(sortByAmount()).toEqual({ type:'SORT_BY_AMOUNT' })
})
```

115. Testing Expenses Selector
17분

```JavaScript
// expenses.test.js

import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

test('should filter by text vlaue', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[2], expenses[1] ])
})

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[2], expenses[0] ])
})

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[0], expenses[1]])
})

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ])
})

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ])
})
```

116. Testing Filters Reducer
14분

```bash
$ yarn run test -- --watch
```

```JavaScript
// tests/reducers/filters.test.js

import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type:'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'This is my filter'
    const action = { 
        type: 'SET_TEXT_FILTER',
        text 
    }
    const state =filtersReducer(undefined, action)
    expect(state.text).toBe(text)
})

test('should set startDate filter', () => {
    const startDate = moment()
    const action = { 
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})

test('should set endDate filter', () => {
    const endDate = moment()
    const action = { 
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})
```

117. Testing Expenses Reducer
15분

- Set fixfures/expenses.js
```JS
import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

```

- test expenses reducer
- redux @@INIT

```JS
// tests/reducers/expenses.test.js
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, {
        type: '@@INIT'
    });
    expect(state).toEqual([])
});

test('should remove expenses by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '100',
        description: 'Desk',
        note: '',
        amount: 123500,
        createdAt: moment(0).subtract(4, 'days')
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        expense
    ])
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {
            description: 'Bike'
        }
    };
    const state = expensesReducer(expenses, action)
    expect(state[1].description).toBe('Bike')
})

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '0000',
        updates: {
            amount: 9999
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})
```
118. Snapshot Testing
12분

- Install react-test-renderer
```shell
> yarn add react-test-renderer
```
- components/Header.test.js
```JS
// expensify-app/src/tests/components/Header.test.js

import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    console.log(renderer.getRenderOutput())
    expect(renderer.getRenderOutput()).toMatchSnapshot();
}) 
```
- expensify-app/src/tests/components/__snapshots__/Header.test.js.snap
```JS
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`should render header correctly 1`] = `
<header>
  <h1>
    Expensify
  </h1>
  <NavLink
    activeClassName="is-active"
    ariaCurrent="true"
    exact={true}
    to="/"
  >
    Dashboard
  </NavLink>
  <NavLink
    activeClassName="is-active"
    ariaCurrent="true"
    to="/create"
  >
    Create Expense
  </NavLink>
  <NavLink
    activeClassName="is-active"
    ariaCurrent="true"
    to="/help"
  >
    Help
  </NavLink>
</header>
`;
```

119. Enzyme
22분

- enzyme@3.0.0 for adapter
- enzyme-adapter-react-16@1.0.0 allows us to specify exactly which version of react we want to test against. And allows the core enzyme library to be a whole lot smaller.
- raf@3.3.2 - a polyfill for a browser feature known as request animation frame. Short for request animation frame.

```shell
> yarn add enzyme@3.0.0 enzyme-adapter-react-16@1.0.0 raf@3.3.2
```

- create a config file
- go to airbnb.io/enzyme/
```JS
// /tests/setupTests.js

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});
```

- go to jest, configuring jest - setupFiles [array]
```json
// /jest.config.json

{
    "setupFiles": [
        "raf/polyfill",
        "<rootDir>/src/tests/setupTests.js"
    ]
}
```
- change "test" script
```json
// package.json

"scripts": {
    "serve": "live-server public/",
    "build": "webpack",
    "dev-server": "webpack-dev-server",
    "test": "jest --config=jest.config.json"
  },
```
- go to airbnb/enzyme github - http://airbnb.io/enzyme/

```JS
// tests/components/Header.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render header correctly', () => {
    const wrapper = shallow(<Header />);
    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
});
```

- install enzyme-to-json@3.0.1
```shell
> yarn add enzyme-to-json@3.0.1
```
```JS
// tests/components/Header.test.js
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

test('should render header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
```

120. Snapshot Testing with Dynamic Components
16분

```JS
// ExpenseList.test.js

import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
```

```JS
// ExpenseListItem.test.js

import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with expenses', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
```
- ExpenseDashboardPage, NotFoundPage
```JS
// Dashboard.test.js
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashboardPage from '../../components/Dashboard';

test('should render dashboard page', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
```
```JS
// NotFound.test.js
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NotFoundPage from '../../components/NotFound';

test('should render not found page correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
```

121. Mocking Libraries with Jest
12분
- Test for ExpenseForm.test.js
```JS
// ExpenseForm.test.js

import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm.js';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render ExpenseForm with expense data correctly', () => {
    const wrapper = shallow(<ExpenseForm expenses={expenses[2]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
```
- Create a directory __mocks__ and moment.js
```JS
// __mocks__/moment.js
const moment = jest.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
}
```
- And Test

122. Testing User Interaction
17분
- simulate
```JS
// ExpenseForm.test.js
// ...


test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {  }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea change', () => {
    const value = 'New text value';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        persist: () => {  },
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);

});

test('should set amount if valid input', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    
    expect(wrapper.state('amount')).toBe('');
})

```

123. Test Spies
18분

```JS
// ExpenseForm.test.js
// ...
test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper =  shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {  }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />); 
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocused')).toBe(focused);
})
```

124. Testing AddExpensePage
15분
- mapDispatchToProps
```JS
// Add.js

import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.onSubmit(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
```
- beforeEach
```JS
// Add.test.js

import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import {AddExpensePage} from '../../components/Add';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
});

test('should render AddExpensePage correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
})
```
125. Testing EditExpensePage
19분

126. Testing ExpenseListFilters
15분

127. Testing ExpenseListFilters: Part II
12분


## Section 13: Deploying Your Apps
2시간 44분
## Section 14: Firebase 101
1시간 58분
## Section 15: Firebase with Redux
2시간 6분
## Section 16: Firebase Authentication
1시간 52분
## Section 17: Styling Budget App
2시간 4분
## Section 18: What Now?
28분
## Section 19: [New!] Hooks, Context, Fragments, and More
2시간 48분