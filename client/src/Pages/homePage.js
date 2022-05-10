import React from 'react';

function Homepage() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <div className='card'>
                        <img src='https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg' alt='Top lists' className='card-img-top'></img>
                        <div className='card-body'>
                            <h5 className='card-title'>Top Lists</h5>
                            <p className='card-text'>Top lists on your Spotify account</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className='row'>
                <div className='card'>
                    <img src='https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg' alt='Pop music' className='card-img-top'></img>
                    <div className='card-body'>
                        <h5 className='card-title'>Pop music</h5>
                        <p className='card-text'>Pop music on your Spotify account</p>
                    </div>
                </div>
            </div>
            <br/>
            <div className='row'>
                <div className='card'>
                    <img src='https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg' alt='Hip-Hop music' className='card-img-top'></img>
                    <div className='card-body'>
                        <h5 className='card-title'>Hip-Hop music</h5>
                        <p className='card-text'>Hip-Hop music on your Spotify account</p>
                    </div>
                </div>
            </div>
            <br/>
            <div className='row'>
                <div className='card'>
                    <img src='https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg' alt='Mood music' className='card-img-top'></img>
                    <div className='card-body'>
                        <h5 className='card-title'>Mood music</h5>
                        <p className='card-text'>Mood music on your Spotify account</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homepage;