import { Flex, Box, SimpleGrid } from "@chakra-ui/react"
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return(
        <SimpleGrid minChildWidth="100%">
            <Box>
                <Navbar />
            </Box>
            <Box marginBottom='500px' bg="white" px={[5, 5, 10, 10]} py={[2.5, 2.5, 5, 5]} height="85vh">
                { children }
            </Box>
            <Box bg="gray.200" height="7.5vh" pos='fixed' bottom={0} w='100%'>
                <Footer />
            </Box>
        </SimpleGrid>
    )
}

export default Layout