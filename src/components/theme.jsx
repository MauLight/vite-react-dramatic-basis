import { useContext } from "react"
import { Box, Divider, Flex, Heading, Highlight, Input, Text } from "@chakra-ui/react"
import { AppContext } from "../views/dramatic"

export const Theme = () => {

    const { state, dispatch } = useContext(AppContext)

    const changeInputValue = (type, value) => {
        dispatch({ type: type, payload: value })
    }

    return (
        <>
            <Flex>
                <Box my={10} mx={5}>
                    <Heading as="h4" textAlign="left" fontSize={30}>Theme: {state.theme}</Heading>
                    <Input variant="flushed" type="text" onChange={e => changeInputValue("theme", e.target.value)} />
                    <Text mt={5} lineHeight='tall'>
                        <Highlight
                            className="description"
                            query={['truth', 'lie']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                        >
                            {`The symbolic argument between truth and lie.`}
                        </Highlight>
                    </Text>
                </Box>
            </Flex>
            <Flex wrap="wrap" justifyContent="space-evenly">
                <Box my={10} mx={5}>
                    <Heading as="h4" textAlign="left" fontSize={30}>{'a) Truth: '}<Text textAlign="center" fontSize='lg'>{state.truth}</Text></Heading>
                    <Input variant="flushed" type="text" onChange={e => changeInputValue("truth", e.target.value)} />
                    <Text mt={5} lineHeight='tall'>
                        <Highlight
                            className="description"
                            query={['way to act', 'revelation']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                        >
                            {`A revelation about the proper way to act.`}
                        </Highlight>
                    </Text>
                </Box>

                <Box my={10} mx={5}>
                    <Heading as="h4" textAlign="left" fontSize={30}>{'b) Contrapositive: '}<Text textAlign="center" fontSize='lg'>{state.contrapositive}</Text></Heading>
                    <Input variant="flushed" type="text" onChange={e => changeInputValue("contrapositive", e.target.value)} />
                    <Text mt={5} lineHeight='tall'>
                        <Highlight
                            className="description"
                            query={['consequence', 'following']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                        >
                            {`The consequence of not following the truth.`}
                        </Highlight>
                    </Text>
                </Box>

                <Box my={10} mx={5}>
                    <Heading as="h4" textAlign="left" fontSize={30}>{'c) Lie: '}<Text textAlign="center" fontSize='lg'>{state.lie}</Text></Heading>
                    <Input variant="flushed" type="text" onChange={e => changeInputValue("lie", e.target.value)} />
                    <Text mt={5} lineHeight='tall'>
                        <Highlight
                            className="description"
                            query={['wrong', 'opposite']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                        >
                            {`A wrong belief, opposite to the truth.`}
                        </Highlight>
                    </Text>
                </Box>
            </Flex>
        </>
    )
}