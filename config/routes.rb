# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails
  .application
  .routes
  .draw do
    Rails
      .application
      .routes
      .draw do
        devise_for :user_credentials,
                   controllers: {
                     confirmations: 'user_credentials/confirmations',
                     # omniauth_callbacks: "user_credentials/omniauth_callbacks",
                     passwords: 'user_credentials/passwords',
                     sessions: 'user_credentials/sessions',
                     registrations: 'user_credentials/registrations',
                     unlocks: 'user_credentials/unlocks',
                   }
      end

    if Rails.env.development?
      mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
      mount LetterOpenerWeb::Engine, at: '/letter_opener'
    end
    post '/graphql', to: 'graphql#execute'
    get 'home/index'
    root to: 'home#index'
    get 'not_authorized', to: 'home#not_authorized'

    # React routes - So router routes will go to the right React page component
    get '/test', to: 'home#index'
    get '/auth/sign_in', to: 'home#index'
    get '/admin', to: 'home#index'
  end
