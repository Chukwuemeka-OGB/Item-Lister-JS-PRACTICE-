//Examine document object
//console.dir(document);


// const items = document.querySelectorAll('.list-item');
// items[2].innerText = 'stuff';


// for(let i=0; i<items.length; i++){
//     items[i].style.color = 'red';
// }
// const odd = document.querySelectorAll('.list-item:nth-child(odd)');
// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'lightgray';
// }
// const even = document.querySelectorAll('.list-item:nth-child(even)');
// for(let i=0; i<even.length; i++){
//     even[i].style.backgroundColor = 'darkgray';
// }
// let input = document.querySelector('input');


//TRANSVERSING THE DOM
// let itemList = document.querySelector('.list');

// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.parentNode.style.backgroundColor = '#f4f4f4';

// //parentNode
// console.log(itemList.parentNode);
// itemList.parentElement.parentElement.style.backgroundColor = '#f4f4f4';

// //childNodes
// console.log(itemList.children[2]);
// console.log(itemList.firstElementChild)

//console.log(itemList.previousElementSibling);

//Creating dom elements

// let newDiv = document.createElement('div ');
// newDiv.className = 'hello';
// newDiv.id = 'hello1';

// //
// let newDivText = document.createTextNode('I am a guru');
// newDiv.appendChild(newDivText);

// let formContent = document.querySelector('.form-content');
// let h3 = document.querySelector('.title');

// formContent.insertBefore(newDiv, h3);


// console.log(newDiv.textContent);

//EVENT LISTENERS
// const button = document.querySelector('.click').addEventListener('click', runEvent);
const box = document.getElementById('box');
const output = document.querySelector('.output');
box.addEventListener('mousemove', runEvent);



//const form = document.querySelector('form');
const ItemInput = document.querySelector('input[type="text"]');
 //ItemInput.addEventListener('keypress', runEvent);



function runEvent(e){
    
     console.log("Event type: " + e.type);
    //  console.log(e.target.value);
    //  output.innerHTML = '<h3>'+e.target.value+'</h3>'
     // output.innerHTML = '<h3>'+e.target.value+'</h3>'

      output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3></h3>MouseY: '+
      e.offsetY+'</h3>';
    box.style.backgroundColor = "rgb("+e.offsetX+"," +e.offsetY+",40)";
}


