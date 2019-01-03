import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { WebView } from "react-native-webview";
import { connect } from 'react-redux';
import { actions } from '../../models/auth';
import Cookie from 'react-native-cookie';

class Auth extends Component {
    static navigationOptions = {
        header: null,
    };
    componentWillMount() {
        // const setToken = this.props
        // Cookie.clear();
        console.log('componentWillMount');

    }

    onNavigationStateChange(navState) {
        const { setToken, navigation } = this.props
        const token = navState.url.includes('access_token=') ?
            navState.url.split('access_token=')[1] :
            ''

        if (token) {
            setToken(token)
            navigation.navigate('History')
        }
    }
    render() {

        return (
            <View style={styles.container} >
                <WebView
                    useWebKit={false}
                    source={{ uri: "https://api.instagram.com/oauth/authorize/?client_id=4e06b49a7a2a4974bd70df6293b10f8f&redirect_uri=https://www.google.com&response_type=token&scope=public_content" }}
                    style={{ marginTop: 20 }}
                    scalesPageToFit
                    startInLoadingState
                    // onLoadProgress={e => console.log(e.nativeEvent.progress)}
                    onNavigationStateChange={
                        this.onNavigationStateChange.bind(this)
                    }
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    }
};

// Auth.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, actions)(Auth);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    }
});