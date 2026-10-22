import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const VideoFooter = () => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@nabendu82</h3>
                <p>Macbook Air to new Windows editing beast</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                </div>
            </div>
        </div>
    )
}
export default VideoFooter