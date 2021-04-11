module FeatureEnableable
  extend ActiveSupport::Concern

  included do
    before_action :feature_not_enabled

    protected

    def feature_name
      raise "You must 'def feature_name' and return a string for FeatureEnableable to work"
    end

    def feature_enabled?
      feature = Feature.find_by(name: feature_name)
      raise Feature::FeatureNotFoundError, feature_name if feature.blank?

      feature.enabled?
    end

    def feature_not_enabled
      return if feature_enabled?

      logger.warn("Action blocked: feature #{feature_name} not enabled")
      render plain: '404: Not Found', status: :not_found
    end
  end
end
