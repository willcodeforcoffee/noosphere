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
                     confirmations: "user_credentials/confirmations",
                     # omniauth_callbacks: "user_credentials/omniauth_callbacks",
                     passwords: "user_credentials/passwords",
                     sessions: "user_credentials/sessions",
                     registrations: "user_credentials/registrations",
                     unlocks: "user_credentials/unlocks",
                   }
      end

    if Rails.env.development?
      mount LetterOpenerWeb::Engine, at: "/letter_opener"
    end
    get "home/index"
    root to: "home#index"

    unless Rails.env.production?
      get "theme/index"
      post "theme/index"
    end

    # Site Administration Namespace
    namespace :admin do
      get "home/index"
      get "/", to: "home#index"
    end

    # Social Activity Namespace
    namespace :social do
      get "home/index"
      get "/", to: "home#index"
    end

    Page.all.each { |page| get page.url, to: "pages#show" }
  end
