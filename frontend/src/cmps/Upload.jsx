import React, { Component } from 'react';
import { cloudService } from '../services/cloudinaryService.js';


export class Upload extends Component {
    state = {
        imgUrl: null,
        height: 100,
        width: 100,
        isUploading: false
    }

    uploadImg = async (ev) => {
        this.setState({ isUploading: true })
        const { secure_url, height, width } = await cloudService.uploadImg(ev)
        this.setState({ isUploading: false, imgUrl: secure_url, height, width })
    }
    get uploadMsg() {
        const { imgUrl, isUploading } = this.state
        if (imgUrl) return 'Upload Another Image?'
        return isUploading ? 'Uploading...' : 'Upload Image'
    }

    render() {
        const { imgUrl, width, height } = this.state
        const previewStyle = { backgroundImage: `url(${imgUrl})`, width, height }
        return (
            <div className="upload-preview" style={previewStyle}>
                <img src="" alt="" />
                <label htmlFor="imgUpload"> {this.uploadMsg}</label>
                <input type="file" onChange={this.uploadImg} accept="img/*" id="imgUpload" />
            </div>
        )
    }
}
