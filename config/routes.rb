Rails.application.routes.draw do
	
	devise_for :users, :path => '', :path_names => {:sign_in => 'login', :sign_out => 'logout'}
  resources :users
  resources :products
  get 'static_pages/news'

  get 'static_pages/contact'

  get 'static_pages/index'

  root 'static_pages#index'

  resources :orders, only: [:index, :show, :create, :destroy]

  post 'payments/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
