
function gamingBtnCheck(btnType){
    const btn = document.querySelector(btnType);
        if (btn.classList.contains('primary') === true){
            btn.classList.remove('primary');
        } else {
            turnOffBtn();
            btn.classList.add('primary');
        }
}

function turnOffBtn(){
    const previousBtn = document.querySelector('.primary');
    if (previousBtn){
        previousBtn.classList.remove('primary')
    }
}

