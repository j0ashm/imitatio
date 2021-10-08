import React from 'react'
import { Button, IconButton } from '@chakra-ui/button'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { FaMoon } from 'react-icons/fa'
import { BsFillSunFill } from 'react-icons/bs'

function Header() {
    const { colorMode, toggleColorMode } = useColorMode()
    const icons = useColorModeValue(<FaMoon />, <BsFillSunFill />)

    return (
        <Flex mt="5" borderBottom="1px" pb="3">
            <Box>
                <Heading size="lg">imitatio</Heading>
            </Box>
            <Spacer />
            <Box>
                <Button mr="4" colorScheme="pink" variant="outline">Upload</Button>
                <IconButton icon={icons} variant="ghost" onClick={toggleColorMode}/>
            </Box>
        </Flex>
    )
}

export default Header
