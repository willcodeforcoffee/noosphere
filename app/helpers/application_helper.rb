module ApplicationHelper
  def flash_type_to_alert_level(type)
    return :error if type == 'alert'
    return :info if type == 'notice'
    return :warning if type == 'timedout'

    type.to_s
  end
end
