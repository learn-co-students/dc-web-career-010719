class Hobby {
  constructor(id, name){
    this.id = id
    this.name = name
    Hobby.all.push(this)
  }

  render(){
    let li = document.createElement("li")
    li.innerText = `${this.id} - ${this.name}`
    return li
  }
}

Hobby.all = []
