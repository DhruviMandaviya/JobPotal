# Project Overview:
I built a modern job listings website using Vue.js 3, Tailwind CSS, and a JSON Server as a mock backend. This project helped me refine my frontend development skills, including component-based architecture, state management, API integration, and routing in Vue.js.

# Key Features & Technologies Used:
### 🏗 Frontend Development with Vue.js 3
Vue Components: Designed a modular structure with reusable components such as Navbar, HomeCards, JobListings, JobDetails, and BackButton.</br>
Props & Data Binding: Used v-bind, v-model, and computed() properties to manage dynamic content efficiently.</br>

Directives & Events: Implemented Vue directives like v-if, v-for, v-bind, and event handlers with v-on for interactive UI.</br>

### 🎨 Styling with Tailwind CSS
Integrated Tailwind CSS for a clean, responsive, and mobile-friendly UI.</br>

Customized theme files and used utility-first classes to maintain consistency across components.</br>

### 🔄 Vue Router & Navigation
Configured Vue Router for navigation between Home, Job Listings, Job Details, Add Job, and Edit Job pages.</br>

Implemented active link highlighting for better user experience.</br>

Created a 404 Not Found page to handle invalid routes.</br>

### 📡 Mock Backend with JSON Server
Used a local JSON Server as a REST API to manage job listings dynamically.</br>

### Implemented CRUD operations:

Fetch jobs from API using onMounted() lifecycle method.</br>

Add new jobs using a form and POST request.</br>

Edit jobs with dynamic form handling.</br>

Delete jobs with user confirmation.</br>

### 🔥 State Management with Composition API
Used ref() and reactive() for state management.</br>

Implemented computed properties for dynamic data handling, such as limiting job listings and truncating descriptions.</br>

### 🛠 Additional Enhancements
Added loading spinners for API calls.</br>

Integrated PrimeIcons for better UI visuals.</br>

Displayed toast notifications for user interactions like job creation, updates, and deletions.</br>

### DEMO
https://github.com/user-attachments/assets/f7190b8c-ef78-4098-95b4-50f0c67acd38



## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
