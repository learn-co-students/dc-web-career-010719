class CrowdsController < ApplicationController
  def index
    @crowds = Crowd.all
  end
end
