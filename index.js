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
