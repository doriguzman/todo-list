var submit= document.getElementById('submit')
var thelist= document.getElementById('thelist')
var text= document.getElementById('text')


submit.addEventListener('click', function(event){
    event.preventDefault();
    var insideTextBox= text.value;
    if(insideTextBox){
        var li= document.createElement('li')
        li.innerText= insideTextBox;
        thelist.appendChild(li)
        
        li.addEventListener('click', function(event){
            li.parentNode.removeChild(li)
        })
    }
    text.value=''
    // console.log(typeof(insideTextBox))
})


