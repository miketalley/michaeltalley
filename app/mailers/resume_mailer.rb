class ResumeMailer < ActionMailer::Base
  default from: "michael.d.talley@gmail.com"

  def email_resume(email)
    # attachments['MikeTalleyResume.pdf'] = File.read('../assets/MikeTalleyResume.pdf')
    mail(to: email, subject: "Mike Talley's Resume")
  end
end
