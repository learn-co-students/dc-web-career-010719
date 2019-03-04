class CatHobbiesController < ApplicationController
  def create
    render json: CatHobby.create(cat_hobby_params)
  end

  private
  def cat_hobby_params
    params.require(:cat_hobby).permit(:cat_id, :hobby_id)
  end
end
