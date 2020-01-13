import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { fetchGdFiles } from '../actions/googleDriveActions';

class GoogleDriveFilesList extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.props.fetchGdFiles(['mp3', 'jpg']);
    }

    render() {
        const { files, loading, error } = this.props;

        if (error) {
            return <Text>{error}</Text>
        }

        if (loading) {
            return <Text>Loading...</Text>
        }

        return (
            <View>
            {
                files.map(file => <Text style={styles.text} key={file.id}>{file.originalFilename}</Text>)
            }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        fontSize: 30
    }
});

// map state from store to props and a function named 'dispatch'
const mapStateToProps = (state) => {
    return {
        files: state.googleDrive.files,
        loading: state.googleDrive.loading,
        error: state.googleDrive.error
    };
}

const mapDispatchToProps = {
    fetchGdFiles
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleDriveFilesList);