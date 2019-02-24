# Single Page Applications

### Mocking your own backend
```
json-server --watch db.json
```

### JSON Server Routes - AKA READ THE DOCUMENTATION
```
GET    /pokemon
GET    /pokemon/1
POST   /pokemon
PUT    /pokemon/1
PATCH  /pokemon/1
DELETE /pokemon/1
```
To POST a new Pokemon:
```
body:
{
  "name": "charmeleon",
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
}
```

### Building out the frontend (Deliverables)
- See all Pokemon sprites
- Create your own Pokemon
- Delete a pokemon on click

### Notes:
- [Documentation of using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- `body` of a fetch HAS to be a string!!
- Optimistic Rendering vs Pessimistic
- Creating a multi-page feels

#### Announcements:
- Shifting gears! Back to fundamentals! OOJS labs this weekend (weird location)
- Toy Tale is a Code Challenge Practice Lab (review this Tuesday afternoon)

#### Next Week and Beyond
- SPA is the focus from now on
 - instead of reloading the page or getting a new page, we fetch data
 - then manipulate the DOM accordingly (like desktop applications)
 - Code Challenge is SPA
- Practice building SPA procedurally, then try with OOJS
- Mock Code Challenge on Wed, Real thin on Friday
