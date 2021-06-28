document.querySelector('#open').addEventListener('click', () => {
    if (document.querySelector('#ul').style.display != 'none') {
        document.querySelector('#ul').style.display = 'none';
        document.querySelector('#open').style.display = 'inline';
    } else {
        document.querySelector('#ul').style.display = 'inline';
        document.querySelector('#close').style.display = 'inline';
        document.querySelector('#open').style.display = 'none';
    }
})