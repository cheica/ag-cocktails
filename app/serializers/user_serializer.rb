class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password_digest, :role, :admin, :image
end
