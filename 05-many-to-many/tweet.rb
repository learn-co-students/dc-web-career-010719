class Tweet

    attr_reader :message, :user

    @@all_tweets = []

    def initialize(message, user)
        @message = message
        @user = user # User object
        @@all_tweets << self
    end

    def self.all
        @@all_tweets
    end

    def username
        self.user.username
    end

    def likers
        Favorite.all.select do |fave|
            fave.tweet == self
        end.collect do |fave|
            fave.user 
        end

    end
end

