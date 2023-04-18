import { useContext } from "react"
import { Box, Flex, Heading, Highlight, Input, Text } from "@chakra-ui/react"
import { AppContext } from "../main"

export const F_Logline = () => {

    const { state, dispatch } = useContext(AppContext)

    const changeInputValue = (type, value) => {
        dispatch({ type: type, payload: value })
    }

    return (
        <Box>
            <Heading as="h4" textAlign="left" fontSize={30}>Functional Logline</Heading>
            <Input variant="flushed" type="text" onChange={e => changeInputValue("f_logline", e.target.value)} />
            <Text mt={5} lineHeight='tall'>
                <Highlight
                    className="description"
                    query={['contrapositive', 'wound', 'ghost', 'truth', 'goal', 'desire', 'antagonism']}
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                >
                    {!state.f_logline ? `After ${state.contrapositive}, a character who has ${state.wound.toLowerCase()} because of ${state.ghost} wants to ${state.goal} to achieve ${state.desire}, but has to experience ${state.wound.toLowerCase()} because of ${state.ghost} while facing ${!state.antagonism ? "antagonism" : state.antagonism} to understand that ${state.truth}.` : state.f_logline}
                </Highlight>
            </Text>
        </Box>
    )

}