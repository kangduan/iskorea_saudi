Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root 'home#index'
post 'home/write'

get 'home/index_saudi'
get 'home/about_saudi'
get 'home/product_saudi'

get 'home/index_qatar'
get 'home/about_qatar'
get 'home/product_qatar'

end
