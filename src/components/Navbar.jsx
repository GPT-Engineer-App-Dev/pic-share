import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" p={4}>
      <Flex justify="space-between">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">Home</Link>
        <Link as={RouterLink} to="/profile" color="white" fontWeight="bold">Profile</Link>
        <Link as={RouterLink} to="/upload" color="white" fontWeight="bold">Upload</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;