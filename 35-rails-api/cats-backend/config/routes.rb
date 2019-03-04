Rails.application.routes.draw do
  resources :cats
  resources :hobbies, only: [:index]
  resources :cat_hobbies, only: [:create]
end
