class SnacksController < ApplicationController

  before_action :get_snack, only: [:show, :edit, :update]

  def index
    @snacks = Snack.all
  end

  def show
  end

  def heart
    # delete all the snacks
    # send an email to my mom
    # recreate the Y2K bug
    render :love
  end

  def new
    @snack = Snack.new
  end

  def create
    @snack = Snack.new(snack_params)
    if @snack.save
      redirect_to snack_path(@snack)
    else
      render :new
    end
  end

  def edit
  end

  def update
    
    if @snack.update(snack_params)
      redirect_to snack_path(@snack)
    else
      render :edit
    end
  end

  def destroy
    Snack.destroy(params[:id])
    redirect_to snacks_path
  end

  private

  def snack_params
    params.require(:snack).permit(:name, :deliciousness, :calories)
  end

  def get_snack
    @snack = Snack.find(params[:id])
  end

end
