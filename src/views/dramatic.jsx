import { Box, Container, Divider, Grid, GridItem, HStack, Heading } from "@chakra-ui/react"
import { createContext, useState, useReducer } from "react"
import { Theme } from "../components/theme"
import { Character } from "../components/character"
import { CH_Logline } from "../components/ch_logline";
import Conflict from "../components/Conflict";
import Climax from "../components/Climax";
import { F_Logline } from "../components/f_logline";
import Sidebar from "../components/sidebar";

/*
export const AppContext = createContext();

const initialState = {
    theme: "",
    truth: "truth",
    lie: "lie",
    contrapositive: "contrapositive",
    wound: "Wound",
    ghost: "ghost",
    ch_logline: "",
    desire: "desire",
    goal: "goal",
    plan: [],
    antagonist: "",
    allies: "",
    gatekeepers: "",
}

const reducer = (state, action) => {
    if (action.type === 'theme') return { ...state, theme: action.payload }
    if (action.type === 'truth') return { ...state, truth: action.payload }
    if (action.type === 'contrapositive') return { ...state, contrapositive: action.payload }
    if (action.type === 'lie') return { ...state, lie: action.payload }
    if (action.type === 'need') return { ...state, need: action.payload }
    if (action.type === 'wound') return { ...state, wound: action.payload }
    if (action.type === 'ghost') return { ...state, ghost: action.payload }
    if (action.type === 'ch_logline') return { ...state, ch_logline: action.payload }
    if (action.type === 'desire') return { ...state, desire: action.payload }
    if (action.type === 'goal') return { ...state, goal: action.payload }
    if (action.type === 'antagonism') return { ...state, antagonism: action.payload }
    if (action.type === 'plan') return { ...state, plan: [...state.plan, action.payload] }
    if (action.type === 'antagonist') return { ...state, antagonist: action.payload }
    if (action.type === 'allies') return { ...state, allies: action.payload }
    if (action.type === 'gatekeepers') return { ...state, gatekeepers: action.payload }
    if (action.type === 'defeat') return { ...state, defeat: action.payload }
    if (action.type === 'half_truth') return { ...state, half_truth: action.payload }
    if (action.type === 'battle') return { ...state, battle: action.payload }
    if (action.type === 'resurrection') return { ...state, resurrection: action.payload }
    if (action.type === 'psychological') return { ...state, psychological: action.payload }
    if (action.type === 'moral') return { ...state, moral: action.payload }
    if (action.type === 'f_logline') return { ...state, f_logline: action.payload }
}

*/

const shadow = {
    WebkitBoxShadow: "-6px 5px 7px -3px rgba(0,0,0,0.75)",
    MozBoxShadow: "-6px 5px 7px -3px rgba(0,0,0,0.75)",
    "boxShadow": "-6px 5px 7px -3px rgba(0,0,0,0.75)"
}

export const Dramatic = () => {

    const [title, setTitle] = useState("Dramatic Basis of a Story 2.0")
    //    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>


            <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
                <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 4 }} >
                    <Container as="section" maxW="100%" my={10}>
                        <Box mb={20}>
                            <HStack>
                                <Heading as="h1">{title}</Heading>
                            </HStack>
                        </Box>
                        <Divider orientation='horizontal' />

                        <Theme />
                        <Divider my={10} />
                        <Character />
                        <Divider my={10} />
                        <CH_Logline />
                        <Divider my={10} />
                        <Conflict />
                        <Divider my={10} />
                        <Climax />
                        <Divider my={10} />
                        <F_Logline />

                    </Container>
                </GridItem>
                <GridItem sx={shadow} as="aside" colSpan={{ base: 6, lg: 2, xl: 2 }} bg="#333333    " minHeight={{ lg: "100vh" }} p={{ base: "20px", lg: "30px" }}>
                    <Sidebar />
                </GridItem>
            </Grid>
        </>
    )
}