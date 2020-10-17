# react_again
Learn React from Udemy


### 12. Conditional Rendering in JSX
```shell
> live-server public
> babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```
- Conditional Rendering in JSX
1. if statements
```JS
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
2. ternary operators
```JS
true ? 'Maphnew' : 'Anonymous'
"Maphnew"

false ? 'Maphnew' : 'Anonymous'
"Anonymous"
```
3. logical and operator
```JS
true && 'Some age'
"Some age"

false && 'Some age'
false
```
```JS
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
```