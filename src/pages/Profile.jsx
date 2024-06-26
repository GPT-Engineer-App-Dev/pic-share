import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Profile = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/api/user/photos");
        if (response.ok) {
          const data = await response.json();
          setPhotos(data);
        } else {
          console.error("Failed to fetch photos");
        }
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);
  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Image borderRadius="full" boxSize="150px" src="/path/to/profile-pic.jpg" alt="Profile Picture" />
        <Heading as="h1" size="xl">User Name</Heading>
        <Text fontSize="lg">user@example.com</Text>
        <Text fontSize="md">Bio: A short bio about the user.</Text>
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <Image key={index} src={photo.url} alt={`Photo ${index}`} boxSize="200px" />
          ))
        ) : (
          <Text>No photos available</Text>
        )}
      </VStack>
    </Box>
  );
};

export default Profile;