import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Api } from '../../utils/Api/api';
import { routes } from '../../utils/Navigation/routes';
import Loader from '../../Components/Loader.component';

const FeedbackScreen = ({ navigation }) => {
    const { params } = useRoute();
    const courseInfo = params?.course;
    const course = {
        title: 'Mastering React Native',
        author: 'John Doe',
        description: 'Learn how to build amazing mobile apps using React Native.',
    };
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [loading,setLoading] = useState(false);


    const handleStarPress = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleSubmitFeedback = async () => {
        try {
            setLoading(true);
            // Implement your feedback submission logic here
            // You can use the 'rating' and 'feedback' state values
            const api = new Api();
            const apiCall = await api.post(`/courses/leave-feedback`, {
                "courseId": courseInfo?._id,
                "rating": rating,
                "feedback": feedback
            },true);
            navigation.replace(routes.reviewsRatings,{
                course:courseInfo
            });
            setLoading(false);
        }
        catch (e) {
            setLoading(false);
            alert(JSON.stringify(e));
        }
    };

    return (
        <View style={styles.container}>
            <Loader
            isVisible={loading}
            />
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={styles.courseDetails}>
                <Text style={styles.courseTitle}>{courseInfo.courseTitle}</Text>
                <Text style={styles.courseAuthor}>{`By ${courseInfo.author?.author_name}`}</Text>
                <Text numberOfLines={2} style={styles.courseDescription}>{courseInfo.courseDescription}</Text>
            </View>
            <Text style={styles.ratingTitle}>Rate this course</Text>
            <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((num) => (
                    <TouchableOpacity
                        key={num}
                        onPress={() => handleStarPress(num)}
                        style={styles.star}
                    >
                        <Icon
                            name={rating >= num ? 'star' : 'star-border'}
                            size={30}
                            color="#FFA500"
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <TextInput
                style={styles.feedbackInput}
                placeholder="Write your feedback here..."
                value={feedback}
                onChangeText={(text) => setFeedback(text)}
                multiline
                placeholderTextColor={'white'}
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmitFeedback}>
                <Text style={styles.submitButtonText}>Submit Feedback</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 2,
    },
    courseDetails: {
        marginTop: 45,
    },
    courseTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    courseAuthor: {
        color: '#888888',
        marginBottom: 5,
    },
    courseDescription: {
        color: '#FFFFFF',
    },
    ratingTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        // justifyContent: 'center',
        marginVertical: 20,
    },
    star: {
        marginHorizontal: 4,
    },
    feedbackInput: {
        backgroundColor: '#333333',
        color: 'white',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        minHeight: 150,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#FFA500',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
    },
    submitButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default FeedbackScreen;