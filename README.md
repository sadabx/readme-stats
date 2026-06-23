# GitHub Readme Stats (Netlify)

This repository contains a self-hosted instance of GitHub Readme Stats designed to be deployed on Netlify. It dynamically generates stats cards, language breakdowns, and repository pins to be displayed in your GitHub Profile README.

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

## Netlify Deployment

### Prerequisite

You need a GitHub Personal Access Token (classic) to authenticate API requests. Generate one in GitHub under **Developer Settings** > **Personal Access Tokens (classic)** with the `repo` scope.

### Setup Instructions

1. Push this repository to your GitHub account.
2. In the Netlify dashboard, click **Add new site** > **Import an existing project**.
3. Select your repository.
4. Go to **Site settings** > **Environment variables** > **Add a variable**.
5. Create a variable named `PAT_1` and set its value to your GitHub Personal Access Token.
6. Trigger a deployment. Netlify will deploy the router endpoint automatically.

## Usage and API Endpoint Configuration

Replace `<your-netlify-domain>` with your actual Netlify site domain (e.g. `your-project.netlify.app`).

### GitHub Stats Card

Generates a card showing your total stars, commits, PRs, issues, and contributions.

```markdown
[![GitHub Stats](https://<your-netlify-domain>/api?username=yourusername)](https://github.com/anuraghazra/github-readme-stats)
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
[![Top Langs](https://<your-netlify-domain>/api/top-langs?username=yourusername)](https://github.com/anuraghazra/github-readme-stats)
```

#### Parameters

- `username`: Your GitHub username (required).
- `layout`: Layout format (`compact` or `normal`).
- `hide`: Exclude specific languages (comma-separated list, e.g. `html,css`).

### Repository Pin Card

Generates a card showcasing a specific GitHub repository.

```markdown
[![Repo Pin](https://<your-netlify-domain>/api/pin?username=yourusername&repo=your-repo-name)](https://github.com/anuraghazra/github-readme-stats)
```

#### Parameters

- `username`: Repository owner's GitHub username (required).
- `repo`: Repository name (required).

### WakaTime Card

Displays your programming time tracking stats using WakaTime.

```markdown
[![WakaTime Stats](https://<your-netlify-domain>/api/wakatime?username=yourusername)](https://github.com/anuraghazra/github-readme-stats)
```

#### Parameters

- `username`: Your WakaTime username (required).

### Gist Card

Displays a card containing stats for a specific GitHub Gist.

```markdown
[![Gist Card](https://<your-netlify-domain>/api/gist?id=gist-id)](https://github.com/anuraghazra/github-readme-stats)
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
