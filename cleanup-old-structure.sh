#!/bin/bash
# Run from the repo root: /Users/robertcolvin/GitHub/craftbrewer.se
# Removes old directory structure after verifying the new one is in place.
# Review before running. This stages deletions — you still need to commit.

cd /Users/robertcolvin/GitHub/craftbrewer.se

# Remove old foundations, chemicals, equipment, processes, references directories
git rm -r docs/Homebrewing/01-foundations
git rm -r docs/Homebrewing/02-chemicals
git rm -r docs/Homebrewing/03-equipment
git rm -r docs/Homebrewing/04-processes
git rm -r docs/Homebrewing/05-references

# Remove old top-level BrewClub and recipes directories (now under Homebrewing/)
git rm -r docs/BrewClub
git rm -r docs/recipes

echo "Done. Review with: git status"
echo "Commit with: git add -A && git commit -m 'restructure: move to The-Brewers-Manual, BrewClub and Recipes under Homebrewing'"
