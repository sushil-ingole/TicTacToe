var state = {
    'sign': '',
    'value': {
        'cell_1': ['', false],
        'cell_2': ['', false],
        'cell_3': ['', false],
        'cell_4': ['', false],
        'cell_5': ['', false],
        'cell_6': ['', false],
        'cell_7': ['', false],
        'cell_8': ['', false],
        'cell_9': ['', false],
    },
    'play': true,
    'count': 0,
    'count1': 1,
    'mul': false,
    'which': [],
    'mute': false,
}

const VAL = state['value'];
const clickSound = new Audio('/click.wav');
const changeSound = new Audio('/change.wav');
const winSound = new Audio('/win.wav');
const drawSound = new Audio('/draw.wav');
const restartSound = new Audio('/restart.wav');

document.querySelector('#cell-1').addEventListener('click', selectFunc1);
document.querySelector('#cell-2').addEventListener('click', selectFunc2);
document.querySelector('#cell-3').addEventListener('click', selectFunc3);
document.querySelector('#cell-4').addEventListener('click', selectFunc4);
document.querySelector('#cell-5').addEventListener('click', selectFunc5);
document.querySelector('#cell-6').addEventListener('click', selectFunc6);
document.querySelector('#cell-7').addEventListener('click', selectFunc7);
document.querySelector('#cell-8').addEventListener('click', selectFunc8);
document.querySelector('#cell-9').addEventListener('click', selectFunc9);
document.querySelector('#restart').addEventListener('click', restartFunc);
document.querySelector('#multi').addEventListener('click', multiFunc);
document.querySelector('#single').addEventListener('click', singleFunc);
document.querySelector('#mute').addEventListener('click', muteFunc);

function restartFunc(mulval) {
    document.querySelector('#cell-1').textContent = '';
    document.querySelector('#cell-2').textContent = '';
    document.querySelector('#cell-3').textContent = '';
    document.querySelector('#cell-4').textContent = '';
    document.querySelector('#cell-5').textContent = '';
    document.querySelector('#cell-6').textContent = '';
    document.querySelector('#cell-7').textContent = '';
    document.querySelector('#cell-8').textContent = '';
    document.querySelector('#cell-9').textContent = '';
    state.sign = '';
    VAL['cell_1'][0] = '';
    VAL['cell_1'][1] = false;

    VAL['cell_2'][0] = '';
    VAL['cell_2'][1] = false;

    VAL['cell_3'][0] = '';
    VAL['cell_3'][1] = false;

    VAL['cell_4'][0] = '';
    VAL['cell_4'][1] = false;

    VAL['cell_5'][0] = '';
    VAL['cell_5'][1] = false;

    VAL['cell_6'][0] = '';
    VAL['cell_6'][1] = false;

    VAL['cell_7'][0] = '';
    VAL['cell_7'][1] = false;

    VAL['cell_8'][0] = '';
    VAL['cell_8'][1] = false;

    VAL['cell_9'][0] = '';
    VAL['cell_9'][1] = false;

    state.play = true;
    document.querySelector('.result').innerHTML = "Who wins?";
    state.count = 0;
    state.count1 = 1;
    if (mulval === "single") {
        state.mul = false;
    }
    if ((mulval === "single") || (mulval === "multi")) {
        console.log("MulVal Restart Play " + mulval);
    } else {
        if (state.mute === false) {
            restartSound.play();
        }
    }
    state.which.length = 0;
    setTimeout(logic, 1);
    console.log('Restart');
}
setTimeout(() => {
    document.getElementById('single').style.display = "none";
}, 100);

function multiFunc() {
    state.mul = true;
    console.log(state.mul);
    if (state.mul === true) {
        document.getElementById('multi').style.border = "5px solid black";
        document.getElementById('single').style.border = "0px";
        document.getElementById('single').style.display = "inline-block";
        document.getElementById('multi').style.display = "none";
    }
    if (state.mute === false) {
        changeSound.play();
    }
    restartFunc("multi");
}

function singleFunc() {
    state.mul = false;
    console.log(state.mul);
    if (state.mul === false) {
        document.getElementById('single').style.border = "5px solid black";
        document.getElementById('multi').style.border = "0px";
        document.getElementById('multi').style.display = "inline-block";
        document.getElementById('single').style.display = "none";
    }
    if (state.mute === false) {
        changeSound.play();
    }
    restartFunc("single");
}

function selectFunc1() {
    if (state.value.cell_1[1] === false && state.play === true && state.mul === false) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-1').textContent = state.sign;
        var cell1 = document.getElementById('cell-1').textContent;
        state.value.cell_1[0] = cell1;
        state.value.cell_1[1] = true;
        // console.log(state.value.cell_1);
        state.count++;
    } else if (state.value.cell_1[1] === false && state.play === true && state.mul === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-1').textContent = state.sign;
        var cell1 = document.getElementById('cell-1').textContent;
        state.value.cell_1[0] = cell1;
        state.value.cell_1[1] = true;
        // console.log(state.value.cell_1);
        state.count++;
    }
    if(state.play === true) {
        state.which.push(1);
        console.log("Which: " + state.which);
        if (state.mute === false) {
            clickSound.play();
        }
        logic();
    }
}

function selectFunc2() {
    if (state.value.cell_2[1] === false && state.play === true && state.mul === false) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-2').textContent = state.sign;
        var cell2 = document.getElementById('cell-2').textContent;
        state.value.cell_2[0] = cell2;
        state.value.cell_2[1] = true;
        // console.log(state.value.cell_2);
        state.count++;
    } else if (state.value.cell_2[1] === false && state.play === true && state.mul === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-2').textContent = state.sign;
        var cell2 = document.getElementById('cell-2').textContent;
        state.value.cell_2[0] = cell2;
        state.value.cell_2[1] = true;
        // console.log(state.value.cell_2);
        state.count++;
    }
    if(state.play === true) {
        state.which.push(2);
        console.log("Which: " + state.which);
        if (state.mute === false) {
            clickSound.play();
        }
        logic();
    }
}

function selectFunc3() {
    if (state.value.cell_3[1] === false && state.play === true && state.mul === false) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-3').textContent = state.sign;
        var cell3 = document.getElementById('cell-3').textContent;
        state.value.cell_3[0] = cell3;
        state.value.cell_3[1] = true;
        // console.log(state.value.cell_3);
        state.count++;
    } else if (state.value.cell_3[1] === false && state.play === true && state.mul === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-3').textContent = state.sign;
        var cell3 = document.getElementById('cell-3').textContent;
        state.value.cell_3[0] = cell3;
        state.value.cell_3[1] = true;
        // console.log(state.value.cell_3);
        state.count++;
    }
    if(state.play === true) {
        state.which.push(3);
        console.log("Which: " + state.which);
        if (state.mute === false) {
            clickSound.play();
        }
        logic();
    }
}

function selectFunc4() {
    if (state.value.cell_4[1] === false && state.play === true && state.mul === false) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-4').textContent = state.sign;
        var cell4 = document.getElementById('cell-4').textContent;
        state.value.cell_4[0] = cell4;
        state.value.cell_4[1] = true;
        // console.log(state.value.cell_4);
        state.count++;
    } else if (state.value.cell_4[1] === false && state.play === true && state.mul === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-4').textContent = state.sign;
        var cell4 = document.getElementById('cell-4').textContent;
        state.value.cell_4[0] = cell4;
        state.value.cell_4[1] = true;
        // console.log(state.value.cell_4);
        state.count++;
    }
    if(state.play === true) {
        state.which.push(4);
        console.log("Which: " + state.which);
        if (state.mute === false) {
            clickSound.play();
        }
        logic();
    }
}

function selectFunc5() {
    if (state.value.cell_5[1] === false && state.play === true && state.mul === false) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-5').textContent = state.sign;
        var cell5 = document.getElementById('cell-5').textContent;
        state.value.cell_5[0] = cell5;
        state.value.cell_5[1] = true;
        // console.log(state.value.cell_5);
        state.count++;
    } else if (state.value.cell_5[1] === false && state.play === true && state.mul === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-5').textContent = state.sign;
        var cell5 = document.getElementById('cell-5').textContent;
        state.value.cell_5[0] = cell5;
        state.value.cell_5[1] = true;
        // console.log(state.value.cell_5);
        state.count++;
    }
    if(state.play === true) {
        state.which.push(5);
        console.log("Which: " + state.which);
        if (state.mute === false) {
            clickSound.play();
        }
        logic();
    }
}

function selectFunc6() {
    if (state.value.cell_6[1] === false && state.play === true && state.mul === false) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-6').textContent = state.sign;
        var cell6 = document.getElementById('cell-6').textContent;
        state.value.cell_6[0] = cell6;
        state.value.cell_6[1] = true;
        // console.log(state.value.cell_6);
        state.count++;
    } else if (state.value.cell_6[1] === false && state.play === true && state.mul === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-6').textContent = state.sign;
        var cell6 = document.getElementById('cell-6').textContent;
        state.value.cell_6[0] = cell6;
        state.value.cell_6[1] = true;
        // console.log(state.value.cell_6);
        state.count++;
    }
    if(state.play === true) {
        state.which.push(6);
        console.log("Which: " + state.which);
        if (state.mute === false) {
            clickSound.play();
        }
        logic();
    }
}

function selectFunc7() {
    if (state.value.cell_7[1] === false && state.play === true && state.mul === false) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-7').textContent = state.sign;
        var cell7 = document.getElementById('cell-7').textContent;
        state.value.cell_7[0] = cell7;
        state.value.cell_7[1] = true;
        // console.log(state.value.cell_7);
        state.count++;
    } else if (state.value.cell_7[1] === false && state.play === true && state.mul === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-7').textContent = state.sign;
        var cell7 = document.getElementById('cell-7').textContent;
        state.value.cell_7[0] = cell7;
        state.value.cell_7[1] = true;
        // console.log(state.value.cell_7);
        state.count++;
    }
    if(state.play === true) {
        state.which.push(7);
        console.log("Which: " + state.which);
        if (state.mute === false) {
            clickSound.play();
        }
        logic();
    }
}

function selectFunc8() {
    if (state.value.cell_8[1] === false && state.play === true && state.mul === false) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-8').textContent = state.sign;
        var cell8 = document.getElementById('cell-8').textContent;
        state.value.cell_8[0] = cell8;
        state.value.cell_8[1] = true;
        // console.log(state.value.cell_8);
        state.count++;
    } else if (state.value.cell_8[1] === false && state.play === true && state.mul === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-8').textContent = state.sign;
        var cell8 = document.getElementById('cell-8').textContent;
        state.value.cell_8[0] = cell8;
        state.value.cell_8[1] = true;
        // console.log(state.value.cell_8);
        state.count++;
    }
    if(state.play === true) {
        state.which.push(8);
        console.log("Which: " + state.which);
        if (state.mute === false) {
            clickSound.play();
        }
        logic();
    }
}

function selectFunc9() {
    if (state.value.cell_9[1] === false && state.play === true && state.mul === false) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-9').textContent = state.sign;
        var cell9 = document.getElementById('cell-9').textContent;
        state.value.cell_9[0] = cell9;
        state.value.cell_9[1] = true;
        // console.log(state.value.cell_9);
        state.count++;
    } else if (state.value.cell_9[1] === false && state.play === true && state.mul === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if (state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-9').textContent = state.sign;
        var cell9 = document.getElementById('cell-9').textContent;
        state.value.cell_9[0] = cell9;
        state.value.cell_9[1] = true;
        // console.log(state.value.cell_9);
        state.count++;
    }
    if(state.play === true) {
        state.which.push(9);
        console.log("Which: " + state.which);
        if (state.mute === false) {
            clickSound.play();
        }
        logic();
    }
}

function ranGen() {
    var ran = (Math.floor(Math.random() * 9)) + 1;
    return ran;
}

function oconditions() {
    var ran;
    if (state.which.includes(1) && state.which.includes(2) && !(state.which.includes(3))) {
        if ((state.value.cell_1[0] === 'O' && state.value.cell_2[0] === 'O')) {
            ran = 3;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(1) && state.which.includes(3) && !(state.which.includes(2))) {
        if ((state.value.cell_1[0] === 'O' && state.value.cell_3[0] === 'O')) {
            ran = 2;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(2) && state.which.includes(3) && !(state.which.includes(1))) {
        if ((state.value.cell_2[0] === 'O' && state.value.cell_3[0] === 'O')) {
            ran = 1;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(1) && state.which.includes(4) && !(state.which.includes(7))) {
        if ((state.value.cell_1[0] === 'O' && state.value.cell_4[0] === 'O')) {
            ran = 7;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(1) && state.which.includes(7) && !(state.which.includes(4))) {
        if ((state.value.cell_1[0] === 'O' && state.value.cell_7[0] === 'O')) {
            ran = 4;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(4) && state.which.includes(7) && !(state.which.includes(1))) {
        if ((state.value.cell_4[0] === 'O' && state.value.cell_7[0] === 'O')) {
            ran = 1;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(7) && state.which.includes(8) && !(state.which.includes(9))) {
        if ((state.value.cell_7[0] === 'O' && state.value.cell_8[0] === 'O')) {
            ran = 9;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(7) && state.which.includes(9) && !(state.which.includes(8))) {
        if ((state.value.cell_7[0] === 'O' && state.value.cell_9[0] === 'O')) {
            ran = 8;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(8) && state.which.includes(9) && !(state.which.includes(7))) {
        if ((state.value.cell_8[0] === 'O' && state.value.cell_9[0] === 'O')) {
            ran = 7;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(3) && state.which.includes(6) && !(state.which.includes(9))) {
        if ((state.value.cell_3[0] === 'O' && state.value.cell_6[0] === 'O')) {
            ran = 9;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(3) && state.which.includes(9) && !(state.which.includes(6))) {
        if ((state.value.cell_3[0] === 'O' && state.value.cell_9[0] === 'O')) {
            ran = 6;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(6) && state.which.includes(9) && !(state.which.includes(3))) {
        if ((state.value.cell_6[0] === 'O' && state.value.cell_9[0] === 'O')) {
            ran = 3;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(2) && state.which.includes(5) && !(state.which.includes(8))) {
        if ((state.value.cell_2[0] === 'O' && state.value.cell_5[0] === 'O')) {
            ran = 8;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(2) && state.which.includes(8) && !(state.which.includes(5))) {
        if ((state.value.cell_2[0] === 'O' && state.value.cell_8[0] === 'O')) {
            ran = 5;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(5) && state.which.includes(8) && !(state.which.includes(2))) {
        if ((state.value.cell_5[0] === 'O' && state.value.cell_8[0] === 'O')) {
            ran = 2;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(4) && state.which.includes(5) && !(state.which.includes(6))) {
        if ((state.value.cell_4[0] === 'O' && state.value.cell_5[0] === 'O')) {
            ran = 6;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(4) && state.which.includes(6) && !(state.which.includes(5))) {
        if ((state.value.cell_4[0] === 'O' && state.value.cell_6[0] === 'O')) {
            ran = 5;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(5) && state.which.includes(6) && !(state.which.includes(4))) {
        if ((state.value.cell_5[0] === 'O' && state.value.cell_6[0] === 'O')) {
            ran = 4;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(1) && state.which.includes(5) && !(state.which.includes(9))) {
        if ((state.value.cell_1[0] === 'O' && state.value.cell_5[0] === 'O')) {
            ran = 9;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(1) && state.which.includes(9) && !(state.which.includes(5))) {
        if ((state.value.cell_1[0] === 'O' && state.value.cell_9[0] === 'O')) {
            ran = 5;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(5) && state.which.includes(9) && !(state.which.includes(1))) {
        if ((state.value.cell_5[0] === 'O' && state.value.cell_9[0] === 'O')) {
            ran = 1;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(3) && state.which.includes(5) && !(state.which.includes(7))) {
        if ((state.value.cell_3[0] === 'O' && state.value.cell_5[0] === 'O')) {
            ran = 7;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(3) && state.which.includes(7) && !(state.which.includes(5))) {
        if ((state.value.cell_3[0] === 'O' && state.value.cell_7[0] === 'O')) {
            ran = 5;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(5) && state.which.includes(7) && !(state.which.includes(3))) {
        if ((state.value.cell_5[0] === 'O' && state.value.cell_7[0] === 'O')) {
            ran = 3;
            console.log("Not random: " + ran);
            return ran;
        }
    }
}

function conditions() {
    var ran;
    if (state.which.includes(1) && state.which.includes(2) && !(state.which.includes(3))) {
        if ((state.value.cell_1[0] === 'X' && state.value.cell_2[0] === 'X') ||
            (state.value.cell_1[0] === 'O' && state.value.cell_2[0] === 'O')) {
            ran = 3;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(1) && state.which.includes(3) && !(state.which.includes(2))) {
        if ((state.value.cell_1[0] === 'X' && state.value.cell_3[0] === 'X') ||
            (state.value.cell_1[0] === 'O' && state.value.cell_3[0] === 'O')) {
            ran = 2;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(2) && state.which.includes(3) && !(state.which.includes(1))) {
        if ((state.value.cell_2[0] === 'X' && state.value.cell_3[0] === 'X') ||
            (state.value.cell_2[0] === 'O' && state.value.cell_3[0] === 'O')) {
            ran = 1;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(1) && state.which.includes(4) && !(state.which.includes(7))) {
        if ((state.value.cell_1[0] === 'X' && state.value.cell_4[0] === 'X') ||
            (state.value.cell_1[0] === 'O' && state.value.cell_4[0] === 'O')) {
            ran = 7;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(1) && state.which.includes(7) && !(state.which.includes(4))) {
        if ((state.value.cell_1[0] === 'X' && state.value.cell_7[0] === 'X') ||
            (state.value.cell_1[0] === 'O' && state.value.cell_7[0] === 'O')) {
            ran = 4;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(4) && state.which.includes(7) && !(state.which.includes(1))) {
        if ((state.value.cell_4[0] === 'X' && state.value.cell_7[0] === 'X') ||
            (state.value.cell_4[0] === 'O' && state.value.cell_7[0] === 'O')) {
            ran = 1;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(7) && state.which.includes(8) && !(state.which.includes(9))) {
        if ((state.value.cell_7[0] === 'X' && state.value.cell_8[0] === 'X') ||
            (state.value.cell_7[0] === 'O' && state.value.cell_8[0] === 'O')) {
            ran = 9;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(7) && state.which.includes(9) && !(state.which.includes(8))) {
        if ((state.value.cell_7[0] === 'X' && state.value.cell_9[0] === 'X') ||
            (state.value.cell_7[0] === 'O' && state.value.cell_9[0] === 'O')) {
            ran = 8;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(8) && state.which.includes(9) && !(state.which.includes(7))) {
        if ((state.value.cell_8[0] === 'X' && state.value.cell_9[0] === 'X') ||
            (state.value.cell_8[0] === 'O' && state.value.cell_9[0] === 'O')) {
            ran = 7;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(3) && state.which.includes(6) && !(state.which.includes(9))) {
        if ((state.value.cell_3[0] === 'X' && state.value.cell_6[0] === 'X') ||
            (state.value.cell_3[0] === 'O' && state.value.cell_6[0] === 'O')) {
            ran = 9;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(3) && state.which.includes(9) && !(state.which.includes(6))) {
        if ((state.value.cell_3[0] === 'X' && state.value.cell_9[0] === 'X') ||
            (state.value.cell_3[0] === 'O' && state.value.cell_9[0] === 'O')) {
            ran = 6;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(6) && state.which.includes(9) && !(state.which.includes(3))) {
        if ((state.value.cell_6[0] === 'X' && state.value.cell_9[0] === 'X') ||
            (state.value.cell_6[0] === 'O' && state.value.cell_9[0] === 'O')) {
            ran = 3;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(2) && state.which.includes(5) && !(state.which.includes(8))) {
        if ((state.value.cell_2[0] === 'X' && state.value.cell_5[0] === 'X') ||
            (state.value.cell_2[0] === 'O' && state.value.cell_5[0] === 'O')) {
            ran = 8;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(2) && state.which.includes(8) && !(state.which.includes(5))) {
        if ((state.value.cell_2[0] === 'X' && state.value.cell_8[0] === 'X') ||
            (state.value.cell_2[0] === 'O' && state.value.cell_8[0] === 'O')) {
            ran = 5;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(5) && state.which.includes(8) && !(state.which.includes(2))) {
        if ((state.value.cell_5[0] === 'X' && state.value.cell_8[0] === 'X') ||
            (state.value.cell_5[0] === 'O' && state.value.cell_8[0] === 'O')) {
            ran = 2;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(4) && state.which.includes(5) && !(state.which.includes(6))) {
        if ((state.value.cell_4[0] === 'X' && state.value.cell_5[0] === 'X') ||
            (state.value.cell_4[0] === 'O' && state.value.cell_5[0] === 'O')) {
            ran = 6;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(4) && state.which.includes(6) && !(state.which.includes(5))) {
        if ((state.value.cell_4[0] === 'X' && state.value.cell_6[0] === 'X') ||
            (state.value.cell_4[0] === 'O' && state.value.cell_6[0] === 'O')) {
            ran = 5;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(5) && state.which.includes(6) && !(state.which.includes(4))) {
        if ((state.value.cell_5[0] === 'X' && state.value.cell_6[0] === 'X') ||
            (state.value.cell_5[0] === 'O' && state.value.cell_6[0] === 'O')) {
            ran = 4;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(1) && state.which.includes(5) && !(state.which.includes(9))) {
        if ((state.value.cell_1[0] === 'X' && state.value.cell_5[0] === 'X') ||
            (state.value.cell_1[0] === 'O' && state.value.cell_5[0] === 'O')) {
            ran = 9;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(1) && state.which.includes(9) && !(state.which.includes(5))) {
        if ((state.value.cell_1[0] === 'X' && state.value.cell_9[0] === 'X') ||
            (state.value.cell_1[0] === 'O' && state.value.cell_9[0] === 'O')) {
            ran = 5;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(5) && state.which.includes(9) && !(state.which.includes(1))) {
        if ((state.value.cell_5[0] === 'X' && state.value.cell_9[0] === 'X') ||
            (state.value.cell_5[0] === 'O' && state.value.cell_9[0] === 'O')) {
            ran = 1;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(3) && state.which.includes(5) && !(state.which.includes(7))) {
        if ((state.value.cell_3[0] === 'X' && state.value.cell_5[0] === 'X') ||
            (state.value.cell_3[0] === 'O' && state.value.cell_5[0] === 'O')) {
            ran = 7;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(3) && state.which.includes(7) && !(state.which.includes(5))) {
        if ((state.value.cell_3[0] === 'X' && state.value.cell_7[0] === 'X') ||
            (state.value.cell_3[0] === 'O' && state.value.cell_7[0] === 'O')) {
            ran = 5;
            console.log("Not random: " + ran);
            return ran;
        }
    }
    if (state.which.includes(5) && state.which.includes(7) && !(state.which.includes(3))) {
        if ((state.value.cell_5[0] === 'X' && state.value.cell_7[0] === 'X') ||
            (state.value.cell_5[0] === 'O' && state.value.cell_7[0] === 'O')) {
            ran = 3;
            console.log("Not random: " + ran);
            return ran;
        }
    }
}

function set1() {
    var cel1 = document.getElementById('cell-1').textContent;
    state.value.cell_1[0] = cel1;
    state.value.cell_1[1] = true;
    if (state.count < 9) {
        state.count++;
    }
}

function set2() {
    var cel2 = document.getElementById('cell-2').textContent;
    state.value.cell_2[0] = cel2;
    state.value.cell_2[1] = true;
    if (state.count < 9) {
        state.count++;
    }
}

function set3() {
    var cel3 = document.getElementById('cell-3').textContent;
    state.value.cell_3[0] = cel3;
    state.value.cell_3[1] = true;
    if (state.count < 9) {
        state.count++;
    }
}

function set4() {
    var cel4 = document.getElementById('cell-4').textContent;
    state.value.cell_4[0] = cel4;
    state.value.cell_4[1] = true;
    if (state.count < 9) {
        state.count++;
    }
}

function set5() {
    var cel5 = document.getElementById('cell-5').textContent;
    state.value.cell_5[0] = cel5;
    state.value.cell_5[1] = true;
    if (state.count < 9) {
        state.count++;
    }
}

function set6() {
    var cel6 = document.getElementById('cell-6').textContent;
    state.value.cell_6[0] = cel6;
    state.value.cell_6[1] = true;
    if (state.count < 9) {
        state.count++;
    }
}

function set7() {
    var cel7 = document.getElementById('cell-7').textContent;
    state.value.cell_7[0] = cel7;
    state.value.cell_7[1] = true;
    if (state.count < 9) {
        state.count++;
    }
}

function set8() {
    var cel8 = document.getElementById('cell-8').textContent;
    state.value.cell_8[0] = cel8;
    state.value.cell_8[1] = true;
    if (state.count < 9) {
        state.count++;
    }
}

function set9() {
    var cel9 = document.getElementById('cell-9').textContent;
    state.value.cell_9[0] = cel9;
    state.value.cell_9[1] = true;
    if (state.count < 9) {
        state.count++;
    }
}

function logic() {
    if (state.play === true) {
        if (state.mul === true) {
            if ((state.value.cell_1[0] === 'X' && state.value.cell_2[0] === 'X' && state.value.cell_3[0] === 'X') ||
                (state.value.cell_1[0] === 'X' && state.value.cell_4[0] === 'X' && state.value.cell_7[0] === 'X') ||
                (state.value.cell_1[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_9[0] === 'X') ||
                (state.value.cell_7[0] === 'X' && state.value.cell_8[0] === 'X' && state.value.cell_9[0] === 'X') ||
                (state.value.cell_7[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_3[0] === 'X') ||
                (state.value.cell_3[0] === 'X' && state.value.cell_6[0] === 'X' && state.value.cell_9[0] === 'X') ||
                (state.value.cell_2[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_8[0] === 'X') ||
                (state.value.cell_4[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_6[0] === 'X')) {
                var res = document.querySelector('.result').innerHTML = "X win";
                console.log("X win");
                state.play = false;
                if (state.mute === false) {
                    winSound.play();
                }
            } else if (
                (state.value.cell_1[0] === 'O' && state.value.cell_2[0] === 'O' && state.value.cell_3[0] === 'O') ||
                (state.value.cell_1[0] === 'O' && state.value.cell_4[0] === 'O' && state.value.cell_7[0] === 'O') ||
                (state.value.cell_1[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_9[0] === 'O') ||
                (state.value.cell_7[0] === 'O' && state.value.cell_8[0] === 'O' && state.value.cell_9[0] === 'O') ||
                (state.value.cell_7[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_3[0] === 'O') ||
                (state.value.cell_3[0] === 'O' && state.value.cell_6[0] === 'O' && state.value.cell_9[0] === 'O') ||
                (state.value.cell_2[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_8[0] === 'O') ||
                (state.value.cell_4[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_6[0] === 'O')) {
                var res = document.querySelector('.result').innerHTML = "O win";
                console.log("O win");
                state.play = false;
                if (state.mute === false) {
                    winSound.play();
                }
            }
            var timer = setTimeout(logic, 100);
            if (state.count === 9 && state.play === true && state.mul === true) {
                var res = document.querySelector('.result').innerHTML = "Draw";
                console.log("Draw");
                state.play = false;
                if (state.mute === false) {
                    drawSound.play();
                }
            }
            if (res === 'X win' || res === 'O win') {
                clearTimeout(timer);
            } else if (res === 'Draw') {
                clearTimeout(timer);
            }
            // ----------------------------Single Player Logic----------------------------
        } else if (state.mul === false) {

            if ((state.value.cell_1[0] === 'X' && state.value.cell_2[0] === 'X' && state.value.cell_3[0] === 'X') ||
                (state.value.cell_1[0] === 'X' && state.value.cell_4[0] === 'X' && state.value.cell_7[0] === 'X') ||
                (state.value.cell_1[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_9[0] === 'X') ||
                (state.value.cell_7[0] === 'X' && state.value.cell_8[0] === 'X' && state.value.cell_9[0] === 'X') ||
                (state.value.cell_7[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_3[0] === 'X') ||
                (state.value.cell_3[0] === 'X' && state.value.cell_6[0] === 'X' && state.value.cell_9[0] === 'X') ||
                (state.value.cell_2[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_8[0] === 'X') ||
                (state.value.cell_4[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_6[0] === 'X')) {
                var res = document.querySelector('.result').innerHTML = "X win";
                console.log("X win");
                state.play = false;
                if (state.mute === false) {
                    winSound.play();
                }
            } else if (
                (state.value.cell_1[0] === 'O' && state.value.cell_2[0] === 'O' && state.value.cell_3[0] === 'O') ||
                (state.value.cell_1[0] === 'O' && state.value.cell_4[0] === 'O' && state.value.cell_7[0] === 'O') ||
                (state.value.cell_1[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_9[0] === 'O') ||
                (state.value.cell_7[0] === 'O' && state.value.cell_8[0] === 'O' && state.value.cell_9[0] === 'O') ||
                (state.value.cell_7[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_3[0] === 'O') ||
                (state.value.cell_3[0] === 'O' && state.value.cell_6[0] === 'O' && state.value.cell_9[0] === 'O') ||
                (state.value.cell_2[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_8[0] === 'O') ||
                (state.value.cell_4[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_6[0] === 'O')) {
                var res = document.querySelector('.result').innerHTML = "O win";
                console.log("O win");
                state.play = false;
                if (state.mute === false) {
                    winSound.play();
                }
            }
            var random;

            var timer = setTimeout(logic, 100);

            if (state.play === true) {

                if (state.count < 2 && state.count < 9) {
                    for (var i = 0; i < 1; i++) {
                        random = ranGen();
                    }
                }

                if (state.count > 2 && state.count < 9) {
                    random = oconditions();
                    if (typeof random === 'undefined') {
                        random = conditions();
                        console.log("Condition: " + random);
                        if (typeof random === 'undefined') {
                            random = ranGen();
                            loop();
                        }
                    }
                }
            }


            function loop() {
                if (state.which.includes(random)) {
                    console.log("Random inside loop: " + random);
                    logic();
                    return;
                } else {
                    return;
                }
            }
            loop();

            // for (var v = 0; v < state.which.length; v++) {
            //     console.log("Which: " + state.which);
            // }
            console.log("Random: " + random);

            if (state.count === state.count1) {
                state.count1 += 2;
                for (var i = 0; i < 1; i++) {
                    console.log(state.count1);
                    if (state.sign === 'X') {
                        state.sign = 'O';
                    } else if (state.sign === 'O') {
                        state.sign = 'X';
                    }
                    var val1 = document.querySelector(`#cell-${random}`);
                    if (val1) {
                        val1.textContent = state.sign;
                        state.which.push(random);
                        switch (random) {
                            case 1:
                                set1();
                                break;
                            case 2:
                                set2();
                                break;
                            case 3:
                                set3();
                                break;
                            case 4:
                                set4();
                                break;
                            case 5:
                                set5();
                                break;
                            case 6:
                                set6();
                                break;
                            case 7:
                                set7();
                                break;
                            case 8:
                                set8();
                                break;
                            case 9:
                                set9();
                                break;
                        }
                    }
                }
            }

            if ((state.value.cell_1[0] === 'X' && state.value.cell_2[0] === 'X' && state.value.cell_3[0] === 'X') ||
                (state.value.cell_1[0] === 'X' && state.value.cell_4[0] === 'X' && state.value.cell_7[0] === 'X') ||
                (state.value.cell_1[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_9[0] === 'X') ||
                (state.value.cell_7[0] === 'X' && state.value.cell_8[0] === 'X' && state.value.cell_9[0] === 'X') ||
                (state.value.cell_7[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_3[0] === 'X') ||
                (state.value.cell_3[0] === 'X' && state.value.cell_6[0] === 'X' && state.value.cell_9[0] === 'X') ||
                (state.value.cell_2[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_8[0] === 'X') ||
                (state.value.cell_4[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_6[0] === 'X')) {
                var res = document.querySelector('.result').innerHTML = "X win";
                console.log("X win");
                state.play = false;
                if (state.mute === false) {
                    winSound.play();
                }
            } else if (
                (state.value.cell_1[0] === 'O' && state.value.cell_2[0] === 'O' && state.value.cell_3[0] === 'O') ||
                (state.value.cell_1[0] === 'O' && state.value.cell_4[0] === 'O' && state.value.cell_7[0] === 'O') ||
                (state.value.cell_1[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_9[0] === 'O') ||
                (state.value.cell_7[0] === 'O' && state.value.cell_8[0] === 'O' && state.value.cell_9[0] === 'O') ||
                (state.value.cell_7[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_3[0] === 'O') ||
                (state.value.cell_3[0] === 'O' && state.value.cell_6[0] === 'O' && state.value.cell_9[0] === 'O') ||
                (state.value.cell_2[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_8[0] === 'O') ||
                (state.value.cell_4[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_6[0] === 'O')) {
                var res = document.querySelector('.result').innerHTML = "O win";
                console.log("O win");
                state.play = false;
                if (state.mute === false) {
                    winSound.play();
                }
            }

            if (state.count === 9 && state.play === true && state.mul === false) {
                var res = document.querySelector('.result').innerHTML = "Draw";
                console.log("Draw");
                state.play = false;
                if (state.mute === false) {
                    drawSound.play();
                }
            }
            if (res === 'X win' || res === 'O win') {
                clearTimeout(timer);
            } else if (res === 'Draw') {
                clearTimeout(timer);
            }
            clearInterval(timer);
        }
    }
}

function muteFunc() {
    state.mute = !state.mute;
    if(state.mute === false) {
        document.querySelector('.mutebtn').textContent = "Mute";
    } else {
        document.querySelector('.mutebtn').textContent = "Unmute";
    }
}