import { useContext } from "react"
import { Box, Flex, Heading, Highlight, Input, Text } from "@chakra-ui/react"
import { AppContext } from "../main"



export const CH_Logline = () => {

    const { state, dispatch } = useContext(AppContext)

    const changeInputValue = (type, value) => {
        dispatch({ type: type, payload: value })
    }

    return (
        <Box>
            <Heading as="h4" textAlign="left" fontSize={30}>Character Logline</Heading>
            <Input variant="flushed" type="text" onChange={e => changeInputValue("ch_logline", e.target.value)} />
            <Text mt={5} lineHeight='tall'>
                <Highlight
                    className="description"
                    query={['contrapositive', 'wound', 'ghost', 'truth']}
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                >
                    {`After ${state.contrapositive}, a character who has ${state.wound.toLowerCase()} because of ${state.ghost} has to experience ${state.wound.toLowerCase()} because of ${state.ghost} to understand that ${state.truth}.`}
                </Highlight>
            </Text>
        </Box>
    )

}