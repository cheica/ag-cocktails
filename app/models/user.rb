class User < ApplicationRecord

    has_many :cocktails
    
    has_secure_password
end
