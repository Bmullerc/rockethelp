import { useState } from 'react'
import { Alert } from 'react-native'

import { VStack, Icon, useTheme, Heading } from "native-base"
import auth from '@react-native-firebase/auth'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Envelope, Key } from 'phosphor-react-native'
import { Header } from '../components/Header'


export function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [pass1, setPass1] = useState('')
  const [pass2, setPass2] = useState('')

  const { colors } = useTheme()

  function validPassword() {
    if (pass1.length < 6) {
      return Alert.alert('Registrar', 'A senha precisa ter no mínimo 6 caracteres.')
    } else if (pass1 !== pass2) {
      return Alert.alert('Registrar', 'Ambos os campos de senha precisam ser iguais.')
    } else if (pass1 === pass2) {
      return true
    }
  }

  function validEmail() {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!email.match(emailFormat)) {
      setEmail('')
      return Alert.alert('Registrar', 'Email Inválido')
    }
    return true
  }

  function handleSignUpCheck() {
    validEmail()
    validPassword()

    if (validEmail() === true && validPassword() === true) {
      console.log(email, pass1)
      handleSignUp()
    }
  }

  function handleSignUp() {
    auth()
      .createUserWithEmailAndPassword(email, pass1)
      .then(userCredential => {
        const user = userCredential.user
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
        const erro = error.code
        switch (erro) {
          case ('auth/email-already-in-use'):
            return Alert.alert("Entrar", "Este email já está em uso.")
          default:
            return Alert.alert('Entrar', "Hmm, algo está errado.")
        }
      })
  }

  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header help title="Registro de Usuário" />

      <Heading color="gray.300" ml={2} mb={4} fontSize="md">
        E-mail:
      </Heading>
      <Input
        placeholder="Insira um e-mail válido"
        marginBottom={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
        onChangeText={setEmail}
      />

      <Heading color="gray.300" ml={2} mt={4} fontSize="md">
        Senha (mínimo 6 caracteres):
      </Heading>

      <Input
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        mt={4}
        onChangeText={setPass1}
      />

      <Input
        placeholder="Repita a senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        mt={4}
        onChangeText={setPass2}
      />

      <Button
        title="Registrar"
        w="full"
        mt={8}
        onPress={handleSignUpCheck}
        isLoading={isLoading}
      />
    </VStack>
  )
}