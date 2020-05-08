import React from "react";
import styles from './button.module.css'

const ButtonLoadMore = ({loadMoreImages}) => (
    <button className={styles.Button}
            onClick={loadMoreImages}>Load more</button>
)


export default ButtonLoadMore