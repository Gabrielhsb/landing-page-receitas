"use client";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const features = [
  {
    id: 1,
    title: "Transforme suas Milhas em Lucros",
    text: "Monetizar suas milhas aéreas, identificar oportunidades de negócio, gerenciar suas milhas de forma inteligente, negociar com parceiros, maximizar seus ganhos financeiros.",
  },

  {
    id: 2,
    title: "Aproveite os Benefícios dos Programas de Fidelidade",
    text: "Entender como funcionam os programas de fidelidade, acumular pontos de forma estratégica, obter vantagens exclusivas, aproveitar promoções e ofertas especiais.",
  },

  {
    id: 3,
    title: "Obtenha Passagens Aéreas com Descontos",
    text: "Encontrar passagens aéreas com preços reduzidos, utilizar suas milhas para adquirir bilhetes de forma econômica, viajar mais gastando menos.",
  },

  {
    id: 4,
    title: "Venda suas Milhas com Sucesso",
    text: "Descobrir os melhores canais de venda, obter lucro ao revender suas milhas, aprender estratégias de negociação, aumentar sua renda com a revenda de milhas.",
  },

  {
    id: 5,
    title: "Planeje Viagens Econômicas",
    text: "Organizar viagens econômicas utilizando milhas aéreas, obter benefícios extras durante as viagens, explorar destinos pagando menos.",
  },

  {
    id: 6,
    title: "Acesso a Promoções Exclusivas",
    text: "Ficar por dentro das promoções e descontos exclusivos para usuários de programas de fidelidade, aproveitar ofertas especiais em passagens, hospedagens e serviços relacionados a viagens.",
  },
];

export default function Skills() {
  return (
    <Box p={4} id="skills">
      <Stack spacing={4} as={Container} maxW={"2xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>
          Desenvolva Habilidades Essenciais com o Nosso Curso
        </Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Domine as Técnicas e Conquiste o Sucesso no Mundo das Milhas Aéreas
        </Text>
      </Stack>

      <Container maxW={"3xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
