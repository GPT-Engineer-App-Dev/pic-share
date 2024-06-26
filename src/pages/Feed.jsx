import { Box, VStack, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Feed = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/api/photos");
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
      <VStack spacing={4}>
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

export default Feed;