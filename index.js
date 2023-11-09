class Box {
    constructor() {

        this.container = document.createElement("div");
        this.container.className = 'container';

        this.input1 = document.createElement('input');
        this.input2 = document.createElement('input');

        this.input1.type = 'text';
        this.input2.type = 'number';

        this.buttonUp = document.createElement('button');
        this.buttonDown = document.createElement('button');
        this.buttonDelete = document.createElement('button');
        this.buttonUp.innerText = '↑';
        this.buttonDown.innerText = '↓';
        this.buttonDelete.innerText = '⨉';
        this.buttonUp.style.width = '20px';
        this.buttonDown.style.width = '20px';
        this.buttonDelete.style.width = '20px';

        this.container.appendChild(this.input1);
        this.container.appendChild(this.input2);
        this.container.appendChild(this.buttonUp);
        this.container.appendChild(this.buttonDown);
        this.container.appendChild(this.buttonDelete);


        this.buttonDelete.addEventListener('click', this.move.bind(this));
        this.buttonUp.addEventListener('click', this.moveUp.bind(this));
        this.buttonDown.addEventListener('click', this.moveDown.bind(this));

    }


    move() {
        this.container.remove();
    }
    moveUp() {

        var pre = this.container.previousElementSibling;
        if (pre) {
            pre.before(this.container);
        }
    }
    moveDown() {
        var next = this.container.nextElementSibling

        if (next) {
            next.after(this.container);
        }
    }
}

function addSheet() {
    var field = document.getElementById('addedField');

    var box = new Box();

    field.appendChild(box.container);
}
function outputData() {

    var content = '';

    var containers = document.querySelectorAll('.container');

    containers.forEach((container) => {

        var text = container.firstChild.value;

        var num = container.firstChild.nextSibling.value;

        content += `"${text}":"${num}",`;
    })

    var str = content;
    var newStr = str.slice(0, -1);

    document.getElementById('outPut').innerHTML = '{' + newStr + '}';

}
