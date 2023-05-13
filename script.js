const newListButton = document.getElementById("add-list-button");
const list = document.getElementById("lists-list");
const deleteButtons = document.querySelectorAll(".delete-button");



window.addEventListener('load', function() {
  let listItemData = JSON.parse(localStorage.getItem('listItemData'));
  if (listItemData) {
    for (let i = 0; i < listItemData.length; i++) {
      const newListItem = document.createElement("li");
      const newListButtonContainer = document.createElement("div");
      newListButtonContainer.classList.add('list-button-container');
      newListItem.appendChild(newListButtonContainer);

      const newDeleteButton = document.createElement("button");
      newDeleteButton.classList.add('delete-button');
      newDeleteButton.textContent = "x";
      const newButtonItem = document.createElement("button");
      newButtonItem.textContent = listItemData[i];
      newListButtonContainer.append(newButtonItem, newDeleteButton);

      list.appendChild(newListItem);
    }
  }
});


function creatingNewListOfTasks(){
  const newListOfTasks = document.createElement("li");
  const newButtonsContainer = document.createElement("div");
  newButtonsContainer.classList.add('list-button-container');
  newListOfTasks.appendChild(newButtonsContainer);
  const newDeleteButton = document.createElement("button")
  newDeleteButton.classList.add('delete-button');
  newDeleteButton.textContent = "x";
  const newNameButton = document.createElement("button");
  newListButtonContainer.append(newNameButton, newDeleteButton);

  return newListOfTasks;
}

function addNewListItem() {
  const newListOfTasks = creatingNewListOfTasks();

  const lastListItem = list.children[list.children.length - 1];
  const secondLastListItem = list.children[list.children.length - 2];

  if (secondLastListItem) {
    const secondLastButton = secondLastListItem.querySelector('button');
    const secondLastButtonTitle = secondLastButton.textContent;
    const lastCharacter = secondLastButtonTitle.charAt(secondLastButtonTitle.length - 1);
    if (!isNaN(lastCharacter)) {
      let lastInt = parseInt(lastCharacter);
      const newInt = lastInt + 1;
      newButtonItem.textContent = "List" + newInt;
    } else {
      newButtonItem.textContent = "List1";
    }
  } else {
    newButtonItem.textContent = "List1";
  }
  list.insertBefore(newListItem, lastListItem);
}
    // let listItemData = JSON.parse(localStorage.getItem('listItemData'));
    // if (listItemData) {
    //   listItemData.push(newButtonItem.textContent);
    // } else {
    //   listItemData = [newButtonItem.textContent];
    // }
    // localStorage.setItem('listItemData', JSON.stringify(listItemData)); 
// }


function deleteSomething(){
    deleteButtons.forEach((button) =>{
        button.addEventListener('click', ()=>{
            const listItem = button.parentElement.parentElement;
            listItem.remove();
        });
    });
}

newListButton.addEventListener('click', addNewListItem);
deleteSomething();
