Rails.application.routes.draw do
  root :to => "menu_lists#main"
  resources :menu_lists
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
