import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { connect } from 'react-redux';

import { actions } from '../../models/history';

class HistoryScreen extends React.Component {
    componentDidMount() {
        const { setHistory, token } = this.props
        setHistory(token)
    }
    render() {
        const { historyList } = this.props

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image
                    style={{ width: item.images.low_resolution.width, height: item.images.low_resolution.height }}
                    source={{ uri: item.images.low_resolution.url }} />
                <Text>{item.user.full_name}</Text>
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