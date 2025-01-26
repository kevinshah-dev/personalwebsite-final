import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Link,
} from "@chakra-ui/react";

export default function AboutSection() {
  return (
    <>
      <Container maxW="3xl" id="about">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 6, md: 10 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color="blue.400" fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>

          <Text color="gray.400" fontSize="xl" px={4}>
            Hi I'm Kevin. I work as a software developer at{" "}
            <Link
              href="https://www.prometheusgroup.com"
              color="blue.400"
              isExternal
            >
              Prometheus Group
            </Link>
            . I'm also the developer of{" "}
            <Link href="https://policypeer.org" color="blue.400" isExternal>
              PolicyPeer
            </Link>
            , an insurance transparency platform.
          </Text>

          <Text color="gray.400" fontSize="xl" px={4}>
            Scroll down to see some of my work.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
