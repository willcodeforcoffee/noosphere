class TestController < ApplicationController
  def index
    @fake = Fake.new
    @fake.valid?

    @fake
  end
end
