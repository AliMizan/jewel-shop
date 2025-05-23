
import { useGetMyUser,useUpdateMyUser} from "../api/MyUserApi";
import UserProfileForm from "../components/forms/user-profile-form/UserProfileForm";


const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <span>Loading...</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <div className="m-30" >
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
    </div>
  );
};

export default UserProfilePage;
