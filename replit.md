# Lamorinda Fencing Academy - Waitlist Platform

## Overview

This is a full-stack web application for Lamorinda Fencing Academy, designed to collect waitlist registrations for their upcoming youth fencing program. The application serves as a landing page with comprehensive program information and a waitlist form system.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom Olympic-themed color scheme
- **UI Components**: Radix UI primitives via shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL via Neon Database (serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: In-memory storage for development (can be extended to PostgreSQL)

### Build System
- **Bundler**: Vite for frontend development and building
- **Server Build**: ESBuild for production server bundling
- **Development**: Hot module replacement via Vite middleware

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (username, password)
- **Waitlist Entries Table**: Stores waitlist registrations with fields:
  - Parent name and email
  - Child name and age
  - Fencing experience level
  - Timestamp for registration tracking

### API Endpoints
- `POST /api/waitlist` - Create new waitlist entry with duplicate email checking
- `GET /api/waitlist` - Retrieve all waitlist entries (admin functionality)
- `POST /api/create-payment-intent` - Create Stripe payment intent for $25 deposit

### Frontend Pages
- **Home Page**: Single-page application with sections:
  - Hero section with call-to-action
  - Program details and benefits
  - Why Fencing benefits section
  - Elite coaches section featuring Olympic-trained instructors
  - Tournament highlights showcase
  - Equipment showcase
  - Waitlist registration form with priority deposit option
  - Footer with contact information
- **Checkout Page**: Stripe payment integration for $25 refundable deposit
- **Payment Success Page**: Confirmation page after successful payment

### UI Components
- Custom Olympic-themed design system
- Responsive layout optimized for mobile and desktop
- Form validation with real-time feedback
- Toast notifications for user feedback
- Loading states and error handling

## Data Flow

1. **User Registration Flow**:
   - User fills out waitlist form on homepage
   - Form validation occurs client-side using Zod schemas
   - API request sent to backend with form data
   - Backend validates data and checks for duplicate emails
   - Database stores new entry with timestamp
   - Success/error feedback displayed to user

2. **Development Workflow**:
   - Vite dev server serves frontend with HMR
   - Express server handles API requests
   - Shared schema definitions ensure type safety
   - Database operations handled via Drizzle ORM

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (PostgreSQL serverless)
- **UI Library**: Radix UI primitives for accessible components
- **Validation**: Zod for runtime type checking and validation
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESLint/Prettier**: Code formatting and linting
- **Drizzle Kit**: Database migrations and schema management

## Deployment Strategy

### Production Build
- Frontend built as static assets via Vite
- Backend compiled to single JavaScript file via ESBuild
- Shared types compiled for both client and server

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Production/development environment detection
- Session storage configurable for production scaling

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Static asset serving capability
- Environment variable configuration

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 05, 2025. Initial setup
- July 05, 2025. Added coaches section featuring Gabriel Sinkin and Steve Gerberman with Olympic training backgrounds and college fencing records
- July 06, 2025. Updated location to "TBD, but in Orinda, Lafayette, or Moraga, CA" and corrected coach name to Steve Gerberman
- July 06, 2025. Implemented Stripe payment integration for $25 refundable deposits with priority waitlist placement, checkout flow, and payment success page