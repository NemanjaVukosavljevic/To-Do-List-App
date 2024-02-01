const addButton = document.getElementById('button');
const itemsContainer = document.getElementById('itemsContainer');
const inputField = document.getElementById('inputField');

addButton.addEventListener('click', function(){
    if (!inputField.value){
        alert("Unesite neku vrednost!")
    } else {
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.style.maxWidth = `100%`
    paragraph.style.height = `auto`
    paragraph.innerText = inputField.value;

    
    const editIcon = document.createElement('img');
    editIcon.src = 'edit.png'; 
    editIcon.classList.add('icon');
    paragraph.appendChild(editIcon);


    itemsContainer.appendChild(paragraph);
    inputField.value = "";

    editIcon.addEventListener('click', function(){
        paragraph.contentEditable = true;
        paragraph.focus();
    });


    paragraph.addEventListener('dblclick', function(){
        itemsContainer.removeChild(paragraph);
    });
    }
});








