// Just for checking backend and frontend connections!!!

import { useDispatch, useSelector } from "react-redux";

import { fetchAllProduct, fetchAllUser, addUser } from "../redux/actions";

import { AppState, Role } from "../types";

export default function Home() {
  const dispatch = useDispatch<any>();


  const handleFetchProducts = () => {
    dispatch(fetchAllProduct());
  };
  
  // const handleAddProduct  =()=>{
  //   const product = {
  //     _id: '',
  //     name: 'Shorts',
  //     description: 'Confortable for summer',
  //     categories: [],
  //     variants: ['Red', 'Blue', 'Violet'],
  //     sizes: ['XS', 'M', 'L'],
  //     img :''

  //   }
  //  dispatch(addProduct(product))
  // }

  const handleFetchUsers = ()=>{
    dispatch(fetchAllUser())
  }
  
  const handleCreateUser = () =>{
    const user = {
    _id: '',
    isBanned: false,
		role: Role.ADMIN,
		firstName: "Sherry",
		lastName: "Dawson",
		email: "sdfsd@dfg",
    userName: "sherry",
    password: "yuioff"

    }
    dispatch(addUser(token, user))
  }


  // const handleModifyProduct = () =>{
  //   const product = {
  //     _id: '62a4b120595a824ba4c93bca',
  //     name: 'Bellybottom',
  //     description: 'You can wear in party or as a casual wear',
  //     categories: [],
  //     variants: ['Red', 'Blue', 'Violet'],
  //     sizes: ['XS', 'M', 'L'],
  //     img :'sdfds'

  //   }
  //  dispatch(editProduct(product,'62a4b120595a824ba4c93bca'))
  // }

  // const handleLogout =()=>{
  //   dispatch(userLogOut())
  // }


  // const handleDeleteProduct = ()=>{
  //   dispatch(deleteProduct('629f29713515850600ff20a4'))
  // }

  const {token} = useSelector((state: AppState) => state.login);
  console.log('token', token)

  // const handleBanUnbadUser = ()=>{
  //   const user = {
  //     isBanned : false
  //   }
  //   dispatch(banUnbanUser(token, user,  '628c82529e379b527cea5f3a' ))


  // }




  return (
    <>
      <button onClick={handleFetchProducts}>Fetch product</button>
      {/* <button onClick={handleAddProduct}>Add product</button> */}
      <button onClick={handleFetchUsers}>Fetch Users</button>
      <button onClick={handleCreateUser}>Create User</button>
      {/* <button onClick={handleLogout}>LogOut</button> */}
      {/* <button onClick={handleDeleteProduct}>Delete Product</button> */}
      {/* <button onClick={handleModifyProduct}>Modify Product</button> */}

  
    </>
  );
}
function createUser(token: string, user: { _id: string; isBanned: boolean; role: Role; firstName: string; lastName: string; email: string; userName: string; password: string; }): any {
  throw new Error("Function not implemented.");
}

