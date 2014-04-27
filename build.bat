@echo off
TITLE Building Butter

>butter.js (for /r "core" %%F in (*.js) do type "%%F")