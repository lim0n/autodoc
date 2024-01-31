/**
 * Разрешён ли формат файла
 * @param file объект File
 * @param extensions массив расширений
 * @returns boolean
 */
export function isFileHasExtension(file: File, extensions: Array<string>): boolean {
    const nameParsedArray = file.name.split('.');
    const extension = nameParsedArray.length > 1 ? nameParsedArray.at(-1) : null;
    return extension 
        ? extensions.includes(extension)
        : false;
}
