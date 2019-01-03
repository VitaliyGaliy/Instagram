import React from "react";
import { View, Modal, Text, TouchableHighlight, Linking, PermissionsAndroid, Platform } from "react-native";
import CameraRollPicker from 'react-native-camera-roll-picker';


class PhotoGallary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 0,
            selected: [],
        };
        this.getSelectedImages = this.getSelectedImages.bind(this);
    }

    componentDidMount() {
        isAndroid = Platform.OS && this.requestPhotosPermission()
        Linking.addEventListener('instagram://app', console.log('Linking.addEventListener')
        );
    }

    async requestPhotosPermission() {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.getSelectedImages();
            } else {
                console.log("Photos permission denied")
            }
        } catch (err) {
            console.warn(err)
        }
    }

    getSelectedImages(images, current) {
        const imageURL = images[0] && images[0].uri
        this.setState({
            selected: images,
        });
        if (imageURL) {
            let encodedURL = encodeURIComponent(imageURL);
            let instagramURL = `instagram://library?AssetPath=${encodedURL}`;
            Linking.openURL(instagramURL);
            console.log('images', images[0] && images[0].uri);
        }
    }

    render() {
        const { setModalVisible, modalVisible } = this.props
        const isAndroid = Platform.OS === 'Android' ? true : false
        return (
            <Modal
                visible={modalVisible}
            >
                <CameraRollPicker
                    selected={this.state.selected}
                    callback={this.getSelectedImages}
                    maximum={1}
                />
                <View style={{ marginTop: 22 }}>
                    <View>
                        <Text>Hello World!</Text>
                        <TouchableHighlight
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        );
    }
}

// Auth.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default PhotoGallary;