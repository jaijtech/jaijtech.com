This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Forms & lead capture

The site has three lead-capture forms, all sharing the same architecture
(`lib/ratelimit.ts` + [Resend](https://resend.com) email, no database required):

| Form | Page | API route |
| --- | --- | --- |
| Contact | `/contacto` | `app/api/contact/route.ts` |
| Developer register | `/register` | `app/api/register/route.ts` |
| **Nexus Pilot** | `/pilot` | `app/api/pilot/route.ts` |

### Pilot form flow

```
Pilot form (app/pilot/pilot-form.tsx)
  → POST /api/pilot
    → rate limiting (lib/ratelimit.ts — 3 requests / 10 min per IP)
    → server-side validation + input sanitization (escapeHtml)
    → Resend: internal notification ("New Nexus Pilot Request") + requester acknowledgement
  → success / error response (no DB persistence; email delivery is the system of record)
```

Captured fields: name, company, role, email, website, product type, current stack,
deployment model, estimated customer count, project description. All required fields
are validated server-side; client validation is convenience only.

### Configuration / environment variables

- `RESEND_API_KEY` — **required**. Without it, all three forms fail to send email.
- Redis (`redis://localhost:6379`) — **optional**. Used by `lib/ratelimit.ts` for
  distributed rate limiting; falls back to an in-memory store when unavailable.

The internal notification recipient is currently hard-coded to `jaijtech@gmail.com`
in the API routes, and the sender is `soporte@jaijtech.com` (must be a verified
Resend domain). No secrets are exposed to the client.
