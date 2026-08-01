#!/usr/bin/env node
import { render, Text } from "ink";


function App() {
  return (
    <Text color="blue">
      Hello NOS CLI 🚀 
    </Text>
  );
}


render(<App />);