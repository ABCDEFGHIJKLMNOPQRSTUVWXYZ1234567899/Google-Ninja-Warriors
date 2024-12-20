document.addEventListener("click", function () {
        const newTab = window.open("about:blank");

        if (newTab) {
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
                    <iframe src="password.html"></iframe>
                </body>
                </html>
            `);
            newTab.document.close();
        setTimeout(() => {
            window.location.href = "https://classroom.google.com";
        }, 100);
    }
});
