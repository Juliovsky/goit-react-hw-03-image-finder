import React, {Component} from 'react';
import styles from './searchbar.module.css';




class Searchbar extends Component {


    render() {
        return (
            <>
                <header className={styles.searchbar}>
                    <form className={styles.searchForm} onSubmit={this.props.handleSubmit}>
                        <button type="submit" className={styles.searchFormButton}>
                            <span className={styles.searchFormButtonLabel}>Search</span>
                        </button>

                        <input
                            value={this.props.query}
                            onChange={this.props.handleChange}
                            className={styles.searchFormInput}
                            type="text"
                            placeholder="Search images and photos"
                        />
                    </form>
                </header>

            </>
        );
    }

}

export default Searchbar






