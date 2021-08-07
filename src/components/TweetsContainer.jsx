import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);

  // console.log(users);
  const handleTweetLike = (userId, tweetId, isLiked) => {
    // console.log("executed");
    setUsers((prevUsers) => {
      // console.log("user id is", userId, tweetId);

      return prevUsers.map((user) => {
        if (user.id === userId) {
          const newTweets = user.tweets.map((tweet) => {
            // console.log(tweet, tweet.favorite_count);
            if (tweet.id === tweetId) {
              const new_favorite_count = isLiked
                ? tweet.favorite_count - 1
                : tweet.favorite_count + 1;
              return {
                ...tweet,
                favorite_count: new_favorite_count
              };
            }
            return tweet;
          });

          return {
            ...user,
            tweets: newTweets
          };
        }
        return user;
      });
    });
  };

  const [selectedUser, setSelectedUser] = useState(users[0].id);

  // console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} handleUserClick={setSelectedUser} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList
            user={users.find((user) => user.id === selectedUser)}
            handleTweetLike={handleTweetLike}
          />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
