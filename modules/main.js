const container = document.querySelector('#books-container');
const showCurrentTime = document.querySelector('.current-time');


const displaybooks =(booksArray) => {
    container.innerHTML = '';
    for (let i = 0; i < booksArray.length; i += 1) {
    const maindiv = document.createElement('div');
    if (i % 2 === 0) {
        maindiv.classList.add('gray');
    }

    const p = document.createElement('p');
    const removeButton = document.createElement('button');
    removeButton.addEventListener('click', () => remove(i));

    p.innerHTML = `"${booksArray[i].title}" "${booksArray[i].author}"`;
    removeButton.innerHTML = 'remove';

    maindiv.appendChild(p);
    maindiv.appendChild(removeButton);
    container.appendChild(maindiv);
    }
}

const setLocalStorage =(arrayBooks)=> {
    localStorage.setItem('formInputs', JSON.stringify(arrayBooks));
}

const getLocalStorage=()=> {
    if (localStorage.getItem('formInputs') !== null) {
    return JSON.parse(localStorage.getItem('formInputs'));
    } else {
    return [];
    }
    
}

const displayDateTime = () => {
    const time = new Date();
    const myTime = time.toUTCString();
    showCurrentTime.textContent = myTime;
  };
  displayDateTime();

export {displaybooks, getLocalStorage, setLocalStorage, displayDateTime};