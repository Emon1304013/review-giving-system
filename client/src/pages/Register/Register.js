import { Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useContext} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";
import { useTitle } from "../../hooks/useTitle";

const Register = () => {
  const { createUser, googleSignIn, updateUserProfile,setLoading,loading } =
    useContext(AuthContext);
  useTitle("Register");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const userName = form.name.value;
    const userPhoto = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (password !== confirm) {
      return toast.error("Password Didn't Match");
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser  = {
          email:user?.email,
        }

        //Get JWT Token from server and verify user
        fetch('https://roza-fusion-server.vercel.app/jwt',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          localStorage.setItem('auth-token',data.token)
          navigate(from, { replace: true });
        })
        .catch(err => {
          toast.error(err);
        })

        updateUserProfile(userName, userPhoto)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            toast.error(err);
          });

        toast.success("User registered successfully");
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

    if (loading) {
    return (
      <Button className="w-2/12 mx-auto my-10">
        <Spinner aria-label="Spinner button example" />
        <span className="pl-3">Loading...</span>
      </Button>
    );
  }

  const handleGoogleSignin = () => {
    googleSignIn().then((result) => {
      const currentUser = {
        email: result.user?.email,
      }

      //Get JWT Token from server and verify user
      fetch('https://roza-fusion-server.vercel.app/jwt',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          toast.success("Logged In successfully")
          localStorage.setItem('auth-token',data.token)
          navigate(from, { replace: true });
        })
        .catch(err => {
          console.log(err);
        })
    })
    .catch(error => {
      toast.error(error.message)
    })
  };

  return (
    <div className="my-20">
      <div className="w-11/12 lg:w-1/2 mx-4 lg:mx-auto bg-gray-200 p-4 rounded-xl">
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label value="Your Name" />
            </div>
            <TextInput
              type="text"
              placeholder="John Doe"
              required={true}
              shadow={true}
              name="name"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@company.com"
              required={true}
              shadow={true}
              name="email"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Your Photo URL" />
            </div>
            <TextInput
              type="text"
              placeholder="Photo URL"
              required={true}
              shadow={true}
              name="photo"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              required={true}
              shadow={true}
              name="password"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput
              type="password"
              required={true}
              shadow={true}
              name="confirm"
            />
          </div>
          <Button type="submit" className="w-11/12 mx-4 lg:w-1/2 lg:mx-auto">
            Register
          </Button>
        </form>
        <Button
          onClick={handleGoogleSignin}
          color="success"
          type="submit"
          className="w-11/12 mx-4 lg:w-1/2 lg:mx-auto my-4"
        >
          Register Using Google
        </Button>
      </div>
    </div>
  );
};

export default Register;
