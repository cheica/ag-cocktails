Rails.application.routes.draw do
  
  resources :reviews
  resources :cocktails, only: [:index, :create, :destroy]
  resources :users, only: [:index]

  post "/login", to: "sessions#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
