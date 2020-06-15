import axios from 'axios';


export const  collections = newCollection => {

  return axios.post(`/collection/add`, {

   title: newCollection.title,
   description: newCollection.description,
   image: newCollection.image
   })
   .then(res => {

//  console.log('collection added!');
//  console.log(newCollection);
});
};

  
  
  export const handleUpload = theFile => {
  
    return  axios.post(`/collection/${this.props.id}/add`, theFile)
        .then(res => res.data)
        .catch(err => {
          console.log(err);
        });
  };
