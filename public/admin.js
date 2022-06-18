async function admin(){
// tretrieve a list of books from server
const bookListResponse = await fetch ( 'http://localhost.3001/listBooks');
const bookList = await bookListResponse.json();

// display list of book titles to admin
// place text input next to each book title
// give each text input a value, the quanitity of each book
//place submit button next to each text input
// when submit button clicked, retrieve quantity from text input, update server

const ul = document.createElement('ul');

bookList.forEach(book => {
    const li = document.createElement('li')
    li.textContent = book.title;

    ul.append(li);

});

const root = document.querySelector('#root');
root.append(ul);


}

admin();