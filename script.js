let colAddress = document.getElementById("col-address");
const bold = document.getElementById("bold");
bold.addEventListener("click",boldText);
const italic = document.getElementById("italic");
italic.addEventListener("click",italicText);
const underline = document.getElementById("underline");
underline.addEventListener("click",textUnderline);
const fontTextColor = document.getElementById("text-color");
fontTextColor.addEventListener("change",textColor);
const fontBGColor = document.getElementById("bg-color");
fontBGColor.addEventListener("change",bgColor);
const textAlignLeft = document.getElementById("left-align");
textAlignLeft.addEventListener("click",leftAlign);
const textAlignRight = document.getElementById("right-align");
textAlignRight.addEventListener("click",rightAlign);
const textAlignCenter = document.getElementById("center-align");
textAlignCenter.addEventListener("click",centerAlign);
const fontSize = document.getElementById("font-size");
fontSize.addEventListener("click", textSize);
const fontFamily = document.getElementById("font-family");
fontFamily.addEventListener("click", textFamily);

const cut = document.getElementById("cut");
cut.addEventListener("click",cutText);
const copy = document.getElementById("copy");
copy.addEventListener("click",copyText);
const paste = document.getElementById("paste");
paste.addEventListener("click",pasteText);
let currentCell;
let copyPaste = {
    styleText:"",
    colText:""
}
for(let i=65; i<=90; i++){
    let th = document.createElement("th");
    th.innerText = String.fromCharCode(i);
    colAddress.appendChild(th);
}

let tableBody = document.getElementById("table-body");

for(let i=1; i<=100; i++){
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.innerText = i;
    tr.appendChild(th);

    for(let j=1; j<=26; j++){
        let td = document.createElement("td");
        td.setAttribute("id", `${String.fromCharCode(j+64)}${i}`);
        td.setAttribute("contenteditable", true);
        td.addEventListener("focus", (event) => {onFocusEventCall(event)});
        tr.appendChild(td);
    }
    tableBody.appendChild(tr);
}

function onFocusEventCall(event){
    currentCell = event.target;
    document.getElementById("display-address").innerText = currentCell.id;
}

function boldText(){
    if(currentCell.style.fontWeight!=="bold"){
        currentCell.style.fontWeight = "bold";
    }
    else{
        currentCell.style.fontWeight = "normal";
    }
}

function italicText(){
    if(currentCell.style.fontStyle!=="italic"){
        currentCell.style.fontStyle = "italic";
    }
    else{
        currentCell.style.fontStyle = "normal";
    }
}

function textUnderline(){
    if(currentCell.style.textDecoration!=="underline"){
        currentCell.style.textDecoration = "underline";
    }
    else{
        currentCell.style.textDecoration = "none";
    }
}

function textColor(){
    let val = fontTextColor.value;
    currentCell.style.color = val;
}

function bgColor() {
    let val = fontBGColor.value;
    currentCell.style.backgroundColor = val;
}

function leftAlign (){
    currentCell.style.textAlign = "left";
}

function centerAlign() {
    currentCell.style.textAlign = "center";
}

function rightAlign() {
    currentCell.style.textAlign = "right";
}

function textSize() {
    currentCell.style.fontSize = "" + fontSize.value + "px";
}

function textFamily() {
    currentCell.style.fontFamily = fontFamily.value;
}

function cutText() {
    copyText();
    currentCell.style = null;
    currentCell.innerText = "";
}

function copyText() {
    copyPaste.styleText = currentCell.style.cssText;
    copyPaste.colText = currentCell.innerText;
}

function pasteText() {
    currentCell.style = copyPaste.styleText;
    currentCell.innerText = copyPaste.colText;
}