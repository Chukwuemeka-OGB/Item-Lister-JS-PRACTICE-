const form = document.getElementById('form');
const List = document.querySelector('.list');
const filter = document.getElementById('filter');
//Adding List Element
form.addEventListener('submit', addItem);

//Removing List Element
List.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    //Get input value
    const newItem = document.getElementById('inputItem').value;
    //create new li element

   
    
    //addTextnode with input value
    if(newItem == ''){
        console.log('No value entered');
    }else{
        let li = document.createElement('li');
        li.className = 'list-item';
        li.appendChild(document.createTextNode(newItem));
        //create delete button element
    
        const delButton = document.createElement('i');
        delButton.className = 'bx bxs-trash del'; //Assign className 
        li.appendChild(delButton); //adding delbtn to li
    
        List.appendChild(li); //adding li to List
    }

}



function removeItem(e){
    if(e.target.classList.contains('del')){
        if(confirm('Are you sure?')){
            let liElement = e.target.parentElement;
            List.removeChild(liElement);
        }
    }
}


//filter items

function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //getting list
    const items = List.querySelectorAll('li');
    //looping through
    items.forEach((item)=>{
        //GETS US THE FIRST child of each list item (which is the text)
        const itemName = item.firstChild.textContent; 
        console.log(itemName.toLowerCase().indexOf(text));
         
        //testing to see if they match 
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';  //if match display
        } else{
            item.style.display = 'none'; //no match; no display
        }
    })


}