document.addEventListener("click", function () {
        const newTab = window.open('about:blank', '_blank');

        if (newTab) {
            newTab.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>My Drive - Google Drive</title>
                    <link rel="icon" type="image/x-icon" href="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png">
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
                this.location.replace('https://classroom.google.com/u/0/');
        }, 100);
    }
});
