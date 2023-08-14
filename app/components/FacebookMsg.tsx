"use client"

import { FacebookProvider, CustomChat } from 'react-facebook';

export default function FacebookMsg() {  
      return (
        <>
        <FacebookProvider appId="676730630572962" chatSupport>
          <CustomChat pageId="110861176962252" minimized={true}/>
        </FacebookProvider>
        </>
      );
  }