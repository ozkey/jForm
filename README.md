yarn build

# Type check without emitting
yarn typecheck
```

## Project Structure
```
public/          # Static assets and HTML template
src/             # Source code
  components/    # Reusable UI components
  App.tsx        # Root app with routes
  index.tsx      # Entry point
webpack.config.js
```

## Next Steps
- Add additional routes/pages.
- Introduce state management if needed.
- Add unit tests (Jest / React Testing Library).
{
  "compilerOptions": {
    "target": "ES2019",
    "module": "ESNext",
    "jsx": "react-jsx",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}

