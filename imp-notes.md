# The state can be used only on the functional componenet and only on the hooks.



# React + Vite

- It's the bad practice to pass a index as a key, as sometimes we can change the array deletion, also can impact our index,



# When we've to pass a same state to the differenet comps, we can lift up the state to the parent function and pass it to the both.


# one functionality that's still not workign, is if i put the emptyCard on teh condition wher length is 0 with teh state but when i do back it's showing a list.
  - but when i remove a emptyList comps it's showing a list but done's show a list is empty card.



# For Accessing the page url with the ? like on the js:
  `const getCountryName=new URLSearchParams(location.search)?.get('countryname')`: Can achieve the name like: 
   ` http://localhost:5173/country?countryname=Barbados`: it can access the Barbados from here

   



- that loading effect we can set based on the state value is not assigned yet.


# The ternary Operator only must return only one statement, if multiple just wrap them on fragment/div.






# Dynamic Routing:
  - With the help of teh dynamic routing we can achieve a each page for each comps
  - on the react-router: `  path:"/:about",` if we make then it becomes the dynamic routing
  - if user visit on the any page that'll redirect to the about page, now it can catch any url
  - But for specific route, it won't catch that route
  - We've achieve the infinite no. of route with dynamic routing

  
  ## Dynamic Routing Use params:
  - useParams, is the hook that provie by react router.
  -use Params is useful to get the url of teh page.
  -`  const getUrl=useParams();`: getUrl have the object where it've the information of the user want to go:
  - `{"about": "kadfja"}`: AS we trying to get a bout from the about page, we get a object with the route name.



# Instead of teh `<a>` tag, rather we use the Link tag from the react-router on the react for achieving a hot module replacement



# FEature implemenet the filters by the each continent country.



- Arrays are a special type of object in JavaScript

typeof has limited return values and can't distinguish between different object types (arrays, dates, regular objects, etc.)

The only exceptions are null (which returns "object" as a historical bug) and function (which returns "function")

- 

# How many times that our state calls:
- the react try to call as much as it want, so it make the optimized version
1. for function call with undefined, 
2. on that country call
3. Starting borders
4. All border get the values



- For nested data fetching, we can return 





# Nested Data Fetching:
  - the `Link` provide by the react instead of `anchor` tag for linking on react, it's by react-router


  - on the nested data fetching, like on the border once we call that border, it's state must be the updating.



  - on teh useState, where our data is depend on the previous setState we can call the call Back function like this:
      setBorderData(prevState=> {...prevState: newValue}), now it's updaindg that values






# Shimmer Effect (Skelation Loading):
  - Shimmer effect is also called the skelation loading, it load before the page content appear, like data fetching,
  - shimmer effect best example is the: youtube also have the shimmer effect.
  
  #### Create the array of size 10: `const arr=new Array(10)`
  - But this array can't be loop as it's a empty array.
  ##### Ways to fill values on the array:
      - `arr.fill(undefined)` it also fil or `arr.from({length: 10})` fill the value undefined


# 2025/12/19: Fetch Data from online not from manual File. 





# The Shimmer Effect.
  - Add teh shimmer effect on both, homepage and also on the individual Country list.



# Pass Data from one page to another page:
  - We can use the Link tag that provide by, react-router-dom, also we can use a: `useLocation()` tag which provide us the object
  - `location.state`: to get that value.

  
  - with like: `<Link state={{name: "value"}}>` We can even pass the object or even the array,
  - It's running twice, due to first time rendering and teh useEffect rendering.


  - Rather fetching the data on the each comps, rather we can link them and fetch only once if the user gone from the homepage 
  >:warning: But We can't get the data when user go to the url.

  # The data passing is also from the javascript approach: `history.pushState({"Pass this value"}, '' './home')`: Pass this value
    - Also the state pass: `history.state()`: Which internally use the js part.


- Where we're using the some promise: `   return Promise.resolve(null);` We can return some promise if the fetch is not working.




# Dark Mode/Light Mode:
- For the dark mode light mode we've use a first approach where with the help of the state that we can change the: ` document.documentElement.setAttribute('theme-toggle', 'light')`



### For using the ternary operator on the multiple of lines, we cna use the `,` operator to separate a 2 line.



# For the problem of the, dark light mode, that it's not reflectin on teh page instantly once it loads for that solution we can use the dom,
  >:warning: But it's not recommend way to manipulate the dom on the react.

  




# Context api is used when we've to pass the props to the multiple level of componeent, we also called teh props drilling.




# We shouldn't chagne the dom on the react.js
  - Rather with the state managment if the state is true we can simply make the class as "dark"



  - AS we can't pass the same state on the multiple comps, so we would be using the lifting up the state logic.



- But for the <Outlet> therer's nothing we can pass.  
# We can use the <Outlet > comps where we can get the `context` property.
- Now on the All outlet comps, we can acccess all the context that we pass on the Outlet.

    - Now we can access the: `useOutletContext`.

  - useOutletContext is provide by react-router of the context api, we also can create our manual way of teh context api.
  - with the context api, we can avoid teh props drilling


  




# Context Api:
  - It's not recommend way pass the props on the multiple of comps, so we use the context api to solve it.
  - 

1. Create our own context api:
  - for creating our own context, react provide us the `createConetxt()` hook that we can use.
  - We've to pass some value that we want to make teh contextApi on `createContext`:
  - Once we return a createContext from the separate page we can import which we use as a param and the function is: `useContext`   
  - For using: `const contextApi=useContext(contextCreated);`
  - our `contextCreated` provide us a one: `Provider` which can be really useful.


  - For using the Contextapi, which we've exported a theme, now we can wrap everything with the Provider like: contextCreated.Provdider
  -   `    <contextTheme.Provider value='WE can override this.'>` With this way we can override the original value.

  ## Accesing on the other page:
  - `console.log(useContext(themeContext))` : WE can access the modifed or the original valu.

    - WE can change anything on the value of the context api Provider value.
  - now we don't need to use the: useOutletContext only with the useContext and that function we've achieved the context api.
  >:warning> It's most important to wrap them with the themeContext file with: `themeContext.Provider`




# How to Use it:
  - First cratee the `createContext`,
  - Now wrap everything of the app.jsx elemenet to this `createContextVariable` and pass it to the value={[value, setValue]}
  - NOw for the accessing: `  const [changeToggle, setChangeToggle]=useContext(ThemeContext)`
  - Done



# Custom Hooks:
  - Custom hooks is nothing just the fancy name, where we write the reusable code into the comps function and export that and instead of writing repeated code we can simply use the hooks to do it.
  

    

# Also setup the IMplmeent the filder mode on the webpage with different continents.

