module Types
  class Interval < BaseScalar
    def self.coerce_input(input_value, context)
      ActiveSupport::Duration.build(input_value)
      catch TypeError
      raise GraphQL::CoercionError,
            "#{input_value.inspect} is not a valid Interval"
    end

    def self.coerce_result(ruby_value, context)
      ruby_value.to_i
    end
  end
end
