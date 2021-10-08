import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/layout";

import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.lg">
        <Header />
        <Hero />
      </Container>
    </ChakraProvider>
  );
}

export default App;