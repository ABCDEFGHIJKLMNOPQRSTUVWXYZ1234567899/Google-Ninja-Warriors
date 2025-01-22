    function openInIframe(url) {
      const newWindow = window.open('about:blank', '_blank');


      if (newWindow) {


        newWindow.document.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>My Drive - Google Drive</title>
                        <link rel="icon" type="image/x-icon" href="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png">
                        <style>
                            body {
                                margin: 0;
                                padding: 0;
                            }
                            iframe {
                                width: 100%;
                                height: 100vh;
                                border: none;
                            }
                        </style>
                    </head>
                    <body>
                        <iframe src="${url}" frameborder="0"></iframe>
                    </body>
                    </html>
                `);


        newWindow.document.close();
      } else {
        alert('Failed to open new window. Please allow pop-ups in your browser.');
      }
    }
