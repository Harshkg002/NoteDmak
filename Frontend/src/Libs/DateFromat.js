export function formateDate(date){
    return date.toLocaleDateString("en-US",{
        day:"numeric",
        month:"short",
        year:"numeric"
    })
}