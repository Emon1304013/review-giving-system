import {
  Button,
  Label,
  Modal,
  Table,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";

const ReviewDataTable = ({ review, refresh, setRefresh }) => {
    const {user} = useContext(AuthContext);
  const { _id, serviceName,serviceId, customerReview } = review;
  const [visible,setVisible]=useState(false)
  const [newReview,setNewReview] = useState();
  const date = new Date()

  const handleUpdate = id =>{
    setVisible(false);
      const updatedReview = {
        serviceId,
        serviceName,
        reviewerEmail: user?.email,
        reviewerName : user?.displayName || 'Mr. X',
        reviewerPhoto : user?.photoURL || 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png',
        customerReview: newReview,
        created:date,
    }


    fetch(`https://roza-fusion-server.vercel.app/user-reviews/${id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updatedReview)
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            toast.success(data.message)
            setRefresh(!false);
        }
        else{
            toast.error(data.error)
        }
    })
    .catch(err => {
        toast.error(err.message);
    })
  }

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure that you want to delete");
    if (confirm) {
      fetch(`https://roza-fusion-server.vercel.app/user-reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRefresh(!refresh);
          toast.success(`${data.message}`);
        });
    }
  };
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {serviceName}
      </Table.Cell>
      <Table.Cell className="text-left lg:text-center text-gray-900 font-semibold">
        {customerReview}
      </Table.Cell>
      <Table.Cell className="flex flex-col gap-2">

      
        <React.Fragment>
          <Button className="px-3 py-1 text-xl font-bold" onClick={()=>setVisible(true)} gradientMonochrome="success" size="lg">Edit</Button>
          <Modal show={visible} size="md" popup={true} onClose={()=>setVisible(false)}>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Update Your Review
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Service Name" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    required={true}
                    defaultValue={serviceName}
                    readOnly
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="review" value="Your Review" />
                  </div>
                  {/* <TextInput id="password" type="password" required={true} /> */}
                  <Textarea onBlur={(e)=> {setNewReview(e.target.value)}} type="text" required={true}></Textarea>
                </div>
                <div className="w-full">
                  <Button onClick={()=> {handleUpdate(_id)}}>Update Review</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </React.Fragment>

        <button
          onClick={() => {
            handleDelete(_id);
          }}
          className="font-medium bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded-lg text-2xl"
        >
          Delete
        </button>
      </Table.Cell>
    </Table.Row>
  );
};

export default ReviewDataTable;
