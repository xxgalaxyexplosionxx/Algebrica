// Algebrica Interpreter

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Object to store custom libraries
const libraries = {};

// Define the interpreter function
// Define the interpreter function
function interpret(input) {
  try {
    // Replace any '×' with '*' for multiplication
    const sanitizedInput = input.replace(/×/g, '*');

    // Check if the input is an import statement
    if (sanitizedInput.startsWith('import')) {
      const libraryName = sanitizedInput.split(' ')[1];
      importLibrary(libraryName);
      return;
    }

    // Check if the input contains JavaScript code blocks
    if (sanitizedInput.includes('{') && sanitizedInput.includes('}')) {
      // Evaluate JavaScript code inside the Algebrica expression
      const result = evalWithJavaScript(sanitizedInput);
      if (result !== undefined) {
        console.log(result);
      }
    } else {
      // Evaluate the expression as normal Algebrica code
      const result = eval(sanitizedInput);
      if (result !== undefined) {
        console.log(result);
      }
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}


// Evaluate Algebrica code containing JavaScript blocks
function evalWithJavaScript(code) {
  // Replace Algebrica code blocks with JavaScript code blocks
  const jsCode = code.replace(/{/g, '').replace(/}/g, '');

  // Use eval to evaluate the JavaScript code
  const result = eval(jsCode);
  return result;
}

// Import a custom library from file
function importLibrary(libraryName) {
  try {
    // Get the absolute path to the library file
    const libraryFilePath = path.join(__dirname, 'src', 'lib', `${libraryName}.alg`);

    // Load the content of the library file
    const libraryContent = fs.readFileSync(libraryFilePath, 'utf8');

    // Store the library content in the libraries object
    libraries[libraryName] = libraryContent;
    console.log(`Library "${libraryName}" imported successfully.`);
  } catch (error) {
    console.error(`Error importing library "${libraryName}": ${error.message}`);
  }
}

// Read and interpret Algebrica code from a file
function readCodeFromFile(filename) {
  try {
    const code = fs.readFileSync(filename, 'utf8');
    const lines = code.split('\n');
    lines.forEach((line) => {
      interpret(line);
    });
  } catch (error) {
    console.error(`Error reading or interpreting the file: ${error.message}`);
  }
}

// Start reading and interpreting Algebrica code from index.alg
readCodeFromFile('index.alg');
