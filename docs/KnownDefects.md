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
5. On the service type table we have it working where you can edit the service types and the program type will 
   display the program it is associated with. The bug is that on the back end it goes through an intermediary 
   table and although it shows as a name it is represented by a number 1, 2, or 3. So in order to edit you need 
   to put a 1, 2, or 3 in program type field instead of the actual program name. A way to fix this would be to add 
   a drop down and figure out how to send a number to the backend instead a string.