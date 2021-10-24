class Review < ApplicationRecord

    validates :rev_name, presence: true
    validates :comment, presence: true
    validates :rating, presence: true
end
