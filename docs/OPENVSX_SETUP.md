# Open VSX Registry Setup Guide

Step-by-step guide to get an access token for publishing to the [Open VSX Registry](https://open-vsx.org/), the open alternative to the VS Code Marketplace used by VS Codium, Gitpod, and other open-source editors.

## Prerequisites

- A GitHub account
- Access to your GitHub repository settings

## Step 1: Sign In to Open VSX

1. Go to [open-vsx.org](https://open-vsx.org/)
2. Click **Log In** (top right)
3. Sign in with your **GitHub account**

## Step 2: Create a Namespace

1. After signing in, go to your [user settings](https://open-vsx.org/user-settings/namespaces)
2. Under **Namespaces**, type your publisher ID (same as `publisher` in `package.json`)
3. Click **Create**

> **Note:** The namespace must match the `publisher` field in your `package.json` exactly.

## Step 3: Generate an Access Token

1. Go to your [user settings → Tokens](https://open-vsx.org/user-settings/tokens)
2. Enter a description (e.g., `GitHub Actions publish`)
3. Click **Create Token**
4. **Copy the token immediately** — you won't be able to see it again

## Step 4: Add GitHub Secret

Go to your repository → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

| Secret Name | Value |
|-------------|-------|
| `OVSX_PAT` | The access token from Step 3 |

## Done

The CD workflow will automatically publish to Open VSX after publishing to the VS Code Marketplace.

## Troubleshooting

### "Namespace 'xxx' not found"
- Create the namespace first in your Open VSX user settings (Step 2).

### "Insufficient access rights"
- Make sure you are a member/owner of the namespace that matches your `publisher` in `package.json`.

### Token expired or revoked
- Generate a new token in your Open VSX user settings and update the `OVSX_PAT` secret.

## Why Open VSX?

The VS Code Marketplace is proprietary and only accessible from Microsoft's VS Code. Open VSX provides the same extension registry for:

- **VS Codium** — FOSS build of VS Code
- **Gitpod** — cloud development environments
- **Eclipse Theia** — extensible IDE platform
- **Other editors** using the Open VSX protocol

Publishing to both registries ensures your extension reaches the widest audience.
