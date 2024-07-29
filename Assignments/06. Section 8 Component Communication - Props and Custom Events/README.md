# 06. Section 8 Component Communication - Props and Custom Events

## Overview

This assignment is part of the Udemy course "Vue - The Complete Guide (incl. Router & Composition API)." It focuses on component communication in Vue.js, specifically using props and custom events.

## Objectives

- Create two components: `ActiveUser` and `UserData`.
- Use `ActiveUser` to display a username and age.
- Use `UserData` to provide input fields for name and age.
- Output both components side-by-side in the main application template.
- Enable `ActiveUser` to update its data based on user input from `UserData`.

## Instructions

1. **Clone the Repository**
   - Clone this repository to your local machine using the following command:
     ```bash
     git clone [repository-url]
     ```

2. **Open the Project**
   - Navigate to the project directory and open `index.html` in your web browser to see the Vue.js application in action.

3. **File Structure**
   - `index.html`: Contains the HTML structure and Vue.js directives.
   - `app.js`: Contains the Vue.js application code.
   - `components/ActiveUser.js`: Defines the `ActiveUser` component.
   - `components/UserData.js`: Defines the `UserData` component.
   - `styles.css`: Styles for the project (if applicable).

4. **Features Implemented**
   - **`ActiveUser` Component**: Outputs a username and age.
   - **`UserData` Component**: Provides input fields for name and age.
   - **Component Placement**: Displays `ActiveUser` and `UserData` side-by-side in the main application template.
   - **Data Sharing**: Updates `ActiveUser` with data entered in `UserData` through props and custom events.

## Usage

1. **Internet Connection**
   - Ensure you have an internet connection as Vue.js is loaded via a CDN.

2. **Viewing the Assignment**
   - Open the `index.html` file in your web browser to view and interact with the Vue.js application.

## Notes

- Implement component communication using props to pass data and custom events to handle updates.
- Add any styling as needed to enhance the appearance of the components.

## Resources

- [Vue.js Documentation](https://vuejs.org/guide/introduction.html)
- [Udemy Course: Vue - The Complete Guide](https://www.udemy.com/course/vuejs-2-the-complete-guide/)