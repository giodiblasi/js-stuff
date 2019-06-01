# Procedural Data Representation

Some experiment based on Procdural Data Representation inspried by SICP book

This experiment shows how it is possibile to handle data as procedures

## Definition
Here an example to represent an user with the following attributes:
+ name
+ data

```js
//constructor
const makeUser = (name, age) => (f) => f(name, age);

//getter methods
const getAge = (user) => user((_, age) => age);
const getName = (user) => user(name => name);

//setter methods
const setAge = (user, age) => makeUser(getName(user), age);
const incAge = (user, age) => makeUser(getName(user), getAge(user)+1);
```

The constructor take the name and age and return a function that allows to apply 
any functions to attributes.
Getter and setter methods are implemented with this aspect in mind

## Usages

Here an example of usage:

```js
const user = require('../proceduralData.js');
const myUser = user.makeUser('billy', 23);
const newUser = user.incAge(myUser);

console.log(user.getName(newUser), user.getAge(newUser)) // 'billy', 24
```

## Considerations

Pros:
+ This approach guarantees the data immutability (each setter make a new user)

Cons:
+ Most of getter and setter methods have to change on adding or removing an attributes

