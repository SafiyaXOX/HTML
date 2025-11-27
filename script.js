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

function switchEditor(editor) {
    // Available values for editor: 'html', 'css', 'js'
    if (editor === 'html') {
        window.open('Editors/html-editor.html', '_blank');
    } else if (editor === 'css') {
        window.open('Editors/css-editor.html', '_blank');
    } else if (editor === 'js') {
        window.open('Editors/js-editor.html', '_blank');
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

// ============== JavaScript for JS Editor (Editors/js-editor.html) ==============

function runJSCode() {
    const jsCode = document.getElementById('js-code').value;
    const outputFrame = document.getElementById('output-frame');
    const frameDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;

    // Wrap the user's code to capture and display console.log output
    // We'll override console.log and write to the frame body
    const customConsole =
        `
        <script>
            (function(){
                var log = [];
                var originalLog = console.log;
                console.log = function() {
                    var args = Array.from(arguments);
                    log.push(args.map(function(v){
                        try { 
                            return typeof v === 'object' ? JSON.stringify(v) : v; 
                        } catch(e) { 
                            return String(v); 
                        }
                    }).join(' '));
                    originalLog.apply(console, arguments);
                }
                try {
                    ${jsCode}
                } catch(err) {
                    log.push("Error: " + err);
                }
                document.body.innerHTML = "<pre style='font-family:monospace; color:#222;'>" + log.join('\\n') + "</pre>";
            })();
        <\/script>
        `;

    // Write content to the iframe
    frameDocument.open();
    frameDocument.write(`<html><head></head><body></body>${customConsole}</html>`);
    frameDocument.close();
}

// Clear JS code area and output iframe
function clearJSCode() {
    document.getElementById('js-code').value = '';
    const outputFrame = document.getElementById('output-frame');
    const frameDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;
    frameDocument.open();
    frameDocument.write('<html><head></head><body></body></html>');
    frameDocument.close();
}

// Load an example JS code
function loadJSExample() {
    const exampleCode = 
`// Example: Simple Calculation and Output
const name = "JavaScript Student";
console.log("Hello, " + name + "!");
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("The sum of numbers 1 to 5 is:", sum);
console.log({purpose: "Show object output", working: true});
`;
    document.getElementById('js-code').value = exampleCode;
    runJSCode();
}

// Allow running JS with Ctrl+Enter (or Cmd+Enter on Mac)
document.addEventListener('DOMContentLoaded', function() {
    const jsEditor = document.getElementById('js-code');
    if (jsEditor) {
        jsEditor.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                runJSCode();
            }
        });
    }
});

