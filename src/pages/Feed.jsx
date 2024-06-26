import { Box, VStack, Image, Text, Button, HStack } from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";
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

  const handleLike = (index) => {
    const updatedPhotos = [...photos];
    updatedPhotos[index].likes = (updatedPhotos[index].likes || 0) + 1;
    setPhotos(updatedPhotos);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <Box key={index}>
              <Image src={photo.url} alt={`Photo ${index}`} boxSize="200px" />
              <HStack spacing={2}>
                <Button leftIcon={<FaThumbsUp />} onClick={() => handleLike(index)}>
                  Like
                </Button>
                <Text>{photo.likes || 0} Likes</Text>
              </HStack>
            </Box>
          ))
        ) : (
          <Text>No photos available</Text>
        )}
      </VStack>
    </Box>
  );
};

export default Feed;