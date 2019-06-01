const makeUser = (name, age) => (f) => f(name, age);
const getAge = (user) => user((_, age)=> age);
const getName = (user) => user((name)=> name);
const setAge = (user, age) => makeUser(getName(user), age);
const incAge = (user, age) => makeUser(getName(user), getAge(user)+1);

module.exports = { makeUser, getAge, setAge, incAge , getName }

