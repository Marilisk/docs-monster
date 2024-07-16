

const caseRegexp = /([AАaа]\d{2}|СИП)-\d{1,12}\/20\d{2}/

export function caseNumberValidate(value:string) {
    let error;
    if (!caseRegexp.test(value)) {
        error = `некорректный номер дела`
    } 
    return error;
}