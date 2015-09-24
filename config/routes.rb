Rails.application.routes.draw do
  root to: 'static_pages#root'


  namespace :api, defaults: { format: :json } do
    resources :projects
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :show, :destroy]
    resources :rewardings, only: [:create]
    get "/search", to: "static_pages#search"
    get "/search_category", to: "static_pages#search_category"
  end

  get "/auth/:provider/callback", to: "api/sessions#omniauth"

end
