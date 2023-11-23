import { Avatar, Box, Button, Center, CloseButton, Flex, HStack, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Tooltip, VStack, Wrap, WrapItem, chakra, useColorMode, useColorModeValue, useDisclosure, useToast } from "@chakra-ui/react";
import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SignoutFun } from "../redux/authReducer/action";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaPowerOff } from "react-icons/fa";

const Navbar = () => {

  const { isAuth, userName } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  const handleSignOut = () => {
    dispatch(SignoutFun())
    toast({
      title: "Log out Success",
      status: "success",
      position: "top-center",
      isClosable: true,
    })
    navigate("/login")
  }

  return (
    <>
      <chakra.header
        position={"fixed"}
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
        zIndex={"10"}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <Link to="/">
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Notes App
              </chakra.h1>
            </Link>

          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >


              {!isAuth &&
                <Link to='/login'>
                  <Button colorScheme="teal">Log in</Button>
                </Link>
              }

              {isAuth &&

                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://api.dicebear.com/7.x/fun-emoji/svg'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        name={userName}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>{userName}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem px={"16"} >             
                     <Link to="/dash">
                      <Button variant="link" color={"black"}>Dashboard</Button>
                    </Link></MenuItem>

                    <MenuItem px={"20"} bgColor={"red.500"} color={"white"} textAlign={"center"}><Tooltip label='Log out'>

                      <Button onClick={handleSignOut} color={"white"} variant={"link"} >Logout</Button>
                    </Tooltip>
                    </MenuItem>
                  </MenuList>
                </Menu>
              }
              <Tooltip label={colorMode === 'light' ? 'dark mode' : 'light mode'}>

                <Button bgColor={"none"} onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon color={"orange"} />}
                </Button>
              </Tooltip>


            </HStack>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link to='/dash'>
                  <Button w="full" variant="ghost">
                    Dashboard
                  </Button>
                </Link>

                {!isAuth &&
                  <Link to='/login'>
                    <Button w="full" variant="ghost">
                      Log in
                    </Button>
                  </Link>
                }

                {isAuth &&
                  <Button w="full" variant="ghost" onClick={handleSignOut}>
                    Log Out
                  </Button>
                }

                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>

              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
};
export default Navbar;