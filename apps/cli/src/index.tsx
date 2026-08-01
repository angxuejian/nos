#!/usr/bin/env node
import { render, Text } from "ink";


function App() {
  return (
    <Text color="red">
      Hello NOS CLI 🚀
    </Text>
  );
}


render(<App />);