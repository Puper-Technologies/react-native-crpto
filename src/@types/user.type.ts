export interface UserType {
    user: any;
    login: (email: string, password: string)=>void;
    logout: ()=>void;
}