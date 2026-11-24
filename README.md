[![make.fun](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/putriwindiasty22/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/rank.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/putriwindiasty22/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/reward.svg)](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

# Loading Screen Gold: A Tip in 200 Characters

One sharp, funny loading-screen tip for stressed developers and AI coding agents — 200 characters or fewer.

## The tip

> Tip: your AI agent is re-reading your prompt for the fifth time, hoping the requirements changed while it wasn't looking.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the tip to `/output/entry.txt` (falling back to `./output/entry.txt` when `/output` is not writable), validates that it is non-blank, a single line, and at most 200 characters, then reads the file back to verify it holds exactly the tip.

Run it:

```sh
node main.ts
```

Then check the output:

```sh
cat output/entry.txt
```

## Competition

[Loading Screen Gold: A Tip in 200 Characters](https://make.fun/c/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270) on [make.fun](https://make.fun).

Referral code: `j9d1a2d9`
