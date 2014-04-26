@echo off
TITLE Building Butter

>tests/butter.js (for /r "core" %%F in (*.js) do type "%%F")