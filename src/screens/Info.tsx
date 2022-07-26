import { Text, VStack, useTheme, Heading, ScrollView } from 'native-base';

import { Header } from '../components/Header';

export function Info() {
  const { colors } = useTheme()

  return (
    <ScrollView>
      <VStack flex={1} p={6} bg="gray.600">
        <Header help title="Qual seu problema?" />

        <VStack mt={4}>
          <Heading color="gray.200" ml={2} fontSize="lg">
            Nova Solicitação:
          </Heading>
          <Text
            fontSize="md"
            mt={4}
            bg="gray.700"
            rounded="md"
            p={4}
            color="gray.200"
          >
            Insira o número do patrimônio e informe o problema encontrado.
          </Text>
        </VStack>

        <VStack mt={8}>
          <Heading color="gray.200" ml={2} fontSize="lg">
            Acompanhar solicitação:
          </Heading>
          <Text
            fontSize="md"
            mt={4}
            bg="gray.700"
            rounded="md"
            p={4}
            color="gray.200"
          >
            Clique na solicitação que deseja acompanhar, cheque se o filtro está correto.
          </Text>
        </VStack>

        <VStack mt={8}>
          <Heading color="gray.200" ml={2} fontSize="lg">
            Encerrar solicitação:
          </Heading>
          <Text
            fontSize="md"
            mt={4}
            bg="gray.700"
            rounded="md"
            p={4}
            color="gray.200"
          >
            Clique na solicitação em andamento, insira a solução e clique em Encerrar.
          </Text>
        </VStack>

        <VStack mt={8}>
          <Heading color="gray.200" ml={2} fontSize="lg">
            Outro problema:
          </Heading>
          <Text
            fontSize="md"
            mt={4}
            bg="gray.700"
            rounded="md"
            p={4}
            color="gray.200"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum exercitationem odit atque nemo deserunt quidem, soluta mollitia consequatur officiis recusandae consequuntur nulla vitae architecto sunt enim dolorem minima eos eveniet?
          </Text>
        </VStack>

        <VStack mt={8}>
          <Heading color="gray.200" ml={2} fontSize="lg">
            Mais problema:
          </Heading>
          <Text
            fontSize="md"
            mt={4}
            bg="gray.700"
            rounded="md"
            p={4}
            color="gray.200"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum exercitationem odit atque nemo deserunt quidem, soluta mollitia consequatur officiis.
          </Text>
        </VStack>

      </VStack>
    </ScrollView>
  );
}