1. SideNavBar Desktop view displays even when not logged in. On Trello. 
2. Profile ReRender not happening after savings changes. On Trello. 
3. Role doesn't always get switched when logged out and logging in with another user. On Trello. 
4. The NavBar renders conditionally upon the "role" in Local Storage. This is a security issue because the 
   user can of course manipulate the value in Local Storage. The NavBar would be better off rendering
   conditionally based upon the "role" pulled from Redux instead of Local Storage. I did something similar
   within the RoutingPage component where: the getUser() function is called and the userId is stored in state,
   a useEffect then runs the getUserAction() function with the userId passed in as an argument, then I do checks
   to see where the user should be routed to. A similar flow could potentially be used to conditionally render
   the NavBar correctly without having to rely on the Local Storage as the last team had it.