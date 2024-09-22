import { Box, Text } from "@chakra-ui/react"; // Import Text from Chakra UI
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "65%" }}
      height="98%"
      borderRadius="lg"
      borderWidth="1px"
      boxShadow="lg" // Adding a shadow for better depth
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        color="teal.500" // Teal color for a fresh look
        mb={4} // Margin bottom for spacing
      >
        Chatbox
      </Text>
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
