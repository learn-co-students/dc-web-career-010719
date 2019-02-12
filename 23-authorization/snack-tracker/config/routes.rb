Rails.application.routes.draw do
  resources :snacks
  resources :retailers, only: [:index, :show, :new, :create]
  resources :users, only: [:new, :create]
  get "/i-heart-snacks", to: "snacks#heart", as: "heart"
  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
