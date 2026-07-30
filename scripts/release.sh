#!/usr/bin/env bash

set -e

APP=$1
TYPE=$2

usage() {
  echo "Usage:"
  echo "  ./scripts/release.sh <app> <version>"
  echo ""
  echo "APP:"
  echo "  web"
  echo "  cli"
  echo ""
  echo "VERSION:"
  echo "  patch"
  echo "  minor"
  echo "  major"
  echo ""
  echo "Example:"
  echo "  ./scripts/release.sh cli patch"
  exit 1
}

# 参数数量检查
if [ $# -ne 2 ]; then
  usage
fi


# APP 校验
case "$APP" in
  web|cli)
    ;;
  *)
    echo "❌ Invalid app: $APP"
    echo "Allowed apps: web, cli"
    exit 1
    ;;
esac

# VERSION TYPE 校验
case "$TYPE" in
  patch|minor|major)
    ;;
  *)
    echo "❌ Invalid version type: $TYPE"
    echo "Allowed types: patch, minor, major"
    exit 1
    ;;
esac

BRANCH=$(git branch --show-current)

if [ -z "$BRANCH" ]; then
  echo "❌ Cannot detect current branch."
  exit 1
fi

# 检查 git 工作区
if [ -n "$(git status --porcelain)" ]; then
  echo "❌ Git working tree is not clean."
  echo "Please commit or stash your changes first."
  exit 1
fi

echo "🌿 Branch: $BRANCH"
echo "🚀 Release $APP ($TYPE)"

# 更新版本号
pnpm --filter "./apps/$APP" version "$TYPE" --no-git-tag-version

VERSION=$(pnpm --filter "./apps/$APP" exec node -p "require('./package.json').version")

echo "📦 Version: $APP-v$VERSION"

git add .
git commit -m "feat($APP): release v$VERSION"

git tag "$APP-v$VERSION"

git push
git push origin "$APP-v$VERSION"

echo "✅ Released $APP-v$VERSION"