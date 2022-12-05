const bookTitle = document.querySelector('#title');
const author = document.querySelector('#author');
const submitButton = document.querySelector('#submit');
const form = document.querySelector('form');
const contact = document.querySelector('#contact');
const booksList = document.querySelector('#books-list');


import { displaybooks, getLocalStorage, setLocalStorage, displayDateTime } from "./modules/main.js";

let booksArray = [];

setLocalStorage(booksArray);
booksArray = getLocalStorage();
displaybooks(booksArray);
displayDateTime();

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (bookTitle.value.trim() !== '' && author.value.trim() !== '') {
    const list = {
      title: bookTitle.value,
      author: author.value,
    };
    booksArray.push(list);
    
    setLocalStorage(booksArray);
    booksArray = getLocalStorage();
    displaybooks(booksArray);
    
  }
});

const navigation = document.querySelectorAll('.nav-link');
navigation.forEach((nav)=>{
    nav.addEventListener('click', ()=>{
        showContent(nav);
    })
})

// eslint-disable-next-line no-unused-vars
function showContent(id) {
  document.querySelectorAll('header ul li').forEach((ele) => ele.classList.remove('active'));
  id.classList.add('active');
  switch (id.getAttribute('data-link')) {
    case 'list':
      booksList.style.display = 'block';
      form.style.display = 'none';
      contact.style.display = 'none';
      break;
    case 'add-new':
      booksList.style.display = 'none';
      form.style.display = 'flex';
      contact.style.display = 'none';
      break;
    case 'contact':
      booksList.style.display = 'none';
      form.style.display = 'none';
      contact.style.display = 'block';
      break;
    default:
      booksList.style.display = 'block';
      form.style.display = 'none';
      contact.style.display = 'none';
  }
}