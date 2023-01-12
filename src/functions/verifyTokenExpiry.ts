import jwtDecode from "jwt-decode"
export const verifyTokenExpiry = (token: string)=>{
    const decoded: any = jwtDecode(token);
    if(decoded.exp>= Date.now()/1000)
        return {  status: false, decoded };
    return { status: true, decoded };
}

