
    var screen = document.querySelector('.screen');
    var buttons = document.querySelectorAll('.btn');
    var clear = document.querySelector('.button-red');
    var equal = document.querySelector('.button-green');
    
    
    buttons.forEach(function(button){
        button.addEventListener('click',function(){
            var value = this.getAttribute('data-num');
            screen.value += value;
        })
    });

    equal.addEventListener('click',function(){
        if(screen.value === ''){
            screen.value = "";
        }else{
            var answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click',function(){
        screen.value = "";
    })