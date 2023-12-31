import React from 'react';
import { Box, Button, Flex, Text, Tooltip, } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import EditModal from './EditModal';
import ViewModal from './ViewModal';
import { DeleteIcon } from '@chakra-ui/icons'
import DeleteModal from './DeleteModal';
const NoteCard = ({ note, onDelete, getData }) => {

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
        <Tooltip label={note.title} hasArrow>

          <Text mb={2} fontWeight="bold" fontSize="xl" color={"black"}>
            Title: {truncateText(note.title, 15)}
          </Text>
        </Tooltip>
        <Tooltip label={note.content} hasArrow>

          <Text mb={2} color={"black"} >
            Content: {truncateText(note.content, 20)}
          </Text>
        </Tooltip>
        <Text mb={2} fontSize="sm" color="gray.500">
          Created at: {new Date(note.created_at).toLocaleString()}
        </Text>
        <Flex mt={4} justifyContent={"space-around"}>

          <EditModal note={note} getData={getData} />

          {/* <ViewModal note={note} /> */}

          <DeleteModal onDelete={onDelete} note={note} />

        </Flex>
      </Box>
    </motion.div>
  );
};

export default NoteCard;