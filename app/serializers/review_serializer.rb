class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rev_name, :comment, :rating
end
