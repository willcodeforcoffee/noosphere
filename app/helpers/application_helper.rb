module ApplicationHelper
  def flash_type_to_alert_level(type)
    return :error if type == "alert"
    return :info if type == "notice"
    return :warning if type == "timedout"

    type.to_s
  end

  def feature_enabled?(feature_name)
    feature = Feature.find_by(name: feature_name)
    raise Feature::FeatureNotFoundError, feature_name if feature.blank?

    feature.enabled?
  end
end
