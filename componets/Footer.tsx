"use client";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"5xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Produto</ListHeader>
            <Link href={"#depositions"}>Depoimentos</Link>
            <Link href={"#promotion"}>Promoção</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Fale conosco</ListHeader>
            <Link href={"#"}>contato.gabrielhbernardo@gmail.com</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image height={20} src="icon.svg" alt="icone de logo" />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 Receitas Naturais - Gabriel Henrique
        </Text>
      </Box>
    </Box>
  );
}
