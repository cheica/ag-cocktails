Rails.application.routes.draw do
  namespace :api do 
  
  resources :rates
  resources :reviews
  resources :cocktails, only: [:index, :create, :destroy]
  resources :users, only: [:index]

  post "/login", to: "sessions#create"
  delete "/login", to: "sessions#destroy"
  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
