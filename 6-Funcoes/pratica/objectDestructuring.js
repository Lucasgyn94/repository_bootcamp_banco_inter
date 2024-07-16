const user = {
    id: 27,
    displayName: 'Luc',
    fullName: {
        firstName: 'Lucas',
        lastName: 'Ferreira da Silva'
    }
};

function userId({id})
{
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}})
{
    return `${first} ${last}`
}

console.log(userId(user));
console.log(getFullName(user));