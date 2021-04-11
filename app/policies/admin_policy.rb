class AdminPolicy < ApplicationPolicy
  def index?
    user_in_admin_role?
  end

  def show?
    user_in_admin_role?
  end

  def create?
    user_in_admin_role?
  end

  def new?
    create?
  end

  def update?
    user_in_admin_role?
  end

  def edit?
    update?
  end

  def destroy?
    user_in_admin_role?
  end

  class Scope < Scope
    def resolve
      scope.all
    end
  end

  protected

  def user_in_admin_role?
    @user.in_role?('admin')
  end
end
