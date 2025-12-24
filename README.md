# React Learning Notes 📝

Personal notes while learning React + Vite. Just documenting stuffs as i go through.

## General React Stuffs

### Key Props
- **Bad Practice Alert**: Don't use index as key prop! If you delete items from array, index changes and can mess up your component rendering. Use unique IDs instead.

### State Management
- When you need same state in different comps, lift it up to parent and pass down as props
- Arrays are special type of object in JavaScript (yeah typeof doesn't help much here)
- typeof has limited return values, can't really distinguish between arrays, dates, objects properly
  - Exception: null returns "object" (it's a bug lol) and function returns "function"

## Routing Stuff (react-router-dom)

### URL Parameters
Getting query params from URL:
```javascript
const getCountryName = new URLSearchParams(location.search)?.get('countryname')
// Example: http://localhost:5173/country?countryname=Barbados
// This gives you "Barbados"
```

### Dynamic Routing
- With dynamic routing you can create page for each comp
- In react-router: `path:"/:about"` makes it dynamic
- It'll catch any URL user visits and redirect to about page
- Won't catch specific routes tho
- Can achieve infinite no. of routes this way

#### Using useParams
- `useParams()` hook from react-router helps get URL info
- Returns object with route info: `{"about": "kadfja"}`

### Link vs Anchor Tag
**Important**: Use `<Link>` from react-router instead of `<a>` tag for hot module replacement to work properly

## Data Fetching

### State Calls
React calls state as much as it wants for optimization:
1. Function call with undefined
2. Country call  
3. Starting borders
4. All borders get values

### Nested Data Fetching
- Use `Link` tag from react-router not anchor tag
- On nested fetching, when border is called, state must update
- For state depending on previous value use callback:
```javascript
setBorderData(prevState => {...prevState, newValue})
```

### Loading States
- Set loading effect based on whether state value is assigned yet
- Can return `Promise.resolve(null)` if fetch isn't working

## Shimmer Effect (Skeleton Loading)

Shimmer effect loads before page content appears (like youtube does)

### Creating Array for Shimmer
```javascript
const arr = new Array(10)
```
But this array can't be looped cuz it's empty!

**Ways to fill array:**
- `arr.fill(undefined)` 
- `Array.from({length: 10})` - fills with undefined

Add shimmer effect on both homepage AND individual country list

## Passing Data Between Pages

### Using Link State
```javascript
<Link state={{name: "value"}}>
```
- Can pass objects or arrays
- Access with `useLocation()` hook: `location.state`
- Runs twice: first render + useEffect render

**Advantage**: Don't need to fetch data again if user came from homepage  
⚠️ **Warning**: Can't get data when user goes directly to URL

### JavaScript History API
Internally uses: `history.pushState({"Pass this value"}, '', './home')`

## Dark Mode / Light Mode

### First Approach (Not Recommended)
```javascript
document.documentElement.setAttribute('theme-toggle', 'light')
```
⚠️ **Problem**: Not recommended to manipulate DOM directly in React

### Better Approach
- Use state management
- If state is true, make className "dark"
- Don't change DOM directly in React!

### Lifting State Issue
- Can't pass same state to multiple comps easily
- Solution: Lift up the state

### Outlet Context
- `<Outlet>` comp has `context` property
- Access with `useOutletContext` from react-router
- Avoids props drilling

## Context API

Use when passing props through multiple levels (props drilling problem)

### How to Create & Use:

1. **Create Context:**
```javascript
const ThemeContext = createContext()
```

2. **Wrap App with Provider:**
```javascript
<ThemeContext.Provider value='Can override this'>
  {/* your app */}
</ThemeContext.Provider>
```

3. **Access in Component:**
```javascript
const contextApi = useContext(ThemeContext)
```

Can change anything in Provider value prop

⚠️ **Important**: Must wrap with `ThemeContext.Provider` to work

### Quick Steps:
1. Create `createContext`
2. Wrap app.jsx with `createContextVariable.Provider` pass `value={[value, setValue]}`
3. Access with: `const [changeToggle, setChangeToggle] = useContext(ThemeContext)`
4. Done!

## Custom Hooks

Just fancy name for reusable code in component functions. Export and use instead of repeating code everywhere.

## Bugs & Issues to Fix

### Empty Card Issue
one functionality that's still not working: if i put emptyCard on the condition where length is 0 with state, but when i go back it's showing list
- when i remove emptyList comp it shows list but doesn't show "list is empty" card

### Ternary Operator
- Only returns ONE statement
- For multiple statements wrap in fragment/div
- Can use `,` operator to separate 2 lines in ternary

## TODO Features
- [ ] Implement filter by continent for countries
- [ ] Fix empty card state issue
- [ ] Add shimmer effect everywhere
- [ ] Setup filter mode with different continents

---

*Last updated: 2025/12/19 - Switched to fetching data from online API instead of manual file*