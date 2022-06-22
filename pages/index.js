import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


//Chakra ui components
import { Box } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'

//Components
import Color from '../components/color'
import SponsorModal from '../components/sponsor'
import GitButton from '../components/github'
import theme from '../components/theme'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ColorGetty</title>
        <meta name="description" content="🎨Simple, fast and ad-free color picker for web!" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      {/* Theme */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      {/* Color Picker */}
      <Box p={5}>
        <Center>
          <Color  
            width={500}
            height={200}
          />
          </Center>
      </Box>
      

      {/* Footer */}
      <Box>
        <Center>
          <HStack>
            <Heading size='sm' paddingBottom={3}>
              © {new Date().getFullYear()} ColorGetty, Made by <Link href='https://github.com/LyeZinho' _hover={{color: '#f4ff00'}}>lyepedro</Link> with ❤!
            </Heading>
          </HStack>
        </Center>
        <Center>
          <HStack>
            <SponsorModal />
            <GitButton />
          </HStack>
        </Center>
      </Box>
    </div>
  )
}
