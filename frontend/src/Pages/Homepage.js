import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  keyframes,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  // Define a keyframes animation for color changing
  const colorChange = keyframes`
    0% { color: #FF0080; }
    25% { color: #7928CA; }
    50% { color: #FF8C00; }
    75% { color: #2D3748; }
    100% { color: #FF0080; }
  `;

  return (
    <Container maxW="xl" centerContent mb="20px">
      <Box
        display="flex"
        justifyContent={"center"}
        p={2}
        bg={"white"}
        w="100%"
        m="20px 0 10px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="4xl"
          fontFamily="Work Sans"
          animation={`${colorChange} 5s ease-in-out infinite`} // Apply the animation
          fontWeight="bold" // Make the text bold
        >
          TwistChat
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={1}
        borderRadius="10px"
        color="black"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1px">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
