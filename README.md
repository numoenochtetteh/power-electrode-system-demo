# Power Electrode Ltd — Interactive Operations Demo

This is a **front-end prototype with dummy data** created to help the client review the proposed Power Electrode business management system before the real system is built.

## What the sample demonstrates
- Owner dashboard with business overview
- Inventory: raw materials + finished products
- Low-stock and high-stock alerts
- Production targets, actual output, waste and damaged products
- Sales, money received, outstanding payments and customers
- Purchasing and suppliers
- Expenses, revenue and estimated profit
- Daily/weekly/monthly-style analytics
- Notifications
- Audit/activity log
- Staff accounts and role-based access
- Responsive layout for phone, tablet and laptop

## Demo logins
Password for all accounts: `demo123`

- Owner: `owner@powerelectrode.com`
- General Manager: `manager@powerelectrode.com`
- Production: `production@powerelectrode.com`
- Sales: `sales@powerelectrode.com`
- Storekeeper: `store@powerelectrode.com`
- Finance: `finance@powerelectrode.com`

## Important
This prototype does **not** use a real database. All information shown is dummy/sample information for requirements review only. The production version would use secure authentication, a real database, role permissions, backups, audit logging and validated business rules.

## Preview locally
Open `index.html` in a browser.

## Deploy to Vercel
This is a static site. From this folder, run:

```bash
npx vercel
```

Then deploy production with:

```bash
npx vercel --prod
```

You can then send the Vercel URL to the client.
