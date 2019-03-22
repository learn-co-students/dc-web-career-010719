class GiphiesController < ApplicationController
  def index
    render json: Giphy.all
  end
end
