'use client'

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Home() {
  const { isAuth } = useSelector((store) => store.authReducer);
  return (
    <>
      <Container maxW={'3xl'} height={'90vh'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pt={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Free Notes Taking App <br />
            <Text as={'span'} color={'teal'}>
              for your personal use
            </Text>
          </Heading>
          <Text color={'gray.400'}>
            Transform thoughts into reality with our notes app. Capture ideas on the fly, effortlessly turning them into reality. Your creativity, our canvas. Make every note a step closer to realizing your dreams.
          </Text>
          {!isAuth &&
            <Stack
              direction={'column'}
              spacing={2}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
              <Link to='/register'>

                <Button
                  colorScheme={'teal'}
                  rounded={'full'}
                  px={6}
                >
                  Get Started
                </Button>
              </Link>
            </Stack>
          }
          {isAuth &&
            <Stack
              direction={'column'}
              spacing={2}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
              <Link to='/dash'>

                <Button
                  colorScheme={'teal'}
                  rounded={'full'}
                  px={6}
                >
                  Dashboard
                </Button>
              </Link>
            </Stack>
          }
        </Stack>
      </Container>
    </>
  )
}

