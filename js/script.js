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

function formatAMPM() {
    var date = new Date()
    var hours = date.getHours();
    if(hours > 16) {
        greet = 'evening'
    } else if(hours > 11) {
        greet = 'afternoon'
    } else if(hours > 6) {
        greet = 'morning'
    }
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes;
    document.querySelector('#ct').innerHTML = strTime;
    document.querySelector('#greet').innerHTML = `Good ${greet}, ${localStorage.getItem('name')}`
}

setInterval(formatAMPM, 1000);
