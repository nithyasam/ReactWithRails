class MenuListsController < ApplicationController
  def index
    @menu_lists = MenuList.all

  end
end
