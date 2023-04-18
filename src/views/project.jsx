import { Button, Container, Flex, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../main';

export default function Project() {

    const { state, dispatch } = useContext(AppContext)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dramatic");
    };

    const changeInputValue = (type, value) => {
        dispatch({ type: type, payload: value })
    }


    return (
        <Container mt={20} as="section" maxW="2xl">
            <FormControl isRequired>
                <FormLabel>Project name</FormLabel>
                <Input variant="flushed" placeholder='Project name' onChange={e => changeInputValue("title", e.target.value)} />
                <FormLabel>Genre</FormLabel>
                <Select variant="flushed" placeholder='Select genre' onChange={e => changeInputValue("genre", e.target.value)} >
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value= "Horror">Horror</option>
                    <option value= "Sci-fi">Sci-Fi</option>
                    <option value= "Thriller">Thriller</option>
                </Select>
                <FormLabel>Poster</FormLabel>
                <Input variant="flushed" type='file'></Input>
                <Button mt={30} colorScheme='teal' size='lg' onClick={handleSubmit}>
                    Submit
                </Button>
            </FormControl>
        </Container>
    )
}
