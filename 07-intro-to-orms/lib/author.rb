class Author

    attr_accessor :name
    attr_reader :id

    def initialize(name, id=nil)
        @name = name
        @id = id
    end

    def save
        if self.id.nil?
            sql = <<-SQL
                INSERT INTO authors (name) VALUES (?)
            SQL
            DB.execute(sql, self.name)
            sql = "SELECT last_insert_rowid()"
            @id = DB.execute(sql)[0][0]
        else
            sql = <<-SQL
                UPDATE authors SET (name) = ? WHERE id = ?
            SQL
            DB.execute(sql, self.name, self.id)
        end
        return self
    end

    def self.make_object_from_row(row)
        # takes row of data [1, "Beverly Cleary"] and makes Author object
        id = row[0]
        name = row[1]
        Author.new(name, id)
    end

    def self.find(id)
        # return the Ruby object with given ID
        sql = <<-SQL
            SELECT * from authors where id = ?
        SQL
        data = DB.execute(sql, id)
        self.make_object_from_row(data[0])
    end

    def self.create(name)
        author = Author.new(name)
        author.save
        author
    end

    def self.all 
        sql = "SELECT * from authors"
        results = DB.execute(sql)
        results.map do |row|
            self.make_object_from_row(row)
        end
    end

    def delete 
        sql = <<-SQL
            DELETE FROM authors WHERE id = ?
        SQL
        DB.execute(sql, self.id)
    end
end