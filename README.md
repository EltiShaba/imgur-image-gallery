*Imgur Gallery Browser App*

The Imgur Gallery Browser App is a simple web application built using React and TypeScript that allows users to browse images from the Imgur gallery. The app uses the Imgur API to fetch and display images on the user's screen.

*Architecture

The app architecture follows a Redux pattern, with Redux being used for state management. The app has three main components:

*Store: The store holds the global state of the application. In this app, there is only one slice of state, which is the Imgur state.

*Actions: Actions are used to update the state of the app. In this app, there is only one action, which is to fetch the Imgur gallery.

*Reducers: Reducers are used to specify how the state should be updated based on the actions. In this app, there is only one reducer, which updates the Imgur state based on the action.

Dependencies
React
Redux
Redux Thunk
Axios

*Conclusion
The Imgur Gallery Browser App is a simple, yet functional web app built using React and TypeScript. It's my first app using ReactJS, TypeScript and Redux, specially writting it using TypeScript, which I learned the basics while working in this code challenge. Needs a lot of improvements and fixes obviously, but it helped to grasp the logic and the workflow.