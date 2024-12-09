import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const StudentProfile = ({ Id }) => {
 const [student, setStudent] = useState(null);

 useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`https://2443-41-90-69-124.ngrok-free.app/api/student/${Id}/`);
        setStudent(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentDetails();
 }, [Id]);

 if (!student) {
    return <Text>Loading...</Text>;
 }

 return (
    <View>
      <Text>Registration Number: {student.registration_number}</Text>
      <Text>Department: {student.department}</Text>
      <Text>Year of Study: {student.year_of_study}</Text>
      <Text>Semester: {student.semester}</Text>
      <Text>Phone Number: {student.phone_number}</Text>
    </View>
 );
};

export default StudentProfile;