Rails.application.routes.draw do
  root to: 'static_pages#root'


  namespace :api, defaults: { format: :json } do
    resources :projects
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :show, :destroy]
    resources :rewardings, only: [:create]
  end

  get "/auth/:provider/callback", to: "api/sessions#omniauth"

end
