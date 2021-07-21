import { useState,useEffect } from 'react'
import { client } from '../../client/client'
import { Box, Flex, Image, HStack, StackDivider, Input, InputGroup, Icon, InputLeftAddon } from '@chakra-ui/react'
import { MdShoppingCart } from 'react-icons/md'


const Product = ({ product }) => {
    const [ image, setImage ] = useState(product.images[0])

    console.log(image);
    return (
        <Flex
            flexDir='row'
            flexWrap='wrap'
        >
            <Box
               w={['100%', '100%', '60%', '60%', ]} s
               marginEnd={[0, 0, 10, 10]}
               padding={15}
            >
                
                <Image 
                    src={image.src}
                    boxSize={[ '20em', '20em', '25em', '30em']} 
                    marginX='auto'
                />
                <HStack
                    divider={<StackDivider borderColor="gray.200" />}
                    h={[50, 50, 100, 200]}
                    my={5}
                    justify='center'
                >
                    { product.images.length > 1 ? product.images.map((image, index)=>(
                        <Box
                            size='sm'
                            onClick={()=> setImage(image)} 
                            cursor='pointer'
                        >
                            <Image key={index} src={image.src} boxSize={[ '5em', '5em', '8em', '12em']} />
                        </Box>
                    )): ''}
                </HStack>
            </Box>
            <Box
                border='1px solid'
                w={['100%', '100%', '30%', '30%', ]} 
                padding={15}
            >
                <InputGroup>
                    <InputLeftAddon
                        as='a'
                        colorScheme='teal'
                        leftIcon={<Icon as={MdShoppingCart} />}
                        children='Checkout'
                    />                    
                    <Input type="tel" placeholder="Phone number" />
                </InputGroup>
 
            </Box>
        </Flex>
    )
}

export async function getServerSideProps({ query }) {
    const productId = query.productId
    const product = await client.product.fetch(productId)
    console.log({product});
    return {
      props: {
        product: JSON.parse(JSON.stringify(product)) 
      }
    }
}

export default Product