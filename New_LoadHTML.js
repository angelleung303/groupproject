function LoadHTML(htmlfile, targetdiv) {
    fetch(htmlfile)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetdiv).innerHTML = data;
        });
}