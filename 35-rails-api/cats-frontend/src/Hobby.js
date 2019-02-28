class Hobby {
  constructor(id, description){
    this.id = id
    this.description = description
    Hobby.all.push(this)
  }

  render(){
    let li = document.createElement("li")
    li.innerText = `${this.id} - ${this.description}`
    return li
  }
}

Hobby.all = []
