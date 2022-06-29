function SplitText(node) {
    const text = node.nodeValue.replace(/^\s*|\s(?=\s)|\s*$/g, "");

    for (let i = 0; i < text.length; i++) {
        const letter = document.createElement("span");
        letter.style.display = "inline-block";
        letter.style.position = "absolute";
        letter.appendChild(document.createTextNode(text.charAt(i)));
        node.parentNode.insertBefore(letter, node);

        const positionRatio = i / (text.length - 1);
        const textWidth = letter.clientWidth;

        const indent = 100 * positionRatio;
        const offset = -textWidth * positionRatio;
        letter.style.left = indent + "%";
        letter.style.marginLeft = offset + "px";

        //console.log("Letter ", text[i], ", Index ", i, ", Width ", textWidth, ", Indent ", indent, ", Offset ", offset);
    }

    node.parentNode.removeChild(node);
}

function Justify() {
    const TEXT_NODE = 3;
    console.log("test1")
    let elem = document.getElementById("character_justify");
    elem = elem.firstChild;

    while (elem) {
        const nextElem = elem.nextSibling;

        if (elem.nodeType === TEXT_NODE)
            SplitText(elem);

        elem = nextElem;
    }
}