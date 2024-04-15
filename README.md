# Placeholder Utils

## Description

Placeholder Utils is a package that provides utility functions for templates and placeholder functionalities. 

## Features

- Replace placeholders from string templates
- Extract placeholders from string templates
- Generate placeholder data for testing (WIP)

## Installation

You can install Placeholder Utils using:
```npm install placeholder-utils```.

## Types

```replacePlaceholders(template: string, replacements: Record<string, string>, placeholderPrefix?: string, placeholderSuffix?: string): string;```

```extractPlaceholders(template: string, placeholderPrefix?: string, placeholderSuffix?: string): string[];```
