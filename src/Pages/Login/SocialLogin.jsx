import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSocialLogin = (media) => {
    media()
      .then(() => {
        toast.success("Sign In success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex justify-center gap-5">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-primary btn-outline"
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-primary btn-outline"
        >
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
