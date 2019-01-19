//export {getResourceById}

const someResources = [{id:1, content: "resource1"}, {id:3, content: "resource2"}];

export function getResourceById(id) {
    return someResources.find(resource => resource.id === id);
}
