import {create} from 'zustand';
interface AuthState{
    isAuthenticated:boolean;
    token:string|null;
    setAuthenticated:(auth:boolean,token:string|null)=>void;
}
export const useAuthStore=create<AuthState>((set)=>({
    isAuthenticated:false,
    token:null,
    setAuthenticated:(auth,token)=>set({isAuthenticated:auth,token})
}))