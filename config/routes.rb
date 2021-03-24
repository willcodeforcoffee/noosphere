# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  devise_for :user_credentials
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
  get 'home/index'
  root to: 'home#index'

  unless Rails.env.production?
    get 'theme/index'
    post 'theme/index'
  end

  # Site Administration Namespace
  namespace :admin do
    get 'home/index'
    get '/', to: 'home#index'
  end

  # Social Activity Namespace
  namespace :social do
    get 'home/index'
    get '/', to: 'home#index'
  end
end
