import {
    Divider,
    Stack,
    Text,
    Container,
    Box, 
    HStack,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Badge,
    Image,
    List,
    ListItem,
    ListIcon,
    Button,
    ButtonGroup,
    Center,
} from "@chakra-ui/react";

import  { ChevronRightIcon }  from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";


export default function Experience() {
    const tags = ["Experience #1", "Experience #2", "Experience #3"];
    const [selected, setSelected] = useState("");

    useEffect(() => {
        if (tags.length > 0) {
            setSelected(tags[0].value)
        }
    }, [tags]);

    return (
        <>
            <Container maxW={"3xl"} id="experience">

            </Container>
        </>
    )

}