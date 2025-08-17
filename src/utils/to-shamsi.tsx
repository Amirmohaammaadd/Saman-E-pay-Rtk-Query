export const toShmsi = (isoDate: string) => {

    const date = new Date(isoDate);

    const persianDate = new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour12: false,
        timeZone: "UTC"
    }).format(date);

    return persianDate
}