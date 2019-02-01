Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :snacks
  get "/i-heart-snacks", to: "snacks#heart", as: "heart"
end
