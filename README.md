# Qikserve's Dashboard Menu challenge

  

## Overview

  

This project is a front-end challenge developed using React, TypeScript, and Vite.
  

## Installation

  

To set up this project locally, follow these steps:

  

1.  **Clone the repository:**

```bash

git clone https://github.com/joaodantas91/dashboard-large-menu

```

2.  **Navigate into the project directory:**

```bash

cd yourproject

```

3.  **Install dependencies:**

```bash

npm install

```

4. **Create the .env file:**

In the root of your project, create a .env file to define your environment variables:

```bash

touch .env

```

Then, open the .env file and add the following content:


```bash

VITE_ENV=development

```

This will set up the environment variable needed to determine the environment (development or production).

1.  **Start the development server:**

```bash

npm run dev

```

  

The application will be available at [http://localhost:5173/](http://localhost:5173/) by default.

  

## Usage

  

To start using the application:

  

1.  **Run the Development Server:**

```bash

npm run dev

```

2.  **Build for Production:**

```bash

npm run build

```

This command creates a production-ready build in the `dist` directory.

  

3.  **Preview Production Build:**

```bash

npm run preview

```

This command serves the production build locally for testing.
  

## Process and Choices

At first glance I identified that this would be a problem I could solve with virtual lists due to the large size of the JSON, I created spacers at the bottom and top of the list to simulate the spacing for scrolling, but I was facing a problem where, when scrolling, the new items were taking a long time to render, so I had the idea of already defining the state of the new items within handleScroll, so that it would slice the array before the new rendering started. This solved the problem, but when I scrolled faster, it started to briefly show the spacers, so I had the idea of rendering more items than before, for example, triple (I thought of “triple” because I would have the same amount of items below and above the visible items), and it worked very well and without any problems 