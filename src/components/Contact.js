import {
    Divider,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Heading,
    Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";

export default function Contact() {
    const linkedin = () => {
        window.open("https://www.linkedin.com/in/ks539/", "_blank", "noreferrer,noopener");
    };
    const github = () => {
        window.open("https://github.com/kevinshah-dev", "_blank", "noreferrer,noopener");
    };
    const email = () => {
        window.open("ks539@duke.edu", "_blank", "noreferrer,noopener");
    }
}