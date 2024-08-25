import { Client } from 'react-native-appwrite';

export const appwriteConfig= {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.aditya.vidnest',
    projectId: '66cad6f1003a1d00d389',
    databaseId: '66cad9f1001c9eb9edc1',
    userCollectionId: '66cada7c00127a05a919',
    videpCollectionId: '66cadab000175280a974',
    storageId: '66cadda9002e7c48d544',
}  

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.id) //s Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

// Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
