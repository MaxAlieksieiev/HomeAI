import { useState } from "react";
import {
  Input,
  Icon,
  Stack,
  Pressable,
  Center,
  NativeBaseProvider,
  Button,
  Text,
  Box,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useSession } from "../core/hooks/useSession";

export default function SignIn() {
  const { signIn } = useSession();
  const [show, setShow] = useState(false);

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Stack space={4} w="100%" alignItems="center">
          <Box alignContent="center" justifyContent="center">
            <Text fontSize="4xl">Log in</Text>
            <Box alignContent="center" flexDirection="row">
              <Text fontSize="md">Welcome to HomeAI</Text>
            </Box>
          </Box>
          <Text></Text>
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Name"
          />
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Password"
          />
          <Button size="md" variant="ghost" onPress={() => signIn()}>
            Sign in
          </Button>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}
