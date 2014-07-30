class ResumeMailer < ActionMailer::Base
  default from: "michael.d.talley@gmail.com"

  def email_resume(email)
    mail(to: email, subject: "Mike Talley's Resume")
  end
end
