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
    mg_client = Mailgun::Client.new("key-dc69708e8b3f2ac481465f5d27af1693")

    message_params =  {
                   from: @email,
                   to:   'gyyi@korearental.co.kr',
                   subject: @name,
                   text:    @content
                  }

                  result = mg_client.send_message('sandbox33d60e8bc5b349c78fe359178f31bfed.mailgun.org', message_params).to_h!

                  message_id = result['id']
                  message = result['message']

  end
  def about_saudi
  end
  def product_saudi
  end



end
