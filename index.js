/* document.addEventListener("click", function () {
    // Open a new tab with about:blank
    const newTab = window.open("about:blank");

    // Ensure the new tab is loaded
    if (newTab) {
        // Set the URL of the new tab to a gaming website
        newTab.location.href = "https://www.poki.com";
    }

    // Redirect the current tab to Google Classroom
    window.location.href = "https://classroom.google.com";
});
*/

/* document.addEventListener("click", function () {
    // Open a new tab with about:blank
    const newTab = window.open("about:blank");

    // Ensure the new tab is opened
    if (newTab) {
        // Write an iframe pointing to poki.com inside the new tab
        newTab.document.write(`
            <!DOCTYPE html>
            <html>
            <head><title>about:blank</title></head>
            <body style="margin:0;">
                <iframe src="https://classroom.google.com" style="width:100%; height:100%; border:none;"></iframe>
            </body>
            </html>
        `);
        newTab.document.close();
    }

    // Redirect the current tab to Google Classroom
    window.location.href = "https://classroom.google.com";
});
*/

/* document.addEventListener("click", function () {
    // Open a new tab with about:blank
    const newTab = window.open("about:blank");

    // Ensure the new tab is opened
    if (newTab) {
        // Write an iframe pointing to poki.com inside the new tab
        newTab.document.write(`
            <!DOCTYPE html>
            <html>
            <head><title>about:blank</title></head>
            <body style="margin:0;">
                <iframe src="https://poki.com" style="width:100%; height:100%; border:none;"></iframe>
            </body>
            </html>
        `);
        newTab.document.close();
    }

    // Redirect the current tab to display an iframe with Poki.com
    document.body.innerHTML = `
        <iframe src="https://poki.com" style="width:100%; height:100%; border:none;"></iframe>
    `;
});
*/

/* document.addEventListener("click", function () {
    // Open a new tab with about:blank
    const newTab = window.open("about:blank");

    // Ensure the new tab is opened
    if (newTab) {
        // Write an iframe pointing to Poki.com inside the new tab
        newTab.document.write(`
            <!DOCTYPE html>
            <html>
            <head><title>about:blank</title></head>
            <body style="margin:0;">
                <iframe src="https://thebeta.duckdns.org" display:center;"></iframe>
            </body>
            </html>
        `);
        newTab.document.close();
    }

    // Replace the current tab's content with an iframe pointing to Poki.com
    document.body.innerHTML = `
        <iframe src="https://thebeta.duckdns.org" display:center; position:absolute; height:300px; width: 200px"></iframe>
    `;

    // Add a delay before redirecting to Google Classroom
    setTimeout(() => {
        window.location.href = "https://classroom.google.com";
    }, 2000); // Delay of 2 seconds
});
*/
document.addEventListener("click", function () {
    // Prompt the user for a password
    const password = prompt("Enter the password to proceed:");

    // Check if the password is correct
    if (password === "neerhad123") {
        // Open a new tab with about:blank
        const newTab = window.open("about:blank");

        // Ensure the new tab is opened
        if (newTab) {
            // Write an iframe pointingin the new tab
            newTab.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>about:blank</title>
                    <style>
                        body, html {
                            margin: 0;
                            padding: 0;
                            overflow: hidden;
                            height: 100%;
                            width: 100%;
                        }
                        iframe {
                            width: 100%;
                            height: 100%;
                            border: none;
                        }
                    </style>
                </head>
                <body>
                    <iframe src="https://thebeta.duckdns.org/"></iframe>
                </body>
                </html>
            `);
            newTab.document.close();
        }

        // Replace the current tab's content with an iframe
        setTimeout(() => {
            window.location.href = "https://classroom.google.com";
        }, 100);
    } else {
        // If the password is incorrect, show an alert and do nothing
        alert("Incorrect password. Access denied.");
    }
});