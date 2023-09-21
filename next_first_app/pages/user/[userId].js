import React from 'react';
import { useRouter } from 'next/router';


// This will work as localhost:5000/user/:userId
export default function UserId() {

        const router = useRouter();
        const {userId} = router.query;

  return (
    <div>[userId] : {userId}</div>
  )
}
