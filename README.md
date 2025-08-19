# MibugCredit - Complete Credit Application Platform

A comprehensive credit application and management system featuring a modern React frontend with multi-step forms and a powerful admin dashboard for lead management.

## Features Overview

### Frontend Application
- **Multi-step Credit Application Form** - Intuitive German-language form with validation
- **Responsive Design** - Mobile-first approach with Material-UI components
- **Real-time Validation** - Client-side form validation with error handling
- **Professional UI/UX** - Modern design with smooth animations and transitions
- **SEO Optimized** - Meta tags, structured data, and performance optimization

### Admin Dashboard
- **Lead Management System** - Complete CRM for managing credit applications
- **Smart Notifications** - Read/unread tracking with persistent storage
- **Advanced Filtering** - Search, sort, and filter leads by multiple criteria
- **Bulk Operations** - Mass actions for lead management efficiency
- **Real-time Updates** - Live data synchronization and status tracking
- **Export Functionality** - Data export capabilities for reporting

## Architecture

### Frontend Stack
- **React 18** with TypeScript
- **Material-UI (MUI)** for component library
- **Vite** for fast development and building
- **React Router** for navigation
- **React Hook Form** for form management
- **Date-fns** for date manipulation

### Backend Stack
- **Node.js** with Express server
- **PostgreSQL** database with JSON fallback
- **RESTful API** architecture
- **Session-based authentication**
- **File upload handling**
- **CORS and security middleware**

### Development Tools
- **TypeScript** for type safety
- **ESLint** for code quality
- **Vite** for fast HMR development
- **npm** for package management

## Frontend Features

### Multi-Step Application Form
1. **Personal Information**
   - Family status selection (ledig, verheiratet, etc.)
   - Personal details with validation

2. **Professional Information**
   - Comprehensive job categories
   - Employment duration tracking
   - Income verification

3. **Living Situation**
   - Housing status (zur Miete, im Wohneigentum, etc.)
   - Residential history
   - Location details

4. **Financial Information**
   - Credit amount selection
   - Duration preferences
   - Down payment options

5. **Final Review**
   - Summary of all information
   - Terms and conditions
   - Submission confirmation

### User Experience Features
- **Progress Indicator** - Visual step progression
- **Form Persistence** - Auto-save functionality
- **Validation Feedback** - Real-time error messages
- **Responsive Design** - Works on all devices
- **Accessibility** - WCAG compliant interface

## Admin Dashboard Features

### Lead Management
- **Lead Overview Table** - Comprehensive lead listing with key information
- **Advanced Search** - Multi-field search capabilities
- **Status Management** - Lead status tracking (New, Qualified, Follow-Up, etc.)
- **Label System** - Categorization and tagging
- **Bulk Operations** - Mass status updates and deletions

### Notification System
- **Smart Notifications** - Only shows unread lead notifications
- **Read Tracking** - Automatic marking as read when leads are viewed
- **Persistent Storage** - Notification state survives page refreshes
- **Clear All Function** - Bulk notification management

### Data Management
- **Lead Details Panel** - Comprehensive lead information display
- **German Translations** - Proper localization of all enum values
- **Export Functionality** - Data export for external processing
- **Real-time Updates** - Live data synchronization

### User Interface
- **Modern Design** - Clean, professional admin interface
- **Responsive Layout** - Works on desktop and mobile
- **Intuitive Navigation** - Easy-to-use sidebar navigation
- **Performance Optimized** - Fast loading and smooth interactions

## Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- PostgreSQL (optional - JSON fallback available)

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd mibug-credit

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration
```

### Development
```bash
# Start development server
npm run start:dev
# Frontend: http://localhost:3000
# Admin: http://localhost:5000/admin
```

### Production
```bash
# Build for production
npm run build

# Start production server
npm start
# Application: http://localhost:5000
```

## Available Scripts

- `start:dev` — Start Vite development server on port 3000
- `build` — Create production build in `build/` directory
- `start` — Start Express production server (default port 5000)
- `preview` — Preview production build locally
- `lint` — Run ESLint code quality checks
- `lint:fix` — Auto-fix ESLint issues

## Configuration

### Environment Variables
```bash
# API Configuration
REACT_APP_BASE_URL=https://api.example.com
REACT_APP_AUTH_TOKEN=your-api-token

# Server Configuration
PORT=5000
NODE_ENV=production

# Database Configuration (optional)
DATABASE_URL=postgresql://user:password@localhost:5432/mibugcredit
```

### Database Setup
The application supports both PostgreSQL and JSON file storage:

**PostgreSQL (Recommended for production):**
- Set `DATABASE_URL` environment variable
- Run database migrations (if applicable)

**JSON Fallback (Development):**
- Automatically used if PostgreSQL is unavailable
- Data stored in `data/leads.json`
- Perfect for development and testing

## Customization

### Styling
- Material-UI theme customization in `src/theme/`
- Component-specific styles using MUI's `sx` prop
- Responsive breakpoints configured for mobile-first design

### Form Configuration
- Form steps defined in `src/pages/multiStepForm/`
- Validation rules in individual step components
- Easy to add new fields or modify existing ones

### Admin Dashboard
- Sidebar navigation in `src/pages/admin/components/Sidebar.tsx`
- Lead table configuration in `src/pages/admin/components/LeadsTable.tsx`
- Customizable filters and search options

## Security Features

- **Input Validation** - Client and server-side validation
- **CORS Protection** - Configured for secure cross-origin requests
- **Session Management** - Secure admin authentication
- **Data Sanitization** - Protection against XSS and injection attacks
- **Environment Variables** - Sensitive data protection

## Browser Support

- **Modern Browsers** - Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers** - iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement** - Graceful degradation for older browsers

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Traditional Hosting
```bash
# Build the application
npm run build

# Upload build/ directory to your hosting provider
# Configure server to serve static files and handle routing
```

## Performance

- **Lighthouse Score** - Optimized for performance, accessibility, and SEO
- **Code Splitting** - Automatic route-based code splitting
- **Asset Optimization** - Compressed images and optimized bundles
- **Caching Strategy** - Efficient browser and CDN caching

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

## Support

For technical support or questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions

---

**MibugCredit** - Streamlining credit applications with modern technology.
