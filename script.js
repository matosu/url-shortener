function encurtarURL() {
    // Validar se o link existe...
    let url = document.getElementById("input-url").value;
    if (!url) {
        alert("É preciso uma URL para encurtar o link!");
        return;
    }

    let headersRequest = {
        "Content-Type": "application/json",
        "apikey": "4d4e526e6b444f4da5713b8402097d51"
    }

    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headersRequest,
        body: JSON.stringify(linkRequest)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let inputUrl = document.getElementById("input-url");
        inputUrl.value = json.shortUrl;
    });
}

function copiarURL() {
    let inputUrl = document.getElementById("input-url");
    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputUrl.value);
    alert(`URL copiada: ${inputUrl.value}`);
}