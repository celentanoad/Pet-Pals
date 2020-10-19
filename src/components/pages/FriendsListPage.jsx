import React from 'react';
import Friend from '../Friend'

const FriendsListPage = ({profile}) => {
    return ( 
        <div>
            {profile.friends.length ?
            profile.friends.map(friend => {
                return <Friend friendId={friend}/>
            })
            :
            <p>You don't have any friends </p> 
            }
            <p>List Friends here:</p>
            <p>Card components w/ Name, Avatar, and Type of Animal</p>
            <p>"View Profile" button and "Remove Friend" button</p>
        </div>
     );
}
 
export default FriendsListPage;