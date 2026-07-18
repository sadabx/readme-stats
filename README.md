# GitHub Readme Stats (Vercel)

This repository contains a self-hosted instance of GitHub Readme Stats designed to be deployed on Vercel. It dynamically generates stats cards, language breakdowns, and repository pins to be displayed in your GitHub Profile README.

## Features

- Dynamic SVG generation for GitHub profile stats.
- Supported card types:
  - Stats Card (`/api`)
  - Top Languages Card (`/api/top-langs`)
  - Repository Pin Card (`/api/pin`)
  - WakaTime Stats Card (`/api/wakatime`)
  - Gist Stats Card (`/api/gist`)
- High performance caching enabled by default.
- Custom styling options (themes, colors, fonts, icons).

## Vercel Deployment

### Prerequisite

You need a GitHub Personal Access Token (classic) to authenticate API requests. Generate one in GitHub under **Developer Settings** > **Personal Access Tokens (classic)** with the `repo` scope.

### Setup Instructions

1. Push this repository to your GitHub account.
2. In the Vercel dashboard, click **Add New** > **Project**.
3. Select your repository.
4. Go to **Settings** > **Environment Variables**.
5. Create a variable named `PAT_1` and set its value to your GitHub Personal Access Token.
6. Deploy the project. Vercel will expose each file in `api/` as a serverless function.

## Usage and API Endpoint Configuration

```markdown
https://your-project.vercel.app/api
```

### GitHub Stats Card

Generates a card showing your total stars, commits, PRs, issues, and contributions.

```markdown
[![GitHub Stats](https://your-project.vercel.app/api?username=sadabx)](https://github.com/sadabx/f1)
```

#### Parameters

- `username`: Your GitHub username (required).
- `theme`: Theme name (e.g., `dark`, `radical`, `dracula`).
- `show_icons`: Show icons next to stats (`true` or `false`).
- `hide_border`: Hide the card border (`true` or `false`).
- `include_all_commits`: Include contributions to private repositories (`true` or `false`).
- `hide_rank`: Hide the rank circle (`true` or `false`).

### Top Languages Card

Generates a card displaying your most used programming languages on GitHub.

```markdown
[![Top Langs](https://your-project.vercel.app/api/top-langs?username=sadabx)](https://github.com/sadabx/iptv)
```

#### Parameters

- `username`: Your GitHub username (required).
- `layout`: Layout format (`compact` or `normal`).
- `hide`: Exclude specific languages (comma-separated list, e.g. `html,css`).

### Repository Pin Card

Generates a card showcasing a specific GitHub repository.

```markdown
[![Repo Pin](https://your-project.vercel.app/api/pin?username=sadabx&repo=ManifestHub)](https://github.com/sadabx/ManifestHub)
```

#### Parameters

- `username`: Repository owner's GitHub username (required).
- `repo`: Repository name (required).

### WakaTime Card

Displays your programming time tracking stats using WakaTime.

```markdown
[![WakaTime Stats](https://your-project.vercel.app/api/wakatime?username=sadabx)](https://github.com/sadabx/fifa)
```

#### Parameters

- `username`: Your WakaTime username (required).

### Gist Card

Displays a card containing stats for a specific GitHub Gist.

```markdown
[![Gist Card](https://your-project.vercel.app/api/gist?id=your-gist-id)](https://github.com/sadabx/readme-stats)
```

#### Parameters

- `id`: The GitHub Gist ID (required).

## Customizing Themes

You can check out [themes/index.js](themes/index.js) to see all built-in themes or define custom overrides:
- `title_color`: Hex color without hash (e.g., `ff0000`).
- `text_color`: Hex color without hash.
- `icon_color`: Hex color without hash.
- `bg_color`: Hex color or gradient (comma-separated list of hex colors).
- `border_color`: Hex color without hash.

## License

This project is licensed under the MIT License.
