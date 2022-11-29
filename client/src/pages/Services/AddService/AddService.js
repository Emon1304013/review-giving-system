import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/UserContext";
import { useTitle } from "../../../hooks/useTitle";

const AddService = () => {

    const {user} = useContext(AuthContext)
    useTitle('Add Service')
    const date = new Date();

    const handleServiceSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const description = form.description.value;
        const price = form.price.value;
        const imgUrl = form.imgUrl.value;
        console.log(serviceName,description,price,imgUrl);

        const service = {
            serviceName,
            description,
            price,
            imgUrl,
            created:date
        }

        fetch('https://roza-fusion-server.vercel.app/add-service',{
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body:JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success(data.message)
            form.reset();
        })
        .catch(err => {
            console.log(err);
        })

    }


  return (
    <div className="flex flex-col gap-4 w-full mx-8 lg:w-1/2 lg:mx-auto my-20 justify-center">
      <form onSubmit={handleServiceSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username3" color="green" value="Service name" />
          </div>
          <TextInput
            placeholder="Service Name"
            required={true}
            color="green"
            name="serviceName"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username4" color="red" value="Description" />
          </div>
          <Textarea
            placeholder="Insert Product Description"
            required={true}
            rows={4}
            name="description"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="username3" color="green" value="Price" />
          </div>
          <TextInput placeholder="Price" name="price" required={true} color="green" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="username3" color="green" value="Image URL" />
          </div>
          <TextInput
            placeholder="image url"
            required={true}
            color="green"
            name="imgUrl"
            //   helperText={
            //     <React.Fragment>
            //       <span className="font-medium">Alright!</span> Username available!
            //     </React.Fragment>
            //   }
          />
        </div>
      <Button type="submit" className="w-1/2 mx-auto mt-8">Add Service</Button>
      </form>

    </div>
  );
};

export default AddService;
