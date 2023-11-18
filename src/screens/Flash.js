import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';

const Flashcard = ({ question, answer, image }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setShowAnswer(!showAnswer)}
    >
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Text style={styles.text}>
        {showAnswer ? answer : question}
      </Text>
    </TouchableOpacity>
  );
};

const Flash = () => {
  const [cards, setCards] = useState([
    
  ]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [newImage, setNewImage] = useState('');

  const handleAddCard = () => {
    setCards([...cards, { question: newQuestion, answer: newAnswer, image: newImage }]);
    setNewQuestion('');
    setNewAnswer('');
    setNewImage('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a question"
          value={newQuestion}
          onChangeText={(text) => setNewQuestion(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter an answer"
          value={newAnswer}
          onChangeText={(text) => setNewAnswer(text)}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddCard}
        >
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: '#007aff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardsContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    height: '50%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer:{
     width:'100%',
     height:'50%',
     alignItems:'center',
     justifyContent:'center'
   },
   image:{
     width:'100%',
     height:'100%'
   }
});

export default Flash;

