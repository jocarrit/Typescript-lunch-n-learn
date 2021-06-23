
// Interfaces

interface Song {
    artistName: string
    songName: string
    writter?: string
}

const song: Song = {artistName: 'Iron Maiden', songName: 'Aces High'}

interface Person {
    firstName: string 
    lastName: string 
    middleName: string
}

function greeter(person:Person) :string {
    return 'Hello ' + person.firstName
}

// Types aliasses

type Animal = {
    name: string
}



// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces