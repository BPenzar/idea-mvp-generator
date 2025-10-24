# TECH PRD - Idea & MVP Generator

## 1. Executive Summary

Idea & MVP Generator je dual-phase web aplikacija izgrađena na Next.js 14 platformi. Faza 1 je statična showcase stranica s open-source generatorima, a Faza 2 je full-stack aplikacija s LLM integracijom. Projekt koristi modern tech stack optimiziran za brže development, jednostavno održavanje i skalabilnost.

## 2. Tech Stack Decision

### Frontend
**Framework**: Next.js 14 (App Router)
**Reasoning**: Server-side rendering za SEO, API routes za backend, excellent Vercel integration, TypeScript support out-of-the-box
**UI Library**: shadcn/ui
**Styling**: Tailwind CSS

### Backend
**Framework**: Next.js API Routes
**Reasoning**: Unified codebase, optimized za Vercel deployment, TypeScript integration
**API Style**: REST

### Database
**Primary DB**: Supabase (PostgreSQL)
**Reasoning**: Managed service, built-in auth, Row Level Security, generous free tier
**ORM/Query Builder**: Supabase client SDK

### Authentication
**Provider**: Supabase Auth
**Methods**: Email/password + Google OAuth
**Session Management**: JWT tokens (managed by Supabase)

### Hosting & Deployment
**Platform**: Vercel
**Reasoning**: Native Next.js support, automatic deployments, excellent DX
**Domain**: Custom domain (idea-mvp-generator.com)

## 3. System Architecture

### High-Level Architecture
```
Browser <-> Next.js Frontend <-> Next.js API Routes <-> Supabase (Auth + Database)
                              <-> Claude API
                              <-> OpenAI API (fallback)
```

### Data Flow
1. User accesses landing page (SSG)
2. User navigates to /generators page (SSG with static content)
3. User copy-pastes generators to external AI tools (Phase 1)
4. Future: User authenticates and creates projects in dashboard (Phase 2)

### Key Integrations
- Supabase: Database, authentication, real-time subscriptions
- Claude API: Primary LLM for generator automation
- OpenAI API: Fallback LLM provider
- Vercel Analytics: Basic usage tracking

## 4. Database Schema

### ERD Description
- Users table (managed by Supabase Auth)
- Projects table: Main project entities with user foreign key
- Discovery/Business/Tech data tables: Phase-specific data storage
- Exports table: Track file exports and downloads

### SQL Schema
```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'in_progress'
    CHECK (status IN ('in_progress', 'completed')),
  current_phase TEXT NOT NULL DEFAULT 'discovery'
    CHECK (current_phase IN ('discovery', 'business_prd', 'tech')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Discovery Generator Data
CREATE TABLE discovery_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  evaluated_ideas JSONB,
  selected_idea JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(project_id)
);

-- Business PRD Data
CREATE TABLE business_prd_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  prd_output JSONB,
  recommendation TEXT CHECK (recommendation IN ('go', 'refine', 'hold')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(project_id)
);

-- Tech Generator Data
CREATE TABLE tech_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  tech_prd_output JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(project_id)
);

-- Exports tracking
CREATE TABLE exports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  phase TEXT NOT NULL CHECK (phase IN ('discovery', 'business_prd', 'tech')),
  format TEXT NOT NULL CHECK (format IN ('md', 'docx', 'pdf')),
  file_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own projects" ON projects FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own projects" ON projects FOR INSERT WITH CHECK (auth.uid() = user_id);
```

## 5. API Design

### Endpoint Structure
```
/api/
├── auth/*                  # Supabase Auth (handled automatically)
├── projects/
│   ├── route.ts           # GET (list), POST (create)
│   └── [id]/
│       └── route.ts       # GET, PATCH, DELETE
├── discovery/
│   ├── save-answer/
│   │   └── route.ts       # POST
│   ├── evaluate/
│   │   └── route.ts       # POST (LLM call)
│   └── [projectId]/
│       └── route.ts       # GET
├── business-prd/
│   ├── save-answer/
│   │   └── route.ts       # POST
│   ├── generate/
│   │   └── route.ts       # POST (LLM call)
│   └── [projectId]/
│       └── route.ts       # GET
├── tech/
│   ├── save-answer/
│   │   └── route.ts       # POST
│   ├── generate/
│   │   └── route.ts       # POST (LLM call)
│   └── [projectId]/
│       └── route.ts       # GET
└── export/
    └── md/
        └── route.ts       # POST
```

### Key Endpoints

#### POST /api/projects
**Purpose**: Create new project
**Request**:
```json
{
  "name": "My Awesome Project"
}
```
**Response**:
```json
{
  "id": "uuid",
  "name": "My Awesome Project",
  "status": "in_progress",
  "current_phase": "discovery",
  "created_at": "2025-10-24T12:00:00Z"
}
```

#### POST /api/discovery/evaluate
**Purpose**: LLM evaluation of ideas through RICE+ framework
**Request**:
```json
{
  "project_id": "uuid"
}
```
**Response**:
```json
{
  "evaluated_ideas": [...],
  "top_recommendation": {...}
}
```

## 6. File Structure
```
idea-mvp-generator/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Landing page
│   │   ├── generators/
│   │   │   └── page.tsx          # Generators showcase
│   │   ├── dashboard/            # Phase 2
│   │   │   └── page.tsx
│   │   ├── project/              # Phase 2
│   │   │   └── [id]/
│   │   │       ├── discovery/
│   │   │       ├── business-prd/
│   │   │       └── tech/
│   │   └── api/                  # Phase 2
│   │       ├── projects/
│   │       ├── discovery/
│   │       ├── business-prd/
│   │       ├── tech/
│   │       └── export/
│   ├── components/
│   │   ├── ui/                   # shadcn/ui
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── GeneratorCard.tsx
│   │   └── CopyButton.tsx
│   └── lib/
│       └── utils.ts
├── public/
│   ├── generators/               # Phase 1
│   │   ├── 1_Discovery_Generator.md
│   │   ├── 2_Business_PRD_Generator.md
│   │   ├── 3_Tech_PRD_Generator.md
│   │   └── 4_PRD_Interview.md
│   └── examples/
│       ├── example_discovery_summary.md
│       ├── example_business_prd.md
│       └── example_tech_prd.md
├── README.md
├── package.json
└── tsconfig.json
```

## 7. Implementation Phases

### Phase 1 (Week 1): Open-Source Showcase
- [x] Next.js 14 project setup
- [x] shadcn/ui configuration
- [x] Landing page with Hero and HowItWorks sections
- [x] /generators page with all 4 generators
- [x] Copy-paste functionality
- [x] Responsive design
- [ ] SEO optimization
- [ ] GitHub repo setup
- [ ] Vercel deployment

### Phase 2 (Week 2-3): Automated App
- [ ] Supabase setup and database schema
- [ ] Authentication system (email + Google OAuth)
- [ ] Dashboard and project management
- [ ] Discovery Generator with LLM integration
- [ ] Business PRD Generator automation
- [ ] Tech PRD Generator automation
- [ ] Export functionality (.md files)

### Phase 3 (Week 4): Polish & Launch
- [ ] Performance optimization
- [ ] Comprehensive testing
- [ ] Documentation
- [ ] Marketing content
- [ ] Launch preparation

## 8. Security Implementation

### Authentication Flow
- Supabase Auth handles user registration, login, session management
- Google OAuth integration for social login
- Email verification required for new accounts

### Authorization
- Row Level Security (RLS) policies ensure users only access their own data
- API endpoints validate user permissions using Supabase auth context

### Data Protection
- All API inputs validated using Zod schemas
- SQL injection prevented through Supabase client parameterized queries
- XSS protection through Next.js built-in sanitization

## 9. Testing Strategy

### Unit Tests
- Utility functions validation
- Component props and rendering logic
- LLM prompt generation functions

### Integration Tests
- API endpoints with mock database
- Authentication flow
- File generation and export

### E2E Tests
- Complete user journey from landing to export
- Cross-browser compatibility
- Mobile responsiveness

## 10. Deployment & DevOps

### Environment Setup
```bash
# Local development
npm install
npm run dev

# Environment variables
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
ANTHROPIC_API_KEY=your_claude_key
OPENAI_API_KEY=your_openai_key
```

### CI/CD Pipeline
- Vercel automatic deployments on Git push
- Preview deployments for all branches
- Production deployments on main branch merge

### Monitoring
- Vercel Analytics for usage tracking
- Vercel Logs for error monitoring
- Supabase Dashboard for database metrics

## 11. Performance Considerations

### Optimization Strategies
- Static site generation for Phase 1 pages
- Image optimization through Next.js
- Code splitting for Phase 2 components
- Lazy loading for heavy components

### Scalability Plan
- Supabase handles database scaling automatically
- Vercel edge functions for global performance
- CDN for static assets

## 12. Acceptance Criteria

### Functional Requirements
- [ ] Landing page loads and displays correctly
- [ ] All generator content is copy-pasteable
- [ ] /generators page shows all 4 generators
- [ ] GitHub links work correctly
- [ ] Responsive design works on mobile and desktop

### Non-Functional Requirements
- [ ] Page loads in <2 seconds
- [ ] Lighthouse score >90
- [ ] No console errors
- [ ] SEO meta tags present
- [ ] Accessible navigation

## 13. Launch Checklist

### Pre-Launch
- [ ] All acceptance criteria met
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified
- [ ] SEO optimization implemented
- [ ] GitHub repo with documentation ready
- [ ] Vercel deployment configured

### Launch Day
- [ ] DNS configured for custom domain
- [ ] SSL certificate active
- [ ] Analytics tracking verified
- [ ] LinkedIn launch post prepared
- [ ] GitHub README updated

## 14. Post-Launch Plan

### Week 1: Monitor & Collect Feedback
- Track landing page visits and engagement
- Monitor copy-paste button usage
- Collect user feedback through GitHub issues

### Month 1: Iterate Based on Usage
- Analyze which generators are most used
- Optimize based on user behavior
- Plan Phase 2 features based on demand

---

## CRITICAL SUCCESS CRITERIA FOR CLAUDE CODE

✅ **Complete file structure** - Every component and page file specified
✅ **Detailed implementation steps** - Phase-by-phase development plan
✅ **Technology stack decisions** - Clear rationale for each choice
✅ **Responsive design requirements** - Mobile-first approach specified
✅ **SEO optimization guidelines** - Meta tags, structured data, performance
✅ **Deployment strategy** - Vercel configuration and environment setup

This Tech PRD enables Claude Code to implement the complete Phase 1 MVP without additional clarification.