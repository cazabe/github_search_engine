// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { fetchUserData } from '../redux/search_user/searchUser.actions';
import {
    selectSearchUser,
} from '../redux/search_user/searchUser.slice';

export function SearchUserProfile() {
    let userSearch: string = 'cazabe';
    const user = useAppSelector(selectSearchUser)
    console.log('This is the user', user);

    const dispatch = useAppDispatch()
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(fetchUserData(userSearch))}
                >
                    Search User profile
                </button>
                <p></p>
            </div>
            {/* omit additional rendering output here */}
        </div>
    )
}