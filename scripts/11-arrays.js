// let i = 5;
// while(i >= 0){
//     console.log(i);
//     i --;
// }


// function addOne(array){
//     let newArray = [];
//     for (let i = 0; i < array.length; i++){
//         let x = array[i] + 1;
//         newArray.push(x);
//     }
//     console.log(newArray)
// }

// addOne([-2,-1,0,99])


// function addNum(array, array2){
//     let addition = [];
//     for (let i = 0; i < array.length; i++){
//         addition.push(array[i] + array2[i])
//     }
//     console.log(addition);
// }

// addNum([1,2,3],[4,5,6])


// function countPositive(nums){
//     let x = 0;
//     for(let i=0; i < nums.length; i++){
//         if (nums[i]>0){
//             x ++
//         }
//     }
//     console.log(x)
// }

// countPositive([5,3,-4,0,10])


// function minMax(nums){
//     let number = {
//         min : null,
//         max : null,

//     };
//     for (let i=0; i < nums.length; i++){
//         const value = nums[i];

//         if (number.min === null || value < number.min) {
//             number.min = value;
//           }

//         if (number.max === null || value > number.max) {
//             number.max = value;
//         }
//     }
//     console.log(`Min: ${number.min}, Max: ${number.max}`);
//     // console.log(`min: ${number.min}, max: ${number.max}`)
// }


// minMax([1]);

// function countWords(words) {
//     const result = {};

//     for (let i = 0; i < words.length; i++) {
//       const word = words[i];

//       if (!result[word]) {
//         result[word] = 1;
//       } else {
//         result[word]++;
//       }
//     }

//     return result;
//   }

//   console.log(countWords(['apple', 'grape', 'apple', 'apple','dell','dell']));



// function findIndex(array, word){
//     let x = -1;
//     for (let i=0 ; i < array.length; i++){
//         if (array[i] === word){
//             x= i;
//             break;
//         }
//     }
//     console.log(x)
// }

// findIndex(['apple', 'grape','zak'],'yellow');


// function removeEgg(foods){
//     let result = [];
//     let x = 0;
//     for(let i = 0; i < foods.length; i++){
//         if(foods.reverse()[i] === 'egg' && x < 2){
//             x++
//             continue;
//         }
//         console.log(foods[i])
       
//         result.push(foods.reverse()[i]);
//     }

//     // console.log(foods.reverse()[0])

//     return result;
    
// }


// function removeEgg(foods) {
//     // To remove the last 2 'egg', reverse the array first.
//     const reversedFoods = foods.slice().reverse();

//     const result = [];
//     let eggsRemoved = 0;

//     for (let i = 0; i < reversedFoods.length; i++) {
//       if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
//         eggsRemoved++;
//         continue;
//       }

//       result.push(reversedFoods[i]);
//     }

//     // At the end, remember to .reverse() back the result.
//     console.log(foods)
//     return result.reverse();
//   }

//   console.log(removeEgg(['egg','egg','pasta','egg','egg','pizza','apple','egg']))



// for(let i=1; i<=20; i++){
//   if (i % 3 === 0 && i % 5 === 0){
//     console.log('FizzBuzz');
//     continue;
//   } else if(i % 3 === 0){
//     console.log('Fizz');
//     continue;
//   } else if (i % 5 === 0 ){
//     console.log('Buzz');
//     continue;
//   } else {
//     console.log(i)
//   }
// }



// function findIndex(array1, word){
//     for (let i=0 ; i < array1.length; i++){
//         if (array1[i] === word){
//             return i;
//           }
//       }
//       return -1;
// }
// findIndex(['zak', 'yellow','zak'], 'zak')

// function unique(array){
//   const result = [];

//   for (let i = 0 ; i < array.length; i++){

//     if (findIndex(array,array[i]) === i){
//       result.push(array[i]);
//     }

//   }

//   return result;
// }
// console.log(unique(['zak','zak','zak','dell']));



 // When loading the page, load from localStorage.
const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();

        // Whenever we update the todo list, save in localStorage.
        saveToStorage();
      " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });

  inputElement.value = '';
  dateInputElement.value = ''

  renderTodoList();

  // Whenever we update the todo list, save in localStorage.
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}