import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { connect } from 'react-redux';
import PhotoGallary from "../../components/PhotoGallary";
import Post from "../../components/Post";

import { actions } from '../../models/history';

class HistoryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'History',
        headerLeft: (<TouchableHighlight
            onPress={() => navigation.state.params.setModalVisible(true)} >
            <Text>Add Post</Text>
        </TouchableHighlight>)
    })

    state = {
        modalVisible: false,
    };

    componentDidMount() {
        const { setHistory, token } = this.props
        this.props.navigation.setParams({
            setModalVisible: this.setModalVisible.bind(this)
        });
        setHistory(token)
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render() {
        const { historyList } = this.props
        const { modalVisible } = this.state

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <PhotoGallary
                    setModalVisible={this.setModalVisible}
                    modalVisible={modalVisible}
                />
                <Post
                    historyList={historyList}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {

    return {
        token: state.auth.token,
        historyList: state.history.history,
    }
};

// Auth.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, actions)(HistoryScreen);