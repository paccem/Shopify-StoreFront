import React from 'react'
import { Flex, Box, Text, SimpleGrid, Image, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { client } from '../client/client'

export default function Home({ products }){

  console.log(products);
  return (
    <Flex
      paddingBottom='120px'
    >
      <SimpleGrid
        columns={[2, 2, 3, 4]}
        spacing={[5, 10, 15, 20]}
        h='70hv'
      >
        { products.map(product => {
          return(
            <Link href={`/product/${product.id}`}>
              <Box
                shadow='md'
                maxW="sm" 
                borderWidth="1px" 
                borderRadius="lg" 
                overflow="hidden"
                cursor="pointer"
              >
                <Image 
                  src={ product.images[0].src } 
                  boxSize={[ '10em', '10em', '18em', '25em']}
                  w='100%' 
                  py={5} 
                />
                <Box
                  marginX='10px'
                  h='100px'
                  isTruncated
                >
                  <Heading as='h5' size='sm' textTransform='capitalize'>{product.title}</Heading>
                  <Text paddingTop='10px'>{product.description}</Text>
                  <Text paddingTop='10px'>{product.variants.price}</Text>
                </Box>
              </Box>
            </Link>
          )
        } )}
      </SimpleGrid>
    </Flex>
  )
}

export async function getServerSideProps() {
  const products = await client.product.fetchAll()
  console.log({products});
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)) 
    }
  }
}