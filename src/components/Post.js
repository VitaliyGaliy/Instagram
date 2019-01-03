import React from "react";
import { View, FlatList, Text, Image } from "react-native";


class Post extends React.Component {


    render() {
        const { historyList } = this.props

        return (
            <View style={{ marginTop: 22 }}>
                <FlatList
                    // key={}
                    data={historyList}
                    ItemSeparatorComponent={() => <View style={{ borderTopWidth: 1, borderTopColor: 'black' }} />}
                    renderItem={({ item }) => (
                        <View
                        //   style={styles.itemWrapper}
                        >
                            <Image
                                style={{ width: item.images.low_resolution.width, height: item.images.low_resolution.height }}
                                source={{ uri: item.images.low_resolution.url }} />
                            <Text>{item.user.full_name}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

// Auth.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default Post;