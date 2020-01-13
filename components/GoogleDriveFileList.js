import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGDFiles } from '../actions/googleDriveFilesActions';
import {
    Text,
    View
} from 'react-native';

class GoogleDriveFileList extends Component<Props> {

    constructor(props: Props) {
        super(props);

        this.props.fetchGDFiles(['mp3']);
    }

    showList = (gdFiles = []) => {
        if (!gdFiles || gdFiles.length == 0)
            return null;

        return (
            <View>
                {
                    gdFiles.map(file =>
                        <Text key={file.id}>{file.originalFilename}</Text>
                    )
                }
            </View>
        )
    }

    render() {
        const { error, loading, gdFiles } = this.props;

        if (error) {
            return <Text>Error! { error.message }</Text>
        }

        if (loading) {
            return <Text>Loading...</Text>
        }

        {return this.showList(gdFiles)}
    }
}

const mapStateToProps = state => ({
    gdFiles: state.gdFilesReducer.gdFiles,
    loading: state.gdFilesReducer.loading,
    error: state.gdFilesReducer.error
});

const mapDispatchToProps = {
    fetchGDFiles
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleDriveFileList);