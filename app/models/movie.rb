class Movie < ApplicationRecord
  belongs_to :director

  validates :title, uniqueness: true
  validates :title, length: { minimum: 4 }

  include PgSearch::Model
  multisearchable against: [:title, :synopsis]

  pg_search_scope :search_by_title_and_synopsis,
    against: [:title, :synopsis],
    using: {
      tsearch: {prefix: true}
    }
end
