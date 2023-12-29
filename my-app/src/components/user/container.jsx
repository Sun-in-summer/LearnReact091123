import { useDispatch, useSelector } from 'react-redux';
import { selectUserById } from '../../redux/features/enitites/user/selector'
import { User } from './component'
import { useEffect } from 'react';
import { getUsers } from '../../redux/features/enitites/user/thunks/get-users';

export const UserContainer= ({userId})=> {

    const dispatch = useDispatch();
    // useEffect(() =>{
    //     dispatch(getUsers())
    // }, [dispatch])


    const user = useSelector((state) => selectUserById(state, userId) );

     return <User user={user} />
}