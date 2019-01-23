//president
let presidentArray = [];
for(let i = 1; i < 6; i++) {
    presidentArray.push(document.querySelector(`.i-${i}`));
}

let president = "";
presidentArray.map((current) => {
    current.addEventListener('click', () => {
        if (current.checked) {
            presidentArray.map((check) => {
                check.checked = false;
            });
            current.checked = true;
            president = current.value;
        }
    });
});

document.getElementById('vote-president').addEventListener('click', () => {
    console.log(president)
    document.getElementById('vote-president').setAttribute('disabled',true);
    document.getElementById('vote-president').style.backgroundColor = '#8ddfad'
    document.getElementById('vote-president').style.cursor = 'default'
})


//governor
let governorArray = [];
for(let i = 6; i < 11; i++) {
    governorArray.push(document.querySelector(`.i-${i}`));
}

let governor = "";
governorArray .map((current) => {
    current.addEventListener('click', () => {
        if (current.checked) {
            governorArray .map((check) => {
                check.checked = false;
            });
            current.checked = true;
            governor = current.value;
        }
    });
});

document.getElementById('vote-governor').addEventListener('click', () => {
    console.log(governor)
    document.getElementById('vote-governor').setAttribute('disabled',true);
    document.getElementById('vote-governor').style.backgroundColor = '#8ddfad'
    document.getElementById('vote-governor').style.cursor = 'default'
    
})

//senator
let senatorArray = [];
for(let i = 11; i < 16; i++) {
    senatorArray.push(document.querySelector(`.i-${i}`));
}

let senator = "";
senatorArray.map((current) => {
    current.addEventListener('click', () => {
        if (current.checked) {
            senatorArray.map((check) => {
                check.checked = false;
            });
            current.checked = true;
            senator = current.value;
        }
    });
});

document.getElementById('vote-senator').addEventListener('click', () => {
    if(senator !=""){
        console.log(senator)
        document.getElementById('vote-senator').setAttribute('disabled',true);
        document.getElementById('vote-senator').style.backgroundColor = '#8ddfad'
        document.getElementById('vote-senator').style.cursor = 'default'
    }else{
        console.log('select who to vote for')
        senator = '';
        
        document.getElementById('vote-senator').setAttribute('disabled',false);
        document.getElementById('vote-senator').style.backgroundColor = 'red';
        document.getElementById('vote-senator').innerText = 'select';
        document.getElementById('vote-senator').style.cursor = 'pointer'; 
    }
    
})