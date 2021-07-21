import { extendTheme } from '@chakra-ui/react'

const colors = {
    brand: {
        100: '#0a81ab'
    }
}

const configs = {
    initialColorMode: "light",
    useSystemColorMode: true,
}

const theme = extendTheme({
    colors,
    configs,
})

export default theme