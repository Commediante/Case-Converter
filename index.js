const upper = document.getElementById("upper-case");
const lower = document.getElementById("lower-case");
const proper = document.getElementById("proper-case");
const sentence = document.getElementById("sentence-case");
const saveTextFile = document.getElementById("save-text-file")
const text = document.getElementById("text");

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

upper.addEventListener("click", () => {
    text.value = text.value.toUpperCase();
});

lower.addEventListener("click", () => {
    text.value = text.value.toLowerCase();
});

proper.addEventListener("click", () => {
    text.value = text.value.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
});

sentence.addEventListener("click", () => { // this function needs to make first letters of words small too!
    text.value = text.value.toLowerCase().split('. ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('. ')
        .split('? ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('? ')
        .split('! ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('! ');
});

saveTextFile.addEventListener("click", () => {
    download("text", text.value)
});