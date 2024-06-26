import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Image borderRadius="full" boxSize="150px" src="/path/to/profile-pic.jpg" alt="Profile Picture" />
        <Heading as="h1" size="xl">User Name</Heading>
        <Text fontSize="lg">user@example.com</Text>
        <Text fontSize="md">Bio: A short bio about the user.</Text>
      </VStack>
    </Box>
  );
};

export default Profile;