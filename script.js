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
}

const VAL = state['value'];

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

function restartFunc() {
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
    setTimeout(logic, 100);

    console.log('Restart');
}

function selectFunc1() {
    if (state.value.cell_1[1] === false && state.play === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if ( state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-1').textContent = state.sign;
        var cell1 = document.getElementById('cell-1').textContent;
        state.value.cell_1[0] = cell1;
        state.value.cell_1[1] = true;
        console.log(state.value.cell_1);
        state.count++;
    }
}
function selectFunc2() {
    if (state.value.cell_2[1] === false  && state.play === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if ( state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-2').textContent = state.sign;
        var cell2 = document.getElementById('cell-2').textContent;
        state.value.cell_2[0] = cell2;
        state.value.cell_2[1] = true;
        console.log(state.value.cell_2);
        state.count++;
    }

}
function selectFunc3() {
    if (state.value.cell_3[1] === false  && state.play === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if ( state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-3').textContent = state.sign;
        var cell3 = document.getElementById('cell-3').textContent;
        state.value.cell_3[0] = cell3;
        state.value.cell_3[1] = true;
        console.log(state.value.cell_3);
        state.count++;
    }
}
function selectFunc4() {
    if (state.value.cell_4[1] === false  && state.play === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if ( state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-4').textContent = state.sign;
        var cell4 = document.getElementById('cell-4').textContent;
        state.value.cell_4[0] = cell4;
        state.value.cell_4[1] = true;
        console.log(state.value.cell_4);
        state.count++;
    }
}
function selectFunc5() {
    if (state.value.cell_5[1] === false  && state.play === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if ( state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-5').textContent = state.sign;
        var cell5 = document.getElementById('cell-5').textContent;
        state.value.cell_5[0] = cell5;
        state.value.cell_5[1] = true;
        console.log(state.value.cell_5);
        state.count++;
    }
}
function selectFunc6() {
    if (state.value.cell_6[1] === false  && state.play === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if ( state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-6').textContent = state.sign;
        var cell6 = document.getElementById('cell-6').textContent;
        state.value.cell_6[0] = cell6;
        state.value.cell_6[1] = true;
        console.log(state.value.cell_6);
        state.count++;
    }
}
function selectFunc7() {
    if (state.value.cell_7[1] === false  && state.play === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if ( state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-7').textContent = state.sign;
        var cell7 = document.getElementById('cell-7').textContent;
        state.value.cell_7[0] = cell7;
        state.value.cell_7[1] = true;
        console.log(state.value.cell_7);
        state.count++;
    }
}
function selectFunc8() {
    if (state.value.cell_8[1] === false  && state.play === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if ( state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-8').textContent = state.sign;
        var cell8 = document.getElementById('cell-8').textContent;
        state.value.cell_8[0] = cell8;
        state.value.cell_8[1] = true;
        console.log(state.value.cell_8);
        state.count++;
    }
}
function selectFunc9() {
    if (state.value.cell_9[1] === false  && state.play === true) {
        if (state.sign === '') {
            state.sign = 'X';
        } else if ( state.sign === 'X') {
            state.sign = 'O';
        } else if (state.sign === 'O') {
            state.sign = 'X';
        }
        document.querySelector('#cell-9').textContent = state.sign;
        var cell9 = document.getElementById('cell-9').textContent;
        state.value.cell_9[0] = cell9;
        state.value.cell_9[1] = true;
        console.log(state.value.cell_9);
        state.count++;
    }
}

function logic() {
    if (( state.value.cell_1[0] === 'X' && state.value.cell_2[0] === 'X' && state.value.cell_3[0] === 'X')
    ||  ( state.value.cell_1[0] === 'X' && state.value.cell_4[0] === 'X' && state.value.cell_7[0] === 'X')
    ||  ( state.value.cell_1[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_9[0] === 'X')
    ||  ( state.value.cell_7[0] === 'X' && state.value.cell_8[0] === 'X' && state.value.cell_9[0] === 'X')
    ||  ( state.value.cell_7[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_3[0] === 'X')
    ||  ( state.value.cell_3[0] === 'X' && state.value.cell_6[0] === 'X' && state.value.cell_9[0] === 'X')
    ||  ( state.value.cell_2[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_8[0] === 'X')
    ||  ( state.value.cell_4[0] === 'X' && state.value.cell_5[0] === 'X' && state.value.cell_6[0] === 'X')) {
        var res = document.querySelector('.result').innerHTML = "X win";
        console.log("X win");
        state.play = false;
    } else if (
        ( state.value.cell_1[0] === 'O' && state.value.cell_2[0] === 'O' && state.value.cell_3[0] === 'O')
    ||  ( state.value.cell_1[0] === 'O' && state.value.cell_4[0] === 'O' && state.value.cell_7[0] === 'O')
    ||  ( state.value.cell_1[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_9[0] === 'O')
    ||  ( state.value.cell_7[0] === 'O' && state.value.cell_8[0] === 'O' && state.value.cell_9[0] === 'O')
    ||  ( state.value.cell_7[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_3[0] === 'O')
    ||  ( state.value.cell_3[0] === 'O' && state.value.cell_6[0] === 'O' && state.value.cell_9[0] === 'O')
    ||  ( state.value.cell_2[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_8[0] === 'O')
    ||  ( state.value.cell_4[0] === 'O' && state.value.cell_5[0] === 'O' && state.value.cell_6[0] === 'O')) {
        var res = document.querySelector('.result').innerHTML = "O win";
        console.log("O win");
        state.play = false;
    }
    var timer = setTimeout(logic, 100);
    if (state.count === 9 && state.play === true) {
        var res = document.querySelector('.result').innerHTML = "Draw";
        console.log("Draw");
        state.play = false;
    }
    if (res === 'X win' || res === 'O win') {
        clearTimeout(timer);
    } else if (res === 'Draw') {
        clearTimeout(timer);
    }
}

logic();


