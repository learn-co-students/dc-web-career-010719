require 'pry'
require 'rest-client'
require 'json'

url = "https://www.reddit.com/.json"

response = RestClient.get(url)

json = JSON.parse(response)

binding.pry
"hi"