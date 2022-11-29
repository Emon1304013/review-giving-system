import { Button, Textarea } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";

const PostReview = ({serviceId,setRefresh,refresh,serviceName}) => {
  const { user } = useContext(AuthContext);
  const location = useLocation()
  const date = new Date();


    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const customerReview = form.customerReview.value;

        const review = {
            serviceId,
            serviceName,
            reviewerEmail: user?.email,
            reviewerName : user?.displayName || 'Mr. X',
            reviewerPhoto : user?.photoURL || 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png',
            customerReview,
            created:date,
        }

        fetch('https://roza-fusion-server.vercel.app/add-review',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success(data.message)
            setRefresh(!refresh)
            form.reset();
        })
        .catch(err => {
            console.log(err);
        })

    }

  return (
    <div className="w-2/3 lg:w-1/2 mx-auto mt-8">
      {user ? <form onSubmit={handleAddReview} >
        <div className="mb-2 block">
        </div>
        <Textarea
          name="customerReview"
          placeholder="Please Leave us a Review..."
          required={true}
          rows={4}
        />
      <Button type="submit" className="mx-auto mt-8">Add Review</Button>
      </form>
      :
      <div className='text-center text-xl font-bold'>Please <Link to='/login' state={{ from: location }} replace className="underline ">Login</Link> to Post a Review</div>}
    </div>
  );
};

export default PostReview;
