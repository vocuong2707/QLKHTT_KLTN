import {apiSlice} from "../api/apiSilce";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateAvatar: builder.mutation({
            query:(avatar)=> ({
                url:"update-user-avatar",
                method: "PUT",
                body:{avatar},
                credentials: "include" as const,
<<<<<<< HEAD
            })
=======
            }),
>>>>>>> c95c476f1d9f25d0da395b2d851672b8df9baf5d
        }),
        editProfile: builder.mutation({
            query:({name})=> ({
                url:"update-user-info",
                method: "PUT",
                body:{name,},
                credentials: "include" as const,
<<<<<<< HEAD
            })
=======
            }),
>>>>>>> c95c476f1d9f25d0da395b2d851672b8df9baf5d
        }),
        updatePassword: builder.mutation({
            query:({oldPassword, newPassword})=> ({
                url:"update-user-password",
                method: "PUT",
                body:{
                    oldPassword,
                    newPassword,
                },
                credentials: "include" as const,
<<<<<<< HEAD
            })
        })
    })
});

export const {useUpdateAvatarMutation, useEditProfileMutation, useUpdatePasswordMutation } = userApi;
=======
            }),
        }),
        getAllUsers: builder.query({
            query: () => ({  // Truyền trực tiếp data thay vì { data }
              url: "get-users",
              method: "GET",
              credentials: "include" as const,
            }),
          }),
          updateUsersRole: builder.mutation({
            query: ({ email, roles }) => ({
              url: "update-user-role",
              method: "PUT",
              body: {
                email,
                roles,
              },
              credentials: "include" as const, // Đảm bảo gửi cookie cùng request
            }),
          }),
          deleteUsers: builder.mutation({
            query: (id) => ({
              url: `delete-user/${id}`,
              method: "PUT",
              credentials: "include" as const, // Đảm bảo gửi cookie cùng request
            }),
          }),
          
          
    })
});

export const {useUpdateAvatarMutation, useEditProfileMutation, 
    useUpdatePasswordMutation,useGetAllUsersQuery,useUpdateUsersRoleMutation,useDeleteUsersMutation } = userApi;
>>>>>>> c95c476f1d9f25d0da395b2d851672b8df9baf5d
