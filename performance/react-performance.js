// 1. Measure performance in production build
// 2. Normal prod build (webpack or rollup), terser (ex uglify)
// 3. Minify all files
// 4. Use React Profiler
// 5. react-window or react-virtualized for long lists (BE pagination as an option)
// 6. Use normal keys for lists (not indexes)
// 7. For classes: shouldComponentUpdate (manually written or just use React.PureComponent as a parent - shallow compare prevProps and props)
// 8. Use React.lazy + Suspense for code splitting
// 9. useMemo for expensive operations
// 10. React.memo (the same as PureComponent) - second argument can be comparison function - will re-render anyway if component has useState, useReducer...
