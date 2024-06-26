import { Box, Button, Input, VStack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleUpload = () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("File uploaded successfully");
        // Optionally, you can add logic to update the user's feed or profile page
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input type="file" onChange={handleFileChange} />
        {preview && <Image src={preview} alt="Selected file preview" boxSize="200px" />}
        <Button onClick={handleUpload} colorScheme="blue">Upload Photo</Button>
      </VStack>
    </Box>
  );
};

export default Upload;