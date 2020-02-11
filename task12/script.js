'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    сreateDiv() {
        let div = document.createElement('div');
        div.innerText = `Любой текст!`;
        document.body.appendChild(div);
        div.style.cssText = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    }
}

const newDiv = new Options(300, 350, "red", 14, "center");

newDiv.сreateDiv();