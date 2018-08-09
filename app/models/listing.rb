# == Schema Information
#
# Table name: listings
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  price       :integer          not null
#  size        :string           not null
#  category    :string           not null
#  brand       :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Listing < ApplicationRecord
  validates :user_id, :title, :price, :size, :category, :brand, :description, presence: true

  belongs_to :user


end
