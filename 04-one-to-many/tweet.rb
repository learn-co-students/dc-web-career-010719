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
end