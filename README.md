# Unheard Website
A website project built with Strapi, a headless CMS framework.
Project Overview
This project uses Strapi as its backend framework, providing a flexible and customizable content management system. The project includes basic configuration files and can be extended based on specific requirements.
Project Structure
Copy.
├── config/
│   ├── api/
│   └── admin/
├── src/
│   └── admin/
└── webpack.config.example.js
Features

Customizable Strapi configuration
Extensible admin interface
Support for multiple locales (configurable)
Webpack configuration for custom builds

Getting Started
Prerequisites

Node.js (LTS version recommended)
npm or yarn package manager

Installation

Clone the repository:

bashCopygit clone https://github.com/tzand1234/unheard-website-idea.git
cd unheard-website-idea

Install dependencies:

bashCopynpm install
# or
yarn install

Copy the example configuration files:

bashCopycp app.example.js app.js
cp webpack.config.example.js webpack.config.js

Start the development server:

bashCopynpm run develop
# or
yarn develop
Configuration
Locales
The project supports multiple locales. To enable additional languages, uncomment the desired locales in app.js:
javascriptCopyconst config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'en',
    // etc...
  ],
};
Webpack
Custom webpack configurations can be added in webpack.config.js. The config file exports a function that receives the default configuration and webpack instance:
javascriptCopymodule.exports = (config, webpack) => {
  // Add custom webpack configurations here
  return config;
};
Development
The project includes two main hooks in index.js:

register: Runs before application initialization
bootstrap: Runs before application startup

Use these hooks to set up your data model, run jobs, or perform special logic.
