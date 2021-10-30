import { Auth } from 'aws-amplify'


export default async ({ route, redirect }) => {
    const userInfo = await Auth.currentUserInfo()
    if(route.path === '/signin') {
        if(userInfo){
            redirect('/')
        }
        return
    }
    if(!userInfo){
        redirect('/signin')
    }
  }