// const add = function(){
//     console.log(2+3);
// };

// add();
// add();

// function runTwice(fun){
//     fun();
//     fun();
// }

// runTwice(function(){
//     console.log('12b');
// });

// runTwice(add);





// function btnChanger(){
//     document.querySelector('.js-finish-button')
//         .innerHTML = 'Loading...';
//     setTimeout(function(){
//         document.querySelector('.js-finish-button')
//         .innerHTML = 'Finished!';
//     }, 1000);
// }



// let isAdded = false;
// let timeoutId;
// function addToCart(){
//     // const addBtn = document.querySelector('.desc');
//     // if (!isAdded){
//     //     addBtn.innerHTML = 'Added';
//     //     isAdded = true
//     // } else{
//     //     setTimeout(function(){
//     //         addBtn.innerHTML = '';
//     //     }, 2000);
//     //     isAdded = false;
//     // }


//       const messageElement = document.querySelector('.desc');
//       messageElement.innerHTML = 'Added';

//       // First, cancel the previous timeout so that
//       // it doesn't remove the message too quickly.
//       clearTimeout(timeoutId);

//       timeoutId = setTimeout(function() {
//         messageElement.innerHTML = '';
//       }, 2000);
// }

// let messages = 2;

//       // Save the intervalId in case we need to cancel it.
//       let intervalId;

//       // We'll use this variable to keep track of whether
//       // or not we're displaying the notification.
//       let isDisplayingNotification;

//       // Start displaying the notification in the tab
//       // when the page first loads.
//       displayNotification();

//       function displayNotification() {
//         // If we're already displaying the notification,
//         // stop this function because we don't want to
//         // create 2 intervals at the same time.
//         if (isDisplayingNotification) {
//           return;
//         }

//         isDisplayingNotification = true;

//         intervalId = setInterval(function() {
//           if (document.title === 'App') {
//             document.title = `(${messages}) New messages`;
//           } else {
//             document.title = 'App';
//           }
//         }, 1000);
//       }

//       function stopNotification() {
//         isDisplayingNotification = false;

//         clearInterval(intervalId);
//         document.title = 'App';
//       }



// setInterval(function() {
//     if(document.title === 'App'){
//         document.title = '(2) New messages'
//     }else{
//         document.title = 'App'
//     }
// }, 1000);


// let messages = 1;
// let intervalID;

// let isDisplayingNotification;

// startNotification()

// function startNotification(){

//     if(isDisplayingNotification){
//         return;
//     }

//     isDisplayingNotification = true;

//     clearInterval(intervalID);

//     intervalID = setInterval(function() {
//         if(document.title === 'App'){
//             document.title = `(${messages}) New messages`
//         }else{
//             document.title = 'App'
//         }
//     }, 1000);
// }



// function stopNotification(){
//     isDisplayingNotification = false;
//     clearInterval(intervalID);
//     document.title = 'App'
// }


// const multiply = (x,y) => x*y;

// console.log(multiply(5,10));

// let count = 0;
// function countPositive(nums){
//     nums.forEach(value => {
//         if(value > 0){
//             count++;
//         }
//     });

//     return count;
// };

// console.log(countPositive([5,6,2,-5,3]))


// function addNum(array, num){
//    return array.map(value => value + num);
// };


// console.log(addNum([5,2,3], 2))


// function removeEgg(foods){
    
//     let x = 0;
//     return foods.filter((value) => {
//         if (x < 2 && value === 'egg'){
//             x++
//             return false;
//         };
//         return true
//     });

// }

// console.log(removeEgg(['egg','appel','egg','mac', 'egg', 'laptop']));





const button = document.querySelector('.js-button');
button.addEventListener('click',() =>{
    const button = document.querySelector('.js-button');

    setTimeout(() => {
      button.innerHTML = 'Finished!';
    }, 1000);
});