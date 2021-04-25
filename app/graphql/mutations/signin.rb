module Mutations
  class Signin < BaseMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end

    field :auth_token, String, null: false

    argument :email_address, String, required: true
    argument :password, String, required: true

    def resolve(email_address:, password:)
      user_credential = UserCredential.find_by(email: email_address)
    end
  end
end
