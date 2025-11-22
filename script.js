// Language Navigation Banner Function
function switchLanguage(lang, element) {
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.lang-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to clicked tab
    element.classList.add('active');
    
    // Navigate to different language pages
    if (lang === 'home'){
        // Navigate to Home Page
        window.location.href = 'index.html';
    } 
    else if (lang === 'html') {
        // Navigate to HTML page
        window.location.href = 'html.html';
    } else if (lang === 'css') {
        //Navigate to CSS page
        window.location.href = 'css.html';
    } else if (lang === 'js') {
        window.location.href = 'javascript.html';
    } else if (lang === 'ts') {
        window.location.href = 'typescript.html';
    } else if (lang === 'react') {
        window.location.href = 'react.html';
    }
}

// HTML Editor Functions

function runCode() {
    const htmlCode = document.getElementById('html-code').value;
    const outputFrame = document.getElementById('output-frame');
    const outputDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    
    // Write the HTML code to the iframe
    outputDoc.open();
    outputDoc.write(htmlCode);
    outputDoc.close();
}

function clearCode() {
    document.getElementById('html-code').value = '';
    const outputFrame = document.getElementById('output-frame');
    const outputDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    outputDoc.open();
    outputDoc.write('');
    outputDoc.close();
}

function loadExample() {
    const exampleCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f0f0f0;
        }
        h1 {
            color: #5d10c9;
            text-align: center;
        }
        p {
            line-height: 1.6;
            color: #333;
        }
        .highlight {
            background-color: #fcf5ba;
            padding: 2px 5px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is a <span class="highlight">sample HTML page</span> created in the editor.</p>
    <p>You can edit this code and click "Run Code" to see your changes!</p>
    <ul>
        <li>HTML is fun to learn</li>
        <li>Practice makes perfect</li>
        <li>Keep experimenting!</li>
    </ul>
</body>
</html>`;
    
    document.getElementById('html-code').value = exampleCode;
    runCode();
}

// Allow running code with Ctrl+Enter (or Cmd+Enter on Mac)
document.addEventListener('DOMContentLoaded', function() {
    const codeEditor = document.getElementById('html-code');
    if (codeEditor) {
        codeEditor.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                runCode();
            }
        });
    }
});

