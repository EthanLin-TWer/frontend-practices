#!/usr/bin/env bash

## 这个脚本，在主分支上有提交，希望 rebase 到各个分支上去的场景
branches=($(git branch | cat | grep --invert-match master | tr -d ' '))
for branch in ${branches[@]}; do
  git rebase master ${branch}
done

git checkout master
