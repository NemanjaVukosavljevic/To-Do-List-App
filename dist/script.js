const weekday = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
const notesObjectArray = [];
let cardTicker = 0;

const heroDiv = document.createElement(`div`);
heroDiv.className = ` min-h-[100vh] lg:pt-10`

// BUTTON

const addButton = document.createElement(`button`);
addButton.type = `button`;
addButton.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 z-10 w-[5rem] h-[5rem] text-4xl font-semibold bg-yellow-500 hover:bg-black hover:text-yellow-500 transition-colors duration-200 rounded-full';
addButton.innerText = `+`;



// MODAL

const modalHero = document.createElement(`div`);
modalHero.className = `hidden flex flex-col justify-center items-start p-10 opacity-1 transition-all ease-in duration-[1s] absolute top-0 left-0 right-0 bottom-0 z-[15] bg-white h-screen w-screen`

    const topicTitle = document.createElement(`h1`);
    topicTitle.className = `text-3xl mb-3 font-bold`
    topicTitle.textContent = `Choose a topic`;

    const inputTitle = document.createElement(`textarea`);
    inputTitle.type = `text`;
    inputTitle.placeholder = `Choose a topic`;
    inputTitle.className = `w-full resize-y mb-3 border-2 pl-3 pt-3 pr-3 border-gray-600 rounded-md h-[7%] nax-w-[100%]`;
    inputTitle.maxLength = `40`;
    inputTitle.id = `modalTitleInput`;

    const noteTitle = document.createElement(`h1`);
    noteTitle.className = `text-3xl mb-3 font-bold`
    noteTitle.textContent = `Type your note`;

    const noteInput = document.createElement(`textarea`);
    noteInput.type = `text`;
    noteInput.placeholder = `Your note`;
    noteInput.className = `w-full resize-y border-2 mb-3 pl-3 pt-3 pr-3 border-gray-600 rounded-md h-[45%] nax-w-[100%]`;
    noteInput.id = `noteInputField`

    // MODAL BUTTONS 
    const modalButtonsDiv = document.createElement(`div`);
    modalButtonsDiv.className = ` w-full flex flex-row gap-2`
    for (let i = 0; i < 2; i++){
        const createdButton = document.createElement(`button`);
        if (i == 0){
            createdButton.className = `modalActionButton w-[50%] bg-blue-400 text-white text-xl transition-all duration-150 hover:text-2xl h-[5rem]`;
            createdButton.innerText = `Back`;
            
            modalButtonsDiv.append(createdButton);
        } else if (i == 1){
            createdButton.className = `modalActionButton w-[50%] bg-green-400 text-white text-xl transition-all duration-150 hover:text-2xl h-[5rem]`;
            createdButton.innerText = `Submit`;
            
            modalButtonsDiv.append(createdButton);
        }

    }

    

    modalButtonsDiv.addEventListener(`click`, (event) => {
        const button = event.target.closest(`.modalActionButton`);

        if (button.innerText == `Back`){
            let modalTitleInputField = document.getElementById(`modalTitleInput`);
            let modalNoteGeneral = document.getElementById(`noteInputField`);

            heroDiv.classList.remove(`hidden`);

            modalTitleInputField.value = ``;
            modalNoteGeneral.value = ``;

            modalHero.classList.add(`hidden`);
        } else if (button.innerText == `Submit`){
            if (noteInput.value == `` || inputTitle.value == ``){
                alert(`Please fill out all fields!`)
            } else {
                let modalTitleInputField = document.getElementById(`modalTitleInput`);
                let modalNoteGeneral = document.getElementById(`noteInputField`);
                
                

                const taskCard = document.createElement(`div`);
                taskCard.className = `noteCard lg:w-[20%] flex flex-row h-auto mb-4 items-center w-full`;
        
                    const taskImageDiv = document.createElement(`div`);
                    taskImageDiv.className = `flex justify-center items-center pl-5 h-full `
        
                        const taskBubble = document.createElement(`span`);
                        if (cardTicker == 0){
                            taskBubble.className = `flex justify-center items-center h-[2rem] w-[2rem] bg-red-500 rounded-full`;
                        } else if (cardTicker == 1){
                            taskBubble.className = `flex justify-center items-center h-[2rem] w-[2rem] bg-blue-500 rounded-full`;
                        } else if (cardTicker == 2){
                            taskBubble.className = `flex justify-center items-center h-[2rem] w-[2rem] bg-green-500 rounded-full`;
                        } else if (cardTicker == 3){
                            taskBubble.className = `flex justify-center items-center h-[2rem] w-[2rem] bg-yellow-500 rounded-full`;
                        }
                        
        
                    const taskDescriptionDiv = document.createElement(`div`);
                    taskDescriptionDiv.className = `descReal flex flex-col w-full h-full p-2`;
        
                        const taskTitle = document.createElement(`h1`);
                        taskTitle.className = `titleReal text-blue-500 pl-5`;
                        
                        let note = {
                            title: null,
                            actualNote: null,
                        }

                        if (modalTitleInputField.value.length < 27){
                            note.title = modalTitleInputField.value;
                            taskTitle.innerText = modalTitleInputField.value;
                        } else if (modalTitleInputField.value.length > 27) {
                            note.title = modalTitleInputField.value;
                            let shorterValue = modalTitleInputField.value.slice(0, 27);
                            taskTitle.innerText = `${shorterValue}...`;
                        }

                        const taskDetails = document.createElement(`p`);
                        taskDetails.className = `h-full pl-5`
                        

                        if (modalNoteGeneral.value.length < 27){
                            note.actualNote = modalNoteGeneral.value;
                            taskDetails.innerText = modalNoteGeneral.value;
                        } else if (modalNoteGeneral.value.length > 27) {
                            note.actualNote = modalNoteGeneral.value;
                            let shorterValue = modalNoteGeneral.value.slice(0, 27);
                            taskDetails.innerText = `${shorterValue}...`;
                            console.log(note);
                        }

                        

                        console.log(cardTicker);

                        notesObjectArray.push(note);
                        console.log(notesObjectArray);

                        event.stopPropagation();

                        
        
                tasksDiv.append(taskCard);
                    taskCard.append(taskImageDiv);
                        taskImageDiv.append(taskBubble);
                    taskCard.append(taskDescriptionDiv);
                        taskDescriptionDiv.append(taskTitle);
                        taskDescriptionDiv.append(taskDetails);    
                }

                
            }

        cardTicker++

        if (cardTicker >= 4){
            cardTicker = 0;
        }
    });

    

const topDiv = document.createElement(`div`);
topDiv.className = `h-[30%] w-full flex flex-col justify-center items-center`;

    const topDivLogo = document.createElement(`img`);
    topDivLogo.className = `w-[70px] mb-3`;
    topDivLogo.src = `../images/to-do-list.png`;

    const titleTopDiv = document.createElement(`h1`);
    titleTopDiv.className = `mb-3 text-3xl text-black font-bold`
    titleTopDiv.textContent = `MY DAY`;

    const titleDateDisplay = document.createElement(`p`);
    titleDateDisplay.className = `mb-3 text-xl text-black font-semibold`;

    let date = new Date();
    let day = date.getDay();
    let dayOfMonth = date.getDate();
    
    
    titleDateDisplay.innerText = `${weekday[day]}, ${dayOfMonth}`;

    // TASKS

    const tasksDiv = document.createElement(`div`);
    tasksDiv.className = `flex flex-col justify-start items-center h-[70%]`;

    tasksDiv.addEventListener(`click`, (event) => {
        let card = event.target.closest(`.noteCard`);
        let title = event.target.closest(`.titleReal`);
        let description = event.target.closest(`.descReal`);
        if (card && title && description){
            notesObjectArray.forEach(element => {
                if (element.title.includes(title.textContent)){
                    inputTitle.value = element.title; // Use value instead of textContent
                    noteInput.value = element.actualNote; // Use = instead of ==
                }
            });
            
            modalHero.classList.remove(`hidden`);
        }
    });

       

addButton.addEventListener(`click`, () => {
    modalHero.classList.remove(`hidden`);
    modalHero.classList.remove(`opacity-0`);
    heroDiv.classList.add(`hidden`);
    modalHero.classList.add(`opacity-100`);
});

document.body.append(heroDiv);
    heroDiv.append(topDiv);
        topDiv.append(topDivLogo);
        topDiv.append(titleTopDiv);
        topDiv.append(titleDateDisplay)
    heroDiv.append(tasksDiv);
document.body.append(addButton);
document.body.append(modalHero);
    modalHero.append(topicTitle);
    modalHero.append(inputTitle);
    modalHero.append(noteTitle);
    modalHero.append(noteInput);
    modalHero.append(modalButtonsDiv);

