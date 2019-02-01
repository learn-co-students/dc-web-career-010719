class ApplicationController < Sinatra::Base

    # set :views, "app/views/home"
    set :method_override, true
    set :root, File.join(File.dirname(__FILE__), '..')
    set :views, File.join(root, "app/views/home")
    get "/home" do
        erb :home
    end


end
