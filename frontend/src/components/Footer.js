import { Flex, Box, Text, Link } from '@chakra-ui/layout'
import React from 'react'

function Footer() {
    return (
        <Flex borderTop="1px" mt="5" bottom="5" position="fixed">
            <Box mt="5">
                <Text>Made with ❤ by <b><Link href="https://github.com/JustinOleskii" color="red.500" isExternal>JustinOleskii</Link></b></Text>
            </Box>
        </Flex>
    )
}

export default Footer
