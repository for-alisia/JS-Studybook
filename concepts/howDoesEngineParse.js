// How does Engine parse JS code:

/**
 * 1. Parser - Lexical analys
 * 2. AST - Abstract Syntax Tree (play with it on astexplorer.net)
 * 3. Interpreter (line by line converting) -> Bytecode (not understandable by machine directly)
 * 4. Profiler (Monitor) - go through code and try to detect how to optimize it
 * 5. JIT - Just in Time compiler - optimize existing code
 */

// For optimization reasons we should be careful with:

/**
 *  eval();
 *  arguments
 *  for ... in (use Object.keys instead)
 *  with
 *  delete
 */

/** Hidden classes - reduces perfomance */
// Example
function someClass(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new someClass(2, 3);
const obj2 = new someClass(4, 5);

// This line will confuse engine and slow down it (different order)
obj1.a = 20;
obj1.b = 12;
obj2.b = 20;
obj2.a = 12;

// The same for delete
delete obj1.x = 30;

// Read about hidden classes and optimizations
// https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html
