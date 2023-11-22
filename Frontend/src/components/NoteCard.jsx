import React from 'react';
import { HStack, Box, Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const NoteCard = ({ note, onDelete, onEdit }) => {
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
        <Box bgColor="white" p={6} maxW={"100%"}       borderRadius="lg"
      boxShadow="lg" >

      <Box mb={2} fontWeight="bold">
        Title : {note.title}
      </Box>
      <Box mb={2}>Content : {note.content}</Box>
      <Box mb={2} fontSize="sm" color="gray.500">
        Created at: {new Date(note.created_at).toLocaleString()}
      </Box>
      <Flex mt={4} justifyContent={"space-around"}>
        <Button colorScheme="teal" onClick={() => onEdit(note.id)}>
          Edit
        </Button>
        <Button colorScheme="blue" 
        // onClick={() => onEdit(note.id)}
        >
          View
        </Button>
        <Button colorScheme="red" onClick={() => onDelete(note.id)}>
          Delete
        </Button>
      </Flex>
        </Box>
    </motion.div>
  );
};

export default NoteCard;