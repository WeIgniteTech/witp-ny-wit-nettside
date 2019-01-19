export function greetings(name) {
    return `Hello ${name}!`;
}

export function sayHello(name) {
    console.log("Say Hello to " + name);
    document.getElementById('say-hello').innerHTML=greetings(name);
    return true;
}
