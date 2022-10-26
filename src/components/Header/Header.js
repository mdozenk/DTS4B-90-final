import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../feature/movies/movieSlice';
import "./Header.scss"
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';



const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    const [term, setTerm] = useState("")
    const dispatch = useDispatch()
    const submitHandler = (e) =>{
        e.preventDefault();
        if(term === "") return alert("Tidak boleh Kosong")
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
    }
    return (
        <div className='header'>
            <div className='logo'>
                <Link to="/Home">Movie App</Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder="Search Movie or Series" onChange={(e) => setTerm(e.target.value)}/>
                </form>
            </div>
            
            <div>
                Hello {user.email}
            </div>
            <div className='log-out-btn'>
                <button onClick={onLogout} type='submit'><i class="fa fa-sign-out" aria-hidden="true"></i></button>
            </div>
            

        </div>
    );
};

export default Header;