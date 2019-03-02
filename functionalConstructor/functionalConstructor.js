const user = (name, vault) => {
    const userName = name;
    const sayHello = () => 'Hi!';
    
    vault = vault || {};
    vault.sayHello = sayHello;

    return {
        getName: () => `${sayHello()} I'm ${userName}`
    }
}

const superman = name=>{
    var vault = {};
    var man = user(name, vault);
    return {...man, fly: () => `${vault.sayHello()} I can fly!!!`};
}

module.exports = { user, superman }
