import { useRouter } from "next/router";

const Profile = () => {
    const router = useRouter()
    const {id} = router.query
  return <div> Hello {id}!</div>;
};

export default Profile;
