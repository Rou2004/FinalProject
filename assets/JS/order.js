function finish(element) {
    var parentDiv = element.parentNode;
    var withdrawLink = parentDiv.querySelector('.withdraw');
    var finishLink = parentDiv.querySelector('.finish');
    if (withdrawLink) {
        withdrawLink.classList.add('comment');
        withdrawLink.removeAttribute('href');
        withdrawLink.innerText = '評論';
        withdrawLink.onclick = onClickFunction;
    }
    finishLink.classList.add('disabled-link');
    finishLink.removeAttribute('href');
}

function onClickFunction() {
    window.location.href = 'comment.html';
    return false;
}
