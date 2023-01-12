export function parseJsonResponse (status: boolean, data: any, error: any, ){
    return {
        data,
        status,
        error
    }
}