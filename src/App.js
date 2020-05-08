import React, {Component} from 'react';
import Searchbar from './components/Searchbar/Searchbar'
import * as imageApi from './services/imageApi'
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ButtonLoadMore from "./components/Button/Button";
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader'

// import * as basicLightbox from 'basiclightbox';
// import styles from "./components/Modal/Modal.module.css";

class App extends Component {
    state = {
        images: [],
        page: 1,
        query: '',
        showModal: false,
        imgurl: '',
        isLoading: false

    }

    componentDidMount() {
        this.fetchImages();
        this.setState({isLoading: true})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.query !== this.state.query) {
            this.setState({page: 1})
        }
    }

    handleChange = (e) => {
        this.setState({query: e.target.value})

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchImages(this.state.query, this.state.page)
    }


    fetchImages = (query, page) => {

        imageApi
            .fetchImages(query, page)
            .then(response => this.setState({
                images: [...response.data.hits],
                page: this.state.page + 1,
            }))
            .finally(()=>this.setState({ isLoading: false}))
    }

    loadMoreImages = () => {
        imageApi.fetchImages(this.state.query, this.state.page)
            .then(response => this.setState(prevState => ({
                images: [...prevState.images, ...response.data.hits],
                page: prevState.page + 1,
                isLoading: false
            })))

        window.scrollTo({
            top: 0,//document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }

    openModal = (e) => {

        const imgurl = e.target.dataset.url ? e.target.dataset.url : ''
        this.setState(prevState => ({
            showModal: !prevState.showModal,
            imgurl
        }))
    };


    render() {

        return (
            <>
                <Searchbar handleSubmit={this.handleSubmit}
                           handleChange={this.handleChange}
                />
                {this.state.isLoading ? <Loader/> : <ImageGallery
                    images={this.state.images}
                    openModal={this.openModal}
                />}

                {(this.state.images.length > 0) && <ButtonLoadMore loadMoreImages={this.loadMoreImages}/>}
                {this.state.showModal &&
                <Modal largeImageURL={this.state.imgurl}
                       openModal={this.openModal}
                />}
            </>
        )

    }
}

export default App;