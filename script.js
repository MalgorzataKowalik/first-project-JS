let divNum = 0;

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const divElement = document.createElement('div');
    divElement.textContent = ++divNum;
    document.body.appendChild(divElement);
    if ((divNum % 5) == 0) {divElement.classList.add('circle')};
});