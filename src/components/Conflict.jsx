import { useContext, useState } from "react"
import { Box, Flex, Heading, Highlight, Input, Text, FormControl, Button, HStack, List, ListItem, ListIcon, Divider, Center, Icon } from "@chakra-ui/react"
import { ChevronRightIcon, ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { AppContext } from "../views/dramatic"



export default function Conflict() {

    const { state, dispatch } = useContext(AppContext)
    const [step_1, setStep_1] = useState("")

    console.log(state.plan)

    const OppositionList = () => {
        return (
            <List textAlign="left">
                <ListItem>
                    <ListIcon as={ChevronRightIcon} color='green.500' />
                    {state.antagonist}
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} color='green.500' />
                    {state.allies}
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} color='green.500' />
                    {state.gatekeepers}
                </ListItem>
            </List>
        )
    }

    const Conflict_Squeme = () => {

        return (
            <>
                <Heading as="h4" textAlign="left" fontSize={30} my={10} >Conflict: </Heading>
                <Flex justifyContent="center">
                    <Box w={400}>{state.plan.length === 0 ? "PLAN" :
                        <List textAlign="left">
                            {state.plan.length === 0 ? null : state.plan.map((elem, index) => {
                                return (

                                    <ListItem key={index}>
                                        <ListIcon as={ChevronRightIcon} color='green.500' />
                                        {elem}
                                    </ListItem>
                                )
                            })}
                        </List>
                    }</Box>
                    <Icon ml={10} h="1.5em" as={ArrowRightIcon} color='green.500' />
                    <Center height='50px'>
                        <Divider mx={20} orientation='vertical' />
                    </Center>
                    <Box w={300}>{state.theme === "" ? "THEME" : state.theme}</Box>
                    <Center height='50px'>
                        <Divider mx={20} orientation='vertical' />
                    </Center>
                    <Icon mr={10} h="1.5em" as={ArrowLeftIcon} color='green.500' />
                    <Box w={400}>{state.antagonist === "" ? "OPPOSITION" : <OppositionList />}</Box>
                </Flex>
            </>
        )
    }


    const handleChange = (e) => {
        console.log(step_1)
        setStep_1(e.target.value)

    }

    const changeInputValue = (type, value) => {
        dispatch({ type: type, payload: value })
    }

    const changeInputValue2 = (type, value) => {
        dispatch({ type: type, payload: value })
        setStep_1('')
    }

    return (
        <>
            <Flex wrap="wrap" justifyContent="space-between">
                <Box my={10} mx={5} maxW={400}>
                    <Heading as="h4" textAlign="left" fontSize={30}>{"g) Want: "}{state.want}</Heading>
                    <Input placeholder="desire" variant="flushed" type="text" onChange={e => changeInputValue("desire", e.target.value)} />
                    <Input placeholder="goal" variant="flushed" type="text" onChange={e => changeInputValue("goal", e.target.value)} />
                    <Text mt={5} lineHeight='tall'>
                        <Highlight
                            className="description"
                            query={['goal', 'desire']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                        >
                            {`To ${state.goal} and achieve ${state.desire}`}
                        </Highlight>
                    </Text>
                </Box>
                <Box my={10} mx={5} maxW={400}>
                    <Heading as="h4" textAlign="left" fontSize={30}>{"h) Antagonism: "}{state.want}</Heading>
                    <Input variant="flushed" type="text" onChange={e => changeInputValue("antagonism", e.target.value)} />
                    <Text mt={5} lineHeight='tall'>
                        <Highlight
                            className="description"
                            query={['wound', 'lie', 'goal']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                        >
                            {!state.antagonism ? `Because of ${state.wound.toLowerCase()} caused by ${state.lie}, they oppose the protagonist from achieving ${state.goal}` : state.antagonism}
                        </Highlight>
                    </Text>
                </Box>
            </Flex>
            <Flex wrap="wrap" justifyContent="space-between">
                <Box my={10} mx={5} w={400} maxW={400}>
                    <Heading as="h4" textAlign="left" fontSize={30}>{"g) Plan: "}</Heading>
                    <FormControl>
                        <HStack>
                            <Input placeholder="steps" variant="flushed" type="text" onChange={handleChange} value={step_1} />
                            <Button size="sm" variant="outline" type="submit" onClick={() => changeInputValue2("plan", step_1)} >Add</Button>
                        </HStack>
                    </FormControl>
                    <Text mt={5} lineHeight='tall'>
                        <Highlight
                            className="description"
                            query={['Plan', 'goal']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                        >
                            {`Plan to achieve ${state.goal}`}
                        </Highlight>
                        <List textAlign="left" mt={10}>
                            {state.plan.length === 0 ? null : state.plan.map((elem, index) => {
                                return (

                                    <ListItem key={index}>
                                        <ListIcon as={ChevronRightIcon} color='green.500' />
                                        {elem}
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Text>
                </Box>
                <Box my={10} mx={5} maxW={400}>
                    <Heading as="h4" textAlign="left" fontSize={30}>{"h) Opposition: "}{state.opposition}</Heading>
                    <Input placeholder="antagonist" variant="flushed" type="text" onChange={e => changeInputValue("antagonist", e.target.value)} />
                    <Input placeholder="allies" variant="flushed" type="text" onChange={e => changeInputValue("allies", e.target.value)} />
                    <Input placeholder="gatekeepers" variant="flushed" type="text" onChange={e => changeInputValue("gatekeepers", e.target.value)} />
                    <Text mt={5} lineHeight='tall'>
                        <Highlight
                            className="description"
                            query={['forces', 'protagonist']}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}

                        >
                            {`Unified forces against the protagonist:`}
                        </Highlight>
                    </Text>
                    <OppositionList />
                </Box>
            </Flex>
            <Conflict_Squeme />
        </>
    )
}
