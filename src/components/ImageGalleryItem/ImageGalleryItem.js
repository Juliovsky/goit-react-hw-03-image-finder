import React from "react";
import styles from './imageGallaryItem.module.css'
import Modal from '../Modal/Modal'


export const ImageGalleryItem = ({id, webformatURL, openModal, largeImageURL}) => (
    <>
        <li key={id} className={styles.ImageGalleryItem}>
            <img className={styles.ImageGalleryItemImage}
                 src={webformatURL}
                 alt="image" onClick={openModal}
                 data-url={largeImageURL}/>
        </li>
    </>

)



