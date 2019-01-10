class User

    attr_reader :username


    def initialize(username)
        @username = username
    end

    def post_tweet(message)
        tweet = Tweet.new(message, self)
    end

    def tweets
        # look through all tweets
        # choose the ones that have this user as their user
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end
end

