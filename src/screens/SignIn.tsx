import { useState } from 'react'
import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import { VStack, Heading, Icon, useTheme } from "native-base"
import { Envelope, Key } from 'phosphor-react-native'

import Logo from '../assets/logo_primary.svg'

import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { colors } = useTheme()

  function handleSignIn() {
    if (!email || !password) {
      return Alert.alert("Entrar", "Informe o e-mail e a senha.");
    }

    setIsLoading(true)

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
        const erro = error.code
        switch (erro) {
          case ('auth/user-not-found'):
            return Alert.alert("Entrar", "Usuário não encontrado.")
          case ('auth/wrong-password'):
            return Alert.alert("Entrar", "E-mail ou senha inválido.")
          case ('auth/invalid-email'):
            return Alert.alert("Entrar", "E-mail ou senha inválido.")
          default:
            return Alert.alert('Entrar', "Hmm, algo está errado.")
        }
      })
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        placeholder="E-mail"
        marginBottom={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button
        title="Entrar"
        w="full"
        mt={8}
        onPress={handleSignIn}
        isLoading={isLoading}
      />
    </VStack>
  )
}