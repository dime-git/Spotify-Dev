import React from 'react';

const SpotifyCategory = ({ imgUrl, categoryName }) => {
    <div className='row'>
        <div className='col-4'>
            <div className='card'>
                <img src={imgUrl} alt='alt_text' />
                <div className='card-body'>
                    <h5 className='card-title'>{categoryName}</h5>
                </div>
            </div>
        </div>
    </div>
}

export default SpotifyCategory;