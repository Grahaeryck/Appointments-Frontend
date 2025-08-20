import { useMemo} from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  HStack,
  Image,
  Container,
  Text
} from "@chakra-ui/react";
import Logo48 from "../Asset/Logo48.svg";


type Props = {
    screen: string | undefined;
    layoutSize: string | undefined;
  };
  
  const activePage = {
    color: '#C19A6B',
    padding:"10px",
    textDecoration: "none",
  };


  function Navbar({ screen, layoutSize }: Props) {
    const Pages = useMemo(
      () => [
        {
          path: "/Rsvp",
          text: "RSVP",
        },
        {
          path: "/GitFrontend",
          text: "Git Frontend",
        },
        {
          path: "/GitBackend",
          text: "Git Backend",
        },
      ],
      []
    );

    return (
        <>
        <Box>
          <Container
            maxW={"container.2xl"}
            px={["2rem", "2rem", "2rem", "2rem"]}
            position={"fixed"}
          >
            
            <Flex as="nav" p={{base: "6px", md: "8px" , lg: "10px"}} alignItems="center">
              <Image boxSize={{base: "20px", sm:"30", md: "40px" , lg: "55px"}} src={Logo48} alt='SG' />
              <Text p="10px" olor={'#483C32'} fontSize={{base: "12px", md: "15px" , lg: "20px"}}>
                RS Kita Mampu
              </Text>
              <Spacer></Spacer>

              <HStack spacing={{base: "3px", md: "10px" , lg: "15px"}} align={'center'}>
                {Pages.map((data, index) => {
                    return (
                      <Box
                        p="5px" 
                        color={'#483C32'}
                        fontSize={{base: "12px", md: "15px" , lg: "20px"}}
                        key={index}
                        as={NavLink}
                        to={data.path}
                        _activeLink={activePage}
                        // mt={5}
                      >
                        {data.text}
                      </Box>
                    );
                  })}
              </HStack>
            </Flex>
          </Container>
        </Box>
        </>
    );
  }

  export default Navbar;