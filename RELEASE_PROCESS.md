# 🚀 Release Process and GitFlow

This document describes the branching workflow (`GitFlow`) adopted in this project, detailing how features, releases, hotfixes, and backports are managed to keep the main branches synchronized.

---

## 🌱 Branch Structure

- `develop`: Active development branch. Contains all changes ready for the next release.
- `feature/*`: Branches for new features or improvements. They originate from `develop`.
- `release/*`: Specific branches for stabilizing and preparing for a new release. They originate from `develop` and are merged into `master` and `develop`.
- `hotfix/*`: Branches for fixing critical bugs in production. They originate from `master` and are merged into both `master` and `develop`.
- `main`: Production branch. Contains the already released stable code.

---

## 🔁 General Workflow

### 1. Feature Development

```bash
git checkout develop
git checkout -b feature/feature-name
```

- Develop and test.

- Merge to develop via Pull Request.

---

## 2. Prepare a Release

```bash
git checkout develop
git pull
git checkout -b release/vX.Y.Z
```

- Review, test, and document changes.

- Freeze new features.

- Update CHANGELOG.md and version (package.json, if applicable).

- Create PR from release/\* to master.

---

## 3. Backport to Develop (branch synchronization)

```bash
git checkout master
git pull
git checkout -b backport/vX.Y.Z
```

- Create a PR from backport/\* to develop.

🎯 This ensures that develop includes all changes that made it to master (versions, fixes, changelog, etc.)

### 🔁 Merge Summary

| Source branch | Target branch | Reason                            |
| ------------- | ------------- | --------------------------------- |
| `feature/*`   | `develop`     | New features                      |
| `release/*`   | `master`      | Release the release to production |
| `release/*`   | `develop`     | Sync version changes              |
| `hotfix/*`    | `master`      | Hotfix in production              |
| `hotfix/*`    | `develop`     | Sync fix with development         |
| `main`        | `develop`     | Post-release backport             |
