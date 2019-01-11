class User

    attr_reader :username


    def initialize(username)
        @username = username
    end

    def post_tweet(message)
        Tweet.new(message, self)
    end

    def tweets
        # look through all tweets
        # choose the ones that have this user as their user
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end

    def like_tweet(tweet)
        Favorite.new(self, tweet)
    end

    def liked_tweets
        # return all the tweets this user has liked
        faves = Favorite.all.select do |fave|
            fave.user == self
        end
        faves.collect do |fave|
            fave.tweet
        end
    end

    def is_author?(tweet)
        return tweet.user == self
    end

    def delete_tweet(tweet)
        if self.is_author?(tweet)
            Tweet.all.delete(tweet)
            faves_to_delete = Favorite.all.select {|fave| fave.tweet == tweet}
            faves_to_delete.each do |bad_fave|
                Favorite.all.delete(bad_fave)
            end
        else
            puts "Nice try buddy"
        end
    end

    def like_count_for_user(user)
        self.liked_tweets.select do |tweet|
            tweet.user == user
        end.length

    end
end

