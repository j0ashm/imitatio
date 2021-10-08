import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/layout";
import theme from "./theme";

import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg">
        <Header />
      </Container>
    </ChakraProvider>
  );
}

export default App;