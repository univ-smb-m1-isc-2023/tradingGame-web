export function subtractOneYear(dateString: string): string {
    // Convert string to Date object
    let date = new Date(dateString);

    // Subtract one year
    date.setFullYear(date.getFullYear() - 1);

    // Format the date as YYYY-MM-DD
    let formattedDate = date.toISOString().split('T')[0];

    return formattedDate;
}