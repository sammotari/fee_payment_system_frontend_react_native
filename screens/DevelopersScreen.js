import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';

const DevelopersScreen = () => {
 // Sample data for developers
 const developers = [
    { name: 'Motari S', description: 'Full Stack Developer' },
    { name: 'Jack N', description: 'Frontend Developer' },
    { name: 'Gloria P', description: 'Backend Developer' },
    { name: 'Davis M', description: 'Mobile Developer' },
    { name: 'Ernest B', description: 'UI/UX Designer' },
    { name: 'Ruth M ', description: 'QA Engineer' },
    { name: 'Brian M', description: 'DevOps Engineer' },
 ];

 // Render each developer
 const renderItem = ({ item }) => (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <IconButton icon="account" size={20} onPress={() => console.log('View Profile')} />
      </Card.Actions>
    </Card>
 );

 return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={developers}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
 );
};

export default DevelopersScreen;
