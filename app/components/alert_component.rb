class AlertComponent < ViewComponent::Base
  class InvalidLevelError < StandardError
    def initialize(level)
      super(msg: "The level [#{level}] is not valid for AlertComponent")
      @level = level
    end
  end

  LEVEL = %i[error warning info].freeze

  LEVEL_CSS_CLASSES = {
    error: "border-red-300 bg-red-200 text-red-900",
    warning: "border-yellow-300 bg-yellow-200 text-yellow-900",
    info: "border-green-300 bg-green-200 text-green-900",
  }.freeze

  def initialize(level:, message:)
    raise InvalidLevelError, level unless LEVEL.include?(level.to_sym)
    super

    @level = level
    @message = message
    @level_css_class = LEVEL_CSS_CLASSES[level.to_sym]
  end
end
