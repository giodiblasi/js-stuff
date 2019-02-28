
const user = name => {

    const userName = name;
    const sayHello = () => 'Hy!';
    return {
        getName: () => `${sayHello()} I'm ${userName}`
    }
}

module.exports = { user }
