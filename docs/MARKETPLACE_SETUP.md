# VS Code Marketplace Setup Guide

Step-by-step guide to create a publisher and generate a Personal Access Token (PAT) for automated publishing to the VS Code Marketplace.

## Prerequisites

- A Microsoft account (or GitHub account linked to Azure DevOps)
- Access to your GitHub repository settings

## Step 1: Create a Publisher

1. Go to the [VS Code Marketplace Publisher Management](https://marketplace.visualstudio.com/manage)
2. Sign in with your Microsoft or GitHub account
3. Click **Create Publisher**
4. Fill in:
   - **Name**: Your publisher display name (e.g., `My Name`)
   - **ID**: Your publisher ID (e.g., `my-publisher`) — this goes in `package.json` `publisher` field
5. Click **Create**

> **Important:** The publisher ID in your `package.json` must match the publisher you create here.

## Step 2: Create a Personal Access Token (PAT)

1. Go to [Azure DevOps](https://dev.azure.com/)
2. Sign in with the same account you used for the publisher
3. Click your profile picture (top right) → **Personal access tokens**
4. Click **New Token**
5. Fill in:
   - **Name**: `vsce-publish` (or any name you prefer)
   - **Organization**: Select **All accessible organizations**
   - **Expiration**: Choose a duration (max 1 year)
   - **Scopes**: Click **Custom defined** → check **Marketplace** → **Manage**
6. Click **Create**
7. **Copy the token immediately** — you won't be able to see it again

> **Note:** You must select "All accessible organizations". If you select a specific organization, publishing will fail with a 401 error.

## Step 3: Add GitHub Secret

Go to your repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

| Secret Name | Value |
|-------------|-------|
| `VSCE_PAT` | The Personal Access Token from Step 2 |

## Step 4: Update package.json

Make sure your `package.json` has the correct publisher:

```json
{
  "publisher": "your-publisher-id"
}
```

## Done

Once the secret is configured, go to **Actions** tab → **Publish Extension** → **Run workflow** to:

1. Run CI checks
2. Build the `.vsix` package
3. Publish to VS Code Marketplace
4. Publish to Open VSX Registry
5. Create a GitHub Release

## Troubleshooting

### "Access Denied (401)"
- Make sure you selected **All accessible organizations** when creating the PAT.
- Make sure the PAT has **Marketplace > Manage** scope.
- Check that the PAT hasn't expired.

### "Publisher 'xxx' not found"
- The `publisher` field in `package.json` must exactly match the publisher ID you created in Step 1.

### "Extension 'xxx' already exists"
- Another publisher already owns that extension name. Change the `name` field in `package.json`.

### PAT expired
- Tokens expire based on the duration you set (max 1 year). Create a new token and update the `VSCE_PAT` secret.
