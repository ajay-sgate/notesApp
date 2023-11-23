import React from 'react';
import { HStack, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import EditModal from './EditModal';
import ViewModal from './ViewModal';

const NoteCard = ({ note, onDelete }) => {
  const truncateText = (text, limit) => {
    return (text.length > limit ? text.slice(0, limit) + " ..." : text);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      p={4}
      bgColor="white"
      w={['100%', '80%', '60%', '40%']}
    >
      <Box bgColor="white" p={6} maxW={"100%"} borderRadius="lg"
        boxShadow="lg" >
        <Text mb={2} fontWeight="bold" fontSize="xl">
          Title: {truncateText(note.title, 15)}
        </Text>
        <Text mb={2}  >
          Content: {truncateText(note.content, 20)}
        </Text>
        <Text mb={2} fontSize="sm" color="gray.500">
          Created at: {new Date(note.created_at).toLocaleString()}
        </Text>
        <Flex mt={4} justifyContent={"space-around"}>

          <EditModal note={note} />

          <ViewModal note={note}/> 
          <Button colorScheme="red" onClick={() => onDelete(note.id)}>
            Delete
          </Button>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default NoteCard;