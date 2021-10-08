import React from 'react'
import { VStack, Spacer, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'

function Hero() {
    return (
        <VStack spacing="5px">
            <Box boxSize="md" mt="50">
                <Image src="https://img.justinoleski.dev/uploads/upload.svg" type="eager"></Image>
            </Box>
            <Button size="lg" colorScheme="pink">Get Started</Button>
        </VStack>
    )
}

export default Hero
