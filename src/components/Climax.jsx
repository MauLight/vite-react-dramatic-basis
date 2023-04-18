import { useContext, useEffect, useState } from "react"
import { Box, Flex, Heading, Highlight, Input, Select, Stack, Text, Divider } from "@chakra-ui/react"
import { AppContext } from "../main"




export default function Climax() {

    const { state, dispatch } = useContext(AppContext)
    const [climax, setClimax] = useState(null)
    const [isHidden, setIsHidden] = useState("none")

    const changeInputValue = (type, value) => {
        dispatch({ type: type, payload: value })
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setClimax(e.target.value)
        changeInputValue("climax", e.target.value)
        setIsHidden("")
    }



    return (
        <>
            <Flex wrap="wrap" justifyContent="space-evenly">
                <Box my={10} mx={5} maxW={300}>
                    <Heading as="h4" textAlign="left" fontSize={30}>{"i) First defeat: "}</Heading>
                    <Input variant="flushed" type="text" onChange={e => changeInputValue("defeat", e.target.value)} />
                    <Text mt={5} lineHeight='tall'>
                        <Highlight
                            className="description"
                            query={['antagonist', 'wound', 'lie']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                        >
                            {!state.defeat ? `${state.antagonist === "" ? "Antagonist" : state.antagonist} wins by attacking ${state.wound.toLowerCase()} while defending ${state.lie}.` : state.defeat}
                        </Highlight>
                    </Text>
                </Box>
                <Box my={10} mx={5} maxW={300}>
                    <Heading as="h4" textAlign="left" fontSize={30}>{"j) Half truth: "}</Heading>
                    <Input variant="flushed" type="text" onChange={e => changeInputValue("half_truth", e.target.value)} />
                    <Text mt={5} lineHeight='tall'>
                        <Highlight
                            className="description"
                            query={['protagonist', 'wound', 'ghost']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                        >
                            {!state.half_truth ? `The protagonist acknowledges their ${state.wound.toLowerCase()}and their ${state.ghost}.` : state.half_truth}
                        </Highlight>
                    </Text>
                </Box>
                <Box my={10} mx={5} maxW={300}>
                    <Heading as="h4" textAlign="left" fontSize={30}>{"k) Battle: "}</Heading>
                    <Input variant="flushed" type="text" onChange={e => changeInputValue("battle", e.target.value)} />
                    <Text mt={5} lineHeight='tall'>
                        <Highlight
                            className="description"
                            query={['wound', 'antagonism', 'antagonist']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                        >
                            {!state.battle ? `Facing ${state.wound.toLowerCase()}, the protagonist conquers ${!state.antagonism ? "antagonism" : state.antagonism} while looking for ${!state.antagonist ? "antagonist" : state.antagonist}.` : state.battle}
                        </Highlight>
                    </Text>
                </Box>
            </Flex>
            <Flex wrap="wrap" justifyContent="space-evenly">
                <Box my={10} mx={5} maxW={300}>
                    <Heading as="h4" textAlign="left" fontSize={30}>{"j) Death / Resurrection: "}</Heading>
                    <Input variant="flushed" type="text" onChange={e => changeInputValue("resurrection", e.target.value)} />
                    <Text mt={5} lineHeight='tall'>
                        <Highlight
                            className="description"
                            query={['protagonist', 'wound', 'ghost']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                        >
                            {!state.resurrection ? `The protagonist acknowledges their ${state.wound.toLowerCase()}and their ${state.ghost}.` : state.resurrection}
                        </Highlight>
                    </Text>
                </Box>
            </Flex>
            <Flex wrap="wrap" justifyContent="center" >
                <Box my={10} mx="auto" maxW={300}>
                    <Heading as="h4" textAlign="left" fontSize={30} >Who wins the battle?</Heading>
                    <Select w={200} mt={5} variant="flushed" size="sm" placeholder='Choose an option' onChange={handleChange}>
                        <option value={0}>Truth</option>
                        <option value={1}>Lie</option>
                    </Select>
                </Box>
            </Flex>
            <Flex wrap="wrap" justifyContent="space-evenly">
                {
                    parseInt(climax) === 0 ?
                        <Box my={5} mx={5} maxW={300}>
                            <Heading as="h4" textAlign="left" fontSize={30}>{"k) Self-Revelation: "}</Heading>
                            <Input placeholder="psychological" variant="flushed" type="text" onChange={e => changeInputValue("psychological", e.target.value)} />
                            <Input placeholder="moral" variant="flushed" type="text" onChange={e => changeInputValue("moral", e.target.value)} />
                            <Text mt={5} lineHeight='tall'>
                                <Highlight
                                    className="description"
                                    query={['protagonist', 'truth', 'final action', 'moral']}
                                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                                >
                                    {!state.psychological && !state.moral ? `The protagonist understands ${state.truth === "truth" ? "the truth" : state.truth} and that triggers their final action.` : `The protagonist understands that ${state.psychological} and that triggers them to ${state.moral}.`}
                                </Highlight>
                            </Text>
                        </Box>
                        :
                        <Box my={5} mx={5} maxW={300} display={isHidden}>
                            <Heading as="h4" textAlign="left" fontSize={30}>{"l) Fall into Lie: "}</Heading>
                            <Input variant="flushed" type="text" onChange={e => changeInputValue("fall_into_lie", e.target.value)} />
                            <Text mt={5} lineHeight='tall'>
                                <Highlight
                                    className="description"
                                    query={['protagonist', 'the lie', 'final action']}
                                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                                >
                                    {!state.psychological && !state.moral ? `The protagonist falls into believing ${state.lie === "lie" ? "the lie" : state.lie} and that triggers their final action.` : `The protagonist fails to overcome ${state.psychological} and that triggers them to ${state.moral}.`}
                                </Highlight>
                            </Text>
                        </Box>
                }
            </Flex>
        </>
    )
}
