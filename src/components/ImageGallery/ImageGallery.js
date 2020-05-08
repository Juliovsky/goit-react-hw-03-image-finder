import React, {Component} from 'react';
import styles from './imageGallery.module.css'
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import ButtonLoadMore from "../Button/Button";
// import Modal from "../Modal/Modal";


class ImageGallery extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                <ul className={styles.ImageGallery} >
                    {this.props.images.map(({id, webformatURL, largeImageURL}) => (
                        <ImageGalleryItem
                            key={id}
                            webformatURL={webformatURL}
                            largeImageURL={largeImageURL}
                            openModal={this.props.openModal}
                        />
                    ))}

                </ul>
            </>
        )

    }
}

export default ImageGallery