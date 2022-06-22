//Next / React
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import { GoMarkGithub } from "react-icons/go";

//Styles
import styles from '../styles/Home.module.css'

//Chakra UI
import { Button } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/react";



export default function GitButton(props) {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <>
        <Button 
        color={colorMode}
        w="150px" 
        h="40px"
        onClick={() => {
            window.open('https://github.com/LyeZinho', '_blank')}}
        leftIcon={<GoMarkGithub />}
        iconSpacing={3}
        >Gihub</Button>
      </>
    )
  }