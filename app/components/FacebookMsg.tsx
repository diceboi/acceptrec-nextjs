"use client"

import { FacebookProvider, CustomChat } from 'react-facebook';

export default function FacebookMsg() {  
      return (
        <>
        <FacebookProvider appId="1132842514525395" chatSupport>
          <CustomChat pageId="460375514126778" minimized={true}/>
        </FacebookProvider>
        </>
      );
  }