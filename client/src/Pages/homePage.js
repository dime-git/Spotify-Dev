import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyCategory from '../Components/Categories/SpotifyCategory';
import { getCategories } from '../../src/redux/Spotify/spotify.actions';

function Homepage() {
    const dispatch = useDispatch();

    const { spotify: categories } = useSelector(state => state)

    useEffect(() => {
        dispatch(getCategories())
    }, [])


    return (
        <div className="container">
            {categories?.categories?.items !== undefined && categories?.categories?.items.map((item, idx) => {
                return <SpotifyCategory key={idx} imgUrl={item?.icons[0]?.url} categoryName={item?.name} />
            })}
        </div>
    )
}

export default Homepage;