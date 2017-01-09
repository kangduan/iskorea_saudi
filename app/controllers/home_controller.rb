require 'mailgun'
class HomeController < ApplicationController
  def index_saudi
  end
  #email
  def write
    @name = params[:name]
    @email = params[:email]
    @content = params[:content]
    @phone = params[:phone]
    mg_client = Mailgun::Client.new("key-ac89645311d8534bb27750e824ad715a")

    message_params =  {
                   from: @email,
                   to:   'gyyi@korearental.co.kr',
                   subject: @name,
                   text:    @content
                  }

                  result = mg_client.send_message('sandbox165c26fd72294c21b95418c845d11557.mailgun.org', message_params).to_h!

                  message_id = result['id']
                  message = result['message']

            redirect_to "/"
  end
  def about_saudi
  end
  def product_saudi
  end



end
