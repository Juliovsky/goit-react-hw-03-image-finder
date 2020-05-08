import React from 'react';
import * as basicLightbox from 'basiclightbox'
import styles from './Modal.module.css'

class Modal extends React.Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);

    }

    handleKeyDown=(e)=>{
        if(e.code!=='Escape'){
            return
        }
        this.props.openModal(e)
}

    render() {
        return (
            <div className={styles.Overlay} onClick={this.props.openModal}>
                <div className={styles.Modal}>
                    <img  src={this.props.largeImageURL} alt=""/>
                </div>
            </div>)

    }
}

export default Modal


