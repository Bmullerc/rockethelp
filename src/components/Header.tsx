import { Heading, HStack, IconButton, StyledProps, useTheme } from 'native-base';
import { CaretLeft, Info } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native'

type Props = StyledProps & {
  title: string
  help?: boolean
}

export function Header({ title, help, ...rest }: Props) {
  const { colors } = useTheme()
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  function handleGoInfo() {
    navigation.navigate('info')
  }

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={12}
      {...rest}
    >

      <IconButton
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
        onPress={handleGoBack}
      />

      <Heading color="gray.100" textAlign="center" fontSize="lg" flex={1} ml={-6}>
        {title}
      </Heading>

      {
        !help && <IconButton
          icon={<Info color={colors.gray[200]} size={24} />}
          onPress={handleGoInfo}
        />
      }

    </HStack>
  );
}