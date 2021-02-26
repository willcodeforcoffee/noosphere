# Preview all emails at http://localhost:3000/rails/mailers/system
class SystemPreview < ActionMailer::Preview
  # Preview this email at http://localhost:3000/rails/mailers/system/welcome_email
  def welcome_email
    SystemMailer.welcome_email
  end
end
