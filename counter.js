const incrementer = document.getElementById('Incrementer');

const counter = document.getElementById('counter');
let count = 0;
incrementer.addEventListener("click", () => {
    count++;
    counter.textContent = count;
})



