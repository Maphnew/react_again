// OBJECT

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName)


// ARRAY


const item = ['Coffee (hot)', '$2.00', '$2.40', '$3.00']
const [menu, small, medium, large] = item

console.log(`A medium ${menu} costs ${medium}`)