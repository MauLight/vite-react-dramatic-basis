import { AtSignIcon, CalendarIcon, ChevronRightIcon, EditIcon, UnlockIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, Box, Button, Divider, Heading, Image, List, ListIcon, ListItem, Text, useToast } from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from "../main"
import image from '../img/poster-placeholder.jpg'
import { useContext } from 'react'

export default function Sidebar() {

    const { state, dispatch } = useContext(AppContext)
    const navigate = useNavigate();

    const toast = useToast();

    const OppositionList = () => {
        return (
            <List textAlign="left">
                <ListItem fontSize={12}>
                    <ListIcon as={ChevronRightIcon} color='green.500' />
                    {state.antagonist}
                </ListItem>
                <ListItem fontSize={12}>
                    <ListIcon as={ChevronRightIcon} color='green.500' />
                    {state.allies}
                </ListItem>
                <ListItem fontSize={12}>
                    <ListIcon as={ChevronRightIcon} color='green.500' />
                    {state.gatekeepers}
                </ListItem>
            </List>
        )
    }

    const handleClick = () => {
        navigate("/document")
    }

    const btnStyle = {
        p: "30px",
        bg: "tomato",
        color: "white",
        mt: "20px",
        borderRadius: "5px",
        transition: "all 0.3s ease",
        ':hover': {
            bg: "gray.100",
            color: "tomato"
        },
        ':active': {
            bg: "tomato",
            color: "white",
        }
    }

    return (
        <List color="white" fontSize="1.2em" spacing={4} position="sticky" top="-300" >
            <ListItem mt={7} justifyContent="center" display="flex">
                <Image w={200} h={300} objectFit='cover' src={image} alt='placeholder' />
            </ListItem>

            <ListItem justifyContent="center" display="flex" >
                <Heading>{state.title}</Heading>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Heading as="h6" fontSize={20}>{state.genre}</Heading>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Heading as="h6" fontSize={20}>Theme: {state.theme}</Heading>
            </ListItem>
            <ListItem h={5} justifyContent="center" display="flex" >
                <Heading as="h6" fontSize={20}>Truth:
                    <Text fontSize={12} fontWeight="medium">{state.truth === "truth" ? "" : state.truth}</Text>
                </Heading>
                <Divider m="0 20px" orientation='vertical' />
                <Heading as="h6" fontSize={20}>Contrapositive:
                    <Text fontSize={12} fontWeight="medium">{state.contrapositive === "contrapositive" ? "" : state.contrapositive}</Text>
                </Heading>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Heading as="h6" fontSize={20}>Lie:
                    <Text fontSize={12} fontWeight="medium">{state.lie === "lie" ? "" : state.lie}</Text>
                </Heading>
            </ListItem>
            <ListItem mt="auto" h={5} justifyContent="center" display="flex" >
                <Heading as="h6" fontSize={20}>Flaw:
                    <Text fontSize={12} fontWeight="medium">{state.wound === "Wound" && state.ghost === "ghost" ? "" : `${state.wound.toLowerCase()} because of ${state.ghost}.`}</Text>
                </Heading>
                <Divider m="0 20px" orientation='vertical' />
                <Heading as="h6" fontSize={20}>Need:
                    <Text fontSize={12} fontWeight="medium">{!state.need ? "" : state.need}</Text>
                </Heading>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Heading as="h6" fontSize={20}>Character Logline:
                    <Text fontSize={12} fontWeight="medium">{state.ch_logline}</Text>
                </Heading>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Heading as="h6" fontSize={20}>Want:
                    <Text fontSize={12} fontWeight="medium">{state.goal === "goal" && state.desire === "desire" ? "" : `To ${state.goal} and achieve ${state.desire}`}</Text>
                </Heading>
                <Divider m="0 20px" orientation='vertical' />
                <Heading as="h6" fontSize={20}>Antagonism:
                    <Text fontSize={12} fontWeight="medium">{state.antagonism}</Text>
                </Heading>
            </ListItem>
            <ListItem justifyContent="center" display="flex" mb={5}>
                <Heading as="h6" fontSize={20}>Plan:
                    <List textAlign="left" mt={2}>
                        {state.plan.length === 0 ? null : state.plan.map((elem, index) => {
                            return (

                                <ListItem key={index} fontSize={12}>
                                    <ListIcon as={ChevronRightIcon} color='green.500' />
                                    {elem}
                                </ListItem>
                            )
                        })}
                    </List>
                </Heading>
                <Divider m="0 20px" orientation='vertical' />
                <Heading as="h6" fontSize={20}>Opposition:
                    {
                        !state.antagonist && !state.allies && !state.gatekeepers ? "" : <OppositionList />
                    }
                </Heading>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Heading as="h6" fontSize={20}>First defeat:
                    <Text fontSize={12} fontWeight="medium">{state.defeat}</Text>
                </Heading>
                <Divider m="0 20px" orientation='vertical' />
                <Heading as="h6" fontSize={20}>Half truth:
                    <Text fontSize={12} fontWeight="medium">{state.half_truth}</Text>
                </Heading>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Heading as="h6" fontSize={20}>Battle:
                    <Text fontSize={12} fontWeight="medium">{state.battle}</Text>
                </Heading>
                <Divider m="0 20px" orientation='vertical' />
                <Heading as="h6" fontSize={20}>Death / Resurrection:
                    <Text fontSize={12} fontWeight="medium">{state.resurrection}</Text>
                </Heading>
            </ListItem>
            {
                parseInt(state.climax) === 0 ?
                    <ListItem justifyContent="center" display="flex" >
                        <Heading as="h6" fontSize={20}>Self-Revelation:
                            <Text fontSize={12} fontWeight="medium">
                                {!state.psychological && !state.moral ? "" : `The protagonist understands that ${state.psychological} and that triggers them to ${state.moral}.`}
                            </Text>
                        </Heading>
                    </ListItem>
                    :
                    <ListItem justifyContent="center" display={!state.climax ? "none" : "flex"} >
                        <Heading as="h6" fontSize={20}>Fall into Lie:
                            <Text fontSize={12} fontWeight="medium">
                                {!state.psychological && !state.moral ? "" : `The protagonist fails to overcome ${state.psychological} and that triggers them to ${state.moral}.`}
                            </Text>
                        </Heading>
                    </ListItem>
            }
            <ListItem justifyContent="center" display="flex" >
                <Heading as="h6" fontSize={20}>Functional Logline:
                    <Text fontSize={12} fontWeight="medium">{state.f_logline}</Text>
                </Heading>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Button mt={30} colorScheme='teal' size='lg' onClick={handleClick} >
                    Save
                </Button>
            </ListItem>
        </List>
    )
}
