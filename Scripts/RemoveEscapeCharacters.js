// JavaScript to hide specific escape characters
function RemoveEscapeCharacters() {
    
    console.log("Hit hit hit!!!");
    
    // Get all code blocks on the page
    const codeBlocks = document.querySelectorAll('pre code');

    // Loop through each code block
    codeBlocks.forEach((block) => {
        // Use regex to find sequences of escape characters followed by [ ] < >
        const newText = block.innerHTML.replace(/\\([\[\]<>])/g, '<span style="visibility: hidden;">\\</span>$1');
        block.innerHTML = newText;
    });
}

