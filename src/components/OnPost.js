import React, { useEffect } from "react";

import Amplify, { DataStore, Predicates } from "aws-amplify";
import { Post } from "../models";

//Use next two lines only if syncing with the cloud
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

function onCreate() {
  DataStore.save(
    new Post({
      title: `New title ${Date.now()}`,
      
    })
  );
}

function onDeleteAll() {
  DataStore.delete(Post, Predicates.ALL);
}



function OnPost() {
  useEffect(() => {
    const subscription = DataStore.observe(Post).subscribe((msg) => {
      console.log(msg.model, msg.opType, msg.element);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
        <div>
          <input type="button" value="NEW" onClick={onCreate} />
          <input type="button" value="DELETE ALL" onClick={onDeleteAll} />
        </div>
       
     
  
  );
}

export default OnPost;