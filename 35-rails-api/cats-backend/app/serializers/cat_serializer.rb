class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :breed, :floof
  has_many :hobbies#, serializer: SingleHobbySerializer
end
