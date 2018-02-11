class MenuListsController < ApplicationController
  def create
    @menu = MenuList.new(menu_params)

    if @menu.save
      render json: @menu
    else
      render json: @menu.errors, status: :error_processing
    end
  end

  def index
    @menu_lists = MenuList.all
  end

  def main
    index
  end

  private
  def menu_params
    params.require(:menu).permit(:date, :name, :isPresent, :price)
  end
end
