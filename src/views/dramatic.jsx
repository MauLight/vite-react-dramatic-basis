import { Box, Container, Divider, Flex, HStack, Heading, Highlight, Input, Text } from "@chakra-ui/react"
import { createContext, useState, useReducer } from "react"
import { Theme } from "../components/theme"
import { Character } from "../components/character"

export const AppContext = createContext();

const initialState = {
    theme: "",
    truth: "truth",
    lie: "lie",
    contrapositive: "contrapositive",
    wound: "Wound",
    ghost: "ghost"
}

const reducer = (state, action) => {
    if (action.type === 'theme') return { ...state, theme: action.payload }
    if (action.type === 'truth') return { ...state, truth: action.payload }
    if (action.type === 'contrapositive') return { ...state, contrapositive: action.payload }
    if (action.type === 'lie') return { ...state, lie: action.payload }
    if (action.type === 'need') return { ...state, need: action.payload }
    if (action.type === 'wound') return { ...state, wound: action.payload }
    if (action.type === 'ghost') return { ...state, ghost: action.payload }
}

export const Dramatic = () => {

    const [title, setTitle] = useState("Dramatic Basis of a Story 2.0")
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Container as="section" maxW="100%" my={10}>
            <Box mb={20}>
                <HStack>
                    <Heading as="h1">{title}</Heading>
                </HStack>
            </Box>
            <Divider orientation='horizontal' />
            <AppContext.Provider value={{ state, dispatch }}>
                <Theme />
                <Character />
            </AppContext.Provider>
        </Container>
    )
}