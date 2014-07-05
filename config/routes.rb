Rails.application.routes.draw do
  root to: 'main#index'
  get '/contact', to: 'main#contact'
end
