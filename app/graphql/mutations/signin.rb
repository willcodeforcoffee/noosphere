module Mutations
  class Signin < BaseMutation
    field :auth_token, String, null: false
    field :username, String, null: false

    argument :email_address, String, required: true
    argument :password, String, required: true

    def resolve(email_address:, password:)
      user_credential = UserCredential.find_by(email: email_address)
      user = user_credential.user

      unless user_credential.present? && user.present? &&
               user_credential.valid_password?(password)
        raise GraphQL::ExecutionError,
              'Email address or password were not valid'
      end

      # TODO: AuthToken should be a JWT
      { auth_token: 'random', username: user.username }
    end
  end
end
