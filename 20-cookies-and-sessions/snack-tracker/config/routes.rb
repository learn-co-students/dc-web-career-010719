Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :snacks
  resources :retailers, only: [:index, :show, :new, :create]
  get "/i-heart-snacks", to: "snacks#heart", as: "heart"
  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
