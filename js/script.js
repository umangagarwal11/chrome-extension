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
    if(a==1)
      getMessage()


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
var sec = now.getSeconds()
document.querySelector('#quote').innerHTML=  ar[sec % 20]
}
setInterval(formatAMPM, 1000);
