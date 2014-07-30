Rails.application.routes.draw do
  root to: 'main#index'
  get '/contact', to: 'main#contact'
  get '/resume', to: 'main#resume', as: 'resume'
  post '/resume', to: 'main#resume_email'
end
