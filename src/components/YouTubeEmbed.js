import React from 'react';
import clsx from 'clsx';
import styles from './YouTubeEmbed.module.css';

export default function YouTubeEmbed( {URL} ) {
    return (
        <div className={styles.youtubeHero}>
            <iframe
                src={URL}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    );
}