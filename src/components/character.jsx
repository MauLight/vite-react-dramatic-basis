import { useContext } from "react"
import { Box, Flex, Heading, Highlight, Input, Text } from "@chakra-ui/react"
import { AppContext } from "../main"

export const Character = () => {

    const { state, dispatch } = useContext(AppContext)

    const changeInputValue = (type, value) => {
        dispatch({ type: type, payload: value })
    }

    return (
        <Flex wrap="wrap" justifyContent="space-between">
            <Box my={10} mx={5} maxW={400}>
                <Heading as="h4" textAlign="left" fontSize={30}>{"f) Need: "}</Heading>
                <Input variant="flushed" type="text" onChange={e => changeInputValue("need", e.target.value)} />
                <Text mt={5} lineHeight='tall'>
                    <Highlight
                        className="description"
                        query={['wound', 'ghost', 'truth']}
                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                    >
                        {`To experience ${state.wound.toLowerCase()} because of ${state.ghost} and understand that ${state.truth}.`}
                    </Highlight>
                </Text>
            </Box>
            <Box my={10} mx={5} maxW={400}>
                <Heading as="h4" textAlign="left" fontSize={30}>{"e) Flaw: "}</Heading>
                <Input placeholder="wound" variant="flushed" type="text" onChange={e => changeInputValue("wound", e.target.value)} />
                <Input placeholder="ghost" variant="flushed" type="text" onChange={e => changeInputValue("ghost", e.target.value)} />
                <Text mt={5} lineHeight='tall'>
                    <Highlight
                        className="description"
                        query={['Wound', 'ghost']}
                        styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                    >
                        {`${state.wound} because of ${state.ghost}.`}
                    </Highlight>
                </Text>
            </Box>
        </Flex>
    )
}