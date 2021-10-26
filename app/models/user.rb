class User < ApplicationRecord

    has_many :cocktails
    
    has_secure_password


    def welcome
        "Hello, #{self.username}!"
      end
end
