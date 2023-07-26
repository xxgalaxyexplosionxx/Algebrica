# Algebrica 

The Algebrica is a simple coding language designed for doing math. It supports basic arithmetic operations, custom libraries, and JavaScript code blocks to provide mathematical capabilities and flexibility.

## Getting Started

1. Clone the repository to your local machine:

```bash
git clone https://github.com/xxgalaxyexplosionxx/Algebrica
```
1. Navigate to the project directory:

```bash
cd Algebrica
```

2. Install the dependencies:
```bash
npm install
```

Add your Algebrica code to the `index.alg file.`

## Usage

To run the Algebrica interpreter and execute your code, use the following command:

```bash
npm start
```

The interpreter will read the Algebrica code from index.alg, import custom libraries from src/lib, and display the output of each expression.

## Custom Libraries

You can create custom libraries to store reusable code snippets in the src/lib folder. Each library should be a separate .alg file, defining functions, constants, or other reusable elements. To import a library, use the import statement in your Algebrica code:

```alg
// index.alg

import mathlib;

let x = 5;
let y = 10;
let result = add(x, y);
result; // Should evaluate to 15
```

### JavaScript Code Blocks

The interpreter supports JavaScript code blocks within Algebrica expressions. To include JavaScript code, wrap it in curly braces {}:

```
// index.alg

let x = 5;
let y = 10;
{
  x + y;
}
```
## Contributing

Contributions to the Algebrica Interpreter are welcome! If you find a bug, have a suggestion, or want to add new features, feel free to open an issue or submit a pull request.

# License

This project is licensed under the MIT License.

# Happy Coding!
