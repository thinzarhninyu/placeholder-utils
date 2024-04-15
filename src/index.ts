export function replacePlaceholders(template: string, replacements: Record<string, string>, placeholderPrefix: string = '{', placeholderSuffix: string = '}'): string {
    let result = template;
    for (const key in replacements) {
        if (Object.prototype.hasOwnProperty.call(replacements, key)) {
            const replacementValue = replacements[key] ?? '';
            result = result.replace(new RegExp(`\\${placeholderPrefix}${key}\\${placeholderSuffix}`, 'g'), replacementValue);
        }
    }
    return result;
};


export function extractPlaceholders(template: string, placeholderPrefix: string = '{', placeholderSuffix: string = '}'): string[] {
    const regex = new RegExp(`\\${placeholderPrefix}(.*?)\\${placeholderSuffix}`, 'g');
    const matches: string[] = [];
    let match;
    while ((match = regex.exec(template)) !== null) {
        matches.push(match[1] ?? '');
    }
    return matches;
}