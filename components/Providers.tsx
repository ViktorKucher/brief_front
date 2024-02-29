"use client"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import React from "react"

export const Providers = ({children}:{children: React.ReactNode}) =>{
    const theme = extendTheme({
        components:{
            Input:{
                baseStyle:{
                    color: 'black'
                }
            }
        }
      })
    return<ChakraProvider theme={theme}>{children}</ChakraProvider>
}