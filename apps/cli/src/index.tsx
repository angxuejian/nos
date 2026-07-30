#!/usr/bin/env node
import { render, Text } from "ink";
console.log('testing ~~')
function App() {
  return (
    <Text>
      Hello NOS CLI 🚀
    </Text>
  );
}


render(<App />);