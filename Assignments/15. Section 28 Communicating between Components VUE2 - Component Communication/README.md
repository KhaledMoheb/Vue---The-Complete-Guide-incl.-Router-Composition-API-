# 15. Section 28 Communicating between Components VUE2 - Component Communication

## Overview

This assignment is part of the Udemy course "Vue - The Complete Guide (incl. Router & Composition API)." It focuses on practicing communication between Vue.js components. The goal is to enhance the previous assignment by allowing components to share information and interact with each other.

## Objectives

- Implement component communication using props and custom events.
- Refactor the existing code to include components that communicate with each other.

## Instructions

1. **Clone the Repository**
   - Clone this repository to your local machine using the following command:
     ```bash
     git clone [repository-url]
     ```

2. **Navigate to the Project Directory**
   - Change into the project directory:
     ```bash
     cd [project-directory]
     ```

3. **Install Dependencies**
   - Install the project dependencies using Yarn:
     ```bash
     yarn install
     ```

4. **Start the Development Server**
   - Serve the application using Yarn:
     ```bash
     yarn serve
     ```

5. **File Structure**
   - `src/components/Shared/`: Contains shared components like `Header.vue` and `Footer.vue`.
   - `src/components/Server/`: Contains server-related components like `Servers.vue` and `ServerDetails.vue`.
   - `src/App.vue`: The main Vue component where the child components are used.
   - `src/main.js`: The entry point for the Vue application.

6. **Features to Implement**
   - **Header Component (`Header.vue`)**: Displays the title "Server Status."
   - **Footer Component (`Footer.vue`)**: Displays a footer message about server management.
   - **Servers Component (`Servers.vue`)**: Displays a list of server items.
   - **ServerDetails Component (`ServerDetails.vue`)**: Displays server details.
   - **App Component (`App.vue`)**: Integrates the header, server list, server details, and footer components. Ensure proper communication between components.

## Usage

1. **Internet Connection**
   - Ensure you have an internet connection for Yarn to install packages and Vue.js to run.

2. **Viewing the Assignment**
   - After installing dependencies and starting the server, open your web browser and navigate to the provided local server address (usually `http://localhost:8080`) to view the Vue.js application with component communication.

## Notes

- Use props to pass data from parent to child components.
- Use custom events to communicate from child to parent components.
- Review the course materials for detailed instructions on setting up component communication.

## Resources

- [Vue.js Documentation](https://vuejs.org/guide/introduction.html)
- [Udemy Course: Vue - The Complete Guide](https://www.udemy.com/course/vuejs-2-the-complete-guide/)
