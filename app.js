window.addEventListener('DOMContentLoaded', init);
const options = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0']
const specials = ['+', '-', '*', '/']

function init() {
    console.log('ready');
    document.title = "Javascript Calculator";
    let decimal = false;
    let equals = false;

    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '600px';
    container.style.margin = 'auto';
    document.body.appendChild(container);

    const output = document.createElement('input');
    output.setAttribute('type', 'text');
    output.classList.add('output');
    output.style.width = '100%';
    output.style.lineHeight = '50px';
    output.style.fontSize = '3em';
    output.style.textAlign = 'right';
    container.appendChild(output);

    const main = document.createElement('div');
    main.classList.add('main');
    main.style.width = '100%';
    container.appendChild(main);
    options.forEach(function (value) {
        // console.log(value);
        btnMaker(value, addOutput);
    })
    btnMaker('=', equalslOutput);
    btnMaker('C', clearOutput);

    function colorOutput(v) {
        output.style.border = v + ' 1px solid';
        output.style.color = v;
    }

    function equalslOutput() {
        console.log('=');
        colorOutput('black');
        if (output.value === "") {
            colorOutput('red');
        } else if (equals) {
            colorOutput('red');
        } else {
            output.value = equalsl(output.value);
        }
        decimal = output.value.includes('.');
    }

    function clearOutput() {
        console.log('C');
        colorOutput('black');
        output.value = '';
    }

    function btnMaker(txt, myFunction) {
        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.style.width = '23%';
        btn.style.lineHeight = '50px';
        btn.style.margin = '1%';
        btn.style.fontSize = '2em';
        btn.value = txt;
        btn.textContent = txt;
        btn.addEventListener('click', myFunction);
        main.appendChild(btn);
    }

    function addOutput(e) {
        console.log(decimal);
        colorOutput('black');
        console.log(e.target.value);
        let char = e.target.value;

        if (char == '.') {
            if (decimal) {
                char = '';
                colorOutput('red')
            } else {
                decimal = true;
            }
        }

        equals = specials.includes(char);
        if (equals) {
            decimal = false;
        }
        output.value += char;
    }
}