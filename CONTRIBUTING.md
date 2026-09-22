# Contributing to ArabDev Directory

Thank you for your interest in joining the ArabDev Directory.

This project helps companies, recruiters, and collaborators discover talented Arab developers, designers, and technology professionals.

## Requirements

Before submitting your profile, make sure:

- You are from an Arab country or work within the Arab technology community.
- The portfolio URL belongs to you.
- Your portfolio URL is publicly accessible.
- Your information is accurate.
- You have not already been added.
- You add your profile in strict alphabetical order by name.
- You only modify `data/developers.json`.

## How to add your profile

1. Fork this repository.
2. Clone your fork to your computer.
3. Create a new branch:

```bash
git checkout -b add/your-name
```

4. Open:

```text
data/developers.json
```

5. Add your profile in strict alphabetical order using this format:

```json
{
  "name": "Your Full Name",
  "title": "Your Professional Title",
  "country": "Your Country",
  "skills": ["Skill One", "Skill Two", "Skill Three"],
  "portfolio": "https://your-portfolio.com",
  "initials": "YN"
}
```

6. Make sure the JSON remains valid.
7. Commit your changes:

```bash
git add data/developers.json
git commit -m "Add Your Name"
```

8. Push your branch:

```bash
git push -u origin add/your-name
```

9. Open a Pull Request to the `main` branch.

## Pull Request title

Use this format:

```text
Add Your Full Name
```

## Important rules

- Add only one profile per Pull Request.
- Do not edit another person's profile.
- Do not change the website design or application code.
- Do not add false or misleading information.
- Do not include broken, unsafe, or inappropriate links.
- Keep skills limited to three.
- Pull Requests that do not follow these rules may be closed.

## Example

```json
{
  "name": "Ayman Naeem",
  "title": "Web Developer & Designer",
  "country": "Egypt",
  "skills": ["WordPress", "Frontend", "SEO"],
  "portfolio": "https://ayman.de5.net/index-en.html",
  "initials": "AN"
}
```

Thank you for contributing to the ArabDev community.