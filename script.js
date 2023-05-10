const newListButton = document.getElementById("add-list-button");
const list = document.getElementById("lists-list");
const deleteButton = document.getElementsByClassName("delete-button")

function addNewList(){
    newListButton.addEventListener('click', ()=>{
        const newButtonItem = document.createElement("button");
        const newListItem = document.createElement("li");
        
        newButtonItem.classList.add("transparent");
        newListItem.appendChild(newButtonItem);

        const lastItem = list.children[list.children.length - 1];
        const secondLastItem = list.children[list.children.length - 2];
        const secondLastItemText = secondLastItem.textContent;
        const lastCharacter = secondLastItemText.charAt(secondLastItemText.length - 1);

        if (!isNaN(lastCharacter)) {
            let lastInt = parseInt(lastCharacter);
            const newInt = lastInt + 1;
            newButtonItem.textContent = "List" + newInt;
        }
        else {
            newButtonItem.textContent = "List1";
        }
        list.insertBefore(newListItem, lastItem);
    })
}

function deleteSomething(){
    deleteButtons.foreach(button =>{
        button.addEventListener('click', ()=>{
            
        })
    })
}


addNewList();