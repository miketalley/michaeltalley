class MainController < ApplicationController
  def index
  end

  def contact
  end

  def resume
  end

  def resume_email
    ResumeMailer.email_resume(params['email']).deliver
    redirect_to root_path
  end
end
