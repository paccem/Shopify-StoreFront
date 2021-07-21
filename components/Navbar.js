import React from 'react'
import { 
        Flex, 
        Box, 
        Heading, 
        Spacer, 
        Button,
        Icon,
        useDisclosure,
        IconButton,
        Collapse,
} from "@chakra-ui/react"
import Link from 'next/link'
import { MdShoppingCart, MdAccountBox, MdMenu } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure()

    return(
        <Flex
            w='100%'
            justify='space-between'
            px={[15, 15, 30, 30]}
            align='center'
            h={['60px', '60px', '80px', '80px']}
            bg='gray.200'
        >
            <Box>
                <Link href='/' passHref>
                    <Heading as='a' size="md">Elixir</Heading>
                </Link>
            </Box>
            <Spacer />
            <Box>
                <Flex
                    display={['none', 'none', 'flex', 'flex']}
                    align="center"
                > 
                    <Link href='/cart' passHref>
                        <Button
                            as='a'
                            variant='ghost'
                            me={3}
                            leftIcon={<Icon as={MdShoppingCart} />}
                        >
                           Cart 
                        </Button>
                    </Link>
                    <Link href='/account' passHref>
                        <Button
                            as='a'
                            variant='ghost'
                            me={3}
                            leftIcon={<Icon as={MdAccountBox} />}
                        >
                            Account
                        </Button>
                    </Link>
                </Flex>
                <Flex
                    display={['flex', 'flex', 'none', 'none']}
                    flex='flex-end'
                >   
                    <IconButton 
                        icon={<Icon as={isOpen ? IoClose : MdMenu} />}
                        onClick={onToggle}
                    />
                    <Collapse in={isOpen} animateOpacity>
                        <Flex
                            pos='absolute'
                            w='100%'
                            mt="50px"
                            bg="gray.200"
                            right={0}
                            p={5}
                            flexDir='column'
                        >
                            <Link href='/cart' passHref>
                                <Button
                                    as='a'
                                    variant='ghost'
                                    mb={3}
                                    leftIcon={<Icon as={MdShoppingCart} />}
                                    onClick={onToggle}
                                >
                                Cart 
                                </Button>
                            </Link>
                            <Link href='/account' passHref>
                                <Button
                                    as='a'
                                    variant='ghost'
                                    mb={3}
                                    leftIcon={<Icon as={MdAccountBox} />}
                                    onClick={onToggle}
                                >
                                    Account
                                </Button>
                            </Link>
                        </Flex>
                    </Collapse>
                </Flex>
            </Box>
        </Flex>
    )
}
export default Navbar


