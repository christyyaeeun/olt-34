// const upload = Storage.put(file.name, file, {
//     resumable: true,
//     completeCallback: (event) => {
//         console.log(`Successfully uploaded ${event.key}`);
//     },
//     progressCallback: (progress) => {
//         console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
//     },
//     errorCallback: (err) => {
//         console.error('Unexpected error while uploading', err);
//     }
// })

// const result = await Storage.put("test.txt", "Private Content", {
//     level: "private",
//     contentType: "text/plain",
//   });

// const file = e.target.files[0];
//     try {
//       await Storage.put(file.name, file, {
//         contentType: "image/png", // contentType is optional
//       });
//     } catch (error) {
//       console.log("Error uploading file: ", error);
//     }
//   }
  
//   Storage.list('photos/', { level: 'private' })
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

//   <input type="file" onChange={onChange} />;