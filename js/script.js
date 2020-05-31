var name = localStorage.getItem('name')

if(name != 'null') {
    console.log(name)
    document.querySelector('.content').style.display = 'flex';
    document.querySelector('.first').style.display = 'none';
} else {
    document.querySelector('.first').style.display = 'flex';
    document.querySelector('.content').style.display = 'none';
}

document.querySelector('.first').addEventListener('keydown', e => {
    if(e.key == 'Enter') {
        var name_input = document.querySelector('.name-input').value
        if(name_input) {
            localStorage.setItem('name', name_input)
            document.querySelector('.first').style.display = 'none'
            document.querySelector('.content').style.display = 'flex'
        }
        else {
            alert('Enter valid name')
        }
    }
})
if(localStorage.getItem('x')==null){
localStorage.setItem('x',0);}

if(localStorage.getItem('todo')==null){
localStorage.setItem('todo',JSON.stringify({}));}

document.querySelector('.modal-body').addEventListener('keydown', e => {
    if(e.key == 'Enter') {
        if(document.querySelector('.todo-input').value!="") {
            var name_input = JSON.parse(localStorage.getItem('todo'));
            name_input[localStorage.getItem('x')]={'text':document.querySelector('.todo-input').value,'check':"unchecked"};
            localStorage.setItem('x',localStorage.getItem('x')+1);
            localStorage.setItem('todo', JSON.stringify(name_input));
            document.querySelector('.todo-input').value=""
            gettodo()
        }
        else {
            alert('Enter valid item')
        }
    }
})

var a=1
function formatAMPM() {
    var greet="";
    var date = new Date()
    var hours = date.getHours();
    if(hours > 16) {
        greet = 'Good evening'
    } else if(hours > 11) {
        greet = 'Good afternoon'
    } else if(hours > 6) {
        greet = 'Good morning'
    }
    else{
        greet= 'Hey'
    }
    var ar = new Array(20)
    ar[0] = "Nothing is as easy as it looks."
    ar[1] = "Everything takes longer than you think."
    ar[2] = "Anything that can go wrong will go wrong."
    ar[3] = "If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong."
    ar[4] = "If there is a worse time for something to go wrong, it will happen then."
    ar[5] = "If anything simply cannot go wrong, it will anyway."
    ar[6] = "If you perceive that there are four possible ways in which a procedure can go wrong, and circumvent these, then a fifth way, unprepared for, will promptly develop."
    ar[7] = "Left to themselves, things tend to go from bad to worse."
    ar[8] = "If everything seems to be going well, you have obviously overlooked something."
    ar[9] = "Nature always sides with the hidden flaw."
    ar[10] = "Mother nature is a bitch."
    ar[11] = "It is impossible to make anything foolproof because fools are so ingenious."
    ar[12] = "Whenever you set out to do something, something else must be done first."
    ar[13] = "Every solution breeds new problems."
    ar[14] = "Trust everybody ... then cut the cards."
    ar[15] = "Two wrongs are only the beginning."
    ar[16] = "If at first you don't succeed, destroy all evidence that you tried."
    ar[17] = "To succeed in politics, it is often necessary to rise above your principles."
    ar[18] = "Exceptions prove the rule ... and wreck the budget."
    ar[19] = "Success always occurs in private, and failure in full view."

    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes;
    document.querySelector('#ct').innerHTML = strTime;
    document.querySelector('#greet').innerHTML = greet+` ${localStorage.getItem('name')},`;

    if(a==1){
      getMessage()
      gettodo()
    }
      $(document).ready(function(){
      $('.list-group-item').on('click',function(){
        var a=$(this).attr('id');
        var todo = JSON.parse(localStorage.getItem('todo'));
        if(todo[a]['check']=="checked"){
          document.getElementById(a).firstElementChild.style.textDecoration="none";
          todo[a]['check']="unchecked";
          localStorage.setItem('todo',JSON.stringify(todo))
          return
        }
        else {
          document.getElementById(a).firstElementChild.style.textDecoration="line-through";
          todo[a]['check']="checked";
          localStorage.setItem('todo',JSON.stringify(todo))
          return
        }
    });

    $('.del').on('click',function(){
      var a=$(this).parent().attr('id');
      var todo = JSON.parse(localStorage.getItem('todo'));
      delete todo[a];
      localStorage.setItem('todo',JSON.stringify(todo))
      gettodo();
    });
      });
}
function gettodo()
{
  var abc='<ul class="list-group list-group-flush" style="padding-right:0;">';
  var todo=JSON.parse(localStorage.getItem('todo'));
  for (x in todo){
    if(todo[x]['check']=="unchecked")
    abc+='<li class="list-group-item col-12 modal-header" id="'+x+'" style="text-align:left" ><p class="modal-title" id="exampleModalCenterTitle">'+todo[x]['text']+'</p><button type="button" class="close del"><span aria-hidden="true">&times;</span></button></li>';
    else{
      abc+='<li class="list-group-item col-12 modal-header" id="'+x+'" style="text-align:left;" ><p class="modal-title" id="exampleModalCenterTitle" style="text-decoration:line-through;">'+todo[x]['text']+'</p><button type="button" class="close del"><span aria-hidden="true">&times;</span></button></li>';
      }
  }
      document.querySelector('#todo').innerHTML = abc+'</ul>';

}

function getMessage() {
  a=0;
// create array of murphy laws
var ar = new Array(20)
ar[0] = "Nothing is as easy as it looks."
ar[1] = "Everything takes longer than you think."
ar[2] = "Anything that can go wrong will go wrong."
ar[3] = "If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong."
ar[4] = "If there is a worse time for something to go wrong, it will happen then."
ar[5] = "If anything simply cannot go wrong, it will anyway."
ar[6] = "If you perceive that there are four possible ways in which a procedure can go wrong, and circumvent these, then a fifth way, unprepared for, will promptly develop."
ar[7] = "Left to themselves, things tend to go from bad to worse."
ar[8] = "If everything seems to be going well, you have obviously overlooked something."
ar[9] = "Nature always sides with the hidden flaw."
ar[10] = "Mother nature is a bitch."
ar[11] = "It is impossible to make anything foolproof because fools are so ingenious."
ar[12] = "Whenever you set out to do something, something else must be done first."
ar[13] = "Every solution breeds new problems."
ar[14] = "Trust everybody ... then cut the cards."
ar[15] = "Two wrongs are only the beginning."
ar[16] = "If at first you don't succeed, destroy all evidence that you tried."
ar[17] = "To succeed in politics, it is often necessary to rise above your principles."
ar[18] = "Exceptions prove the rule ... and wreck the budget."
ar[19] = "Success always occurs in private, and failure in full view."

var now = new Date()
var sec = now.getDate()*(now.getMonth()+1)
document.querySelector('#quote').innerHTML=  ar[sec % 20]
}
setInterval(formatAMPM, 1000);
