export const columns1 = [
  {
    title: 'phoneNumber',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'string',
    dataIndex: 'string',
    key: 'string',
  },
  {
    title: 'Phone Number',
    dataIndex: 'Phone Number',
    key: 'Phone Number',
  }
];

export const data1 = [
  {
    key: '1',
    name: '  ',
    age: ' ',
    address: ' ',
  
  },
];


export const columns2 = [
  {
    title: 'type',
    dataIndex: 'type',
    key: 'type',
 
  },
  {
    title: 'string',
    dataIndex: 'string',
    key: 'string',
  },
  {
    title: 'This refers to the payload type ie premium` or basic',
    dataIndex: 'This refers to the payload type ie premium` or basic',
    key: 'This refers to the payload type ie premium` or basic',
  }
];

export const data2 = [
  {
    key: '1',
    name: '  ',
    age: ' ',
    address: ' ',
  
  },
];



export const columns3 = [
  {
    title: 'Authorization',
    dataIndex: 'Authorization',
    key: 'Authorization',
 
  },
  {
    title: 'string',
    dataIndex: 'string',
    key: 'string',
  },
  {
    title: 'Authorization Header',
    dataIndex: 'Authorization Header',
    key: 'Authorization Header',
  }
];

export const data3 = [
  {
    key: '1',
    name: '  ',
    age: ' ',
    address: ' ',
  
  },
];


export const columns4 = [
  {
    title: 'businessname',
    dataIndex: 'businessname',
    key: 'businessname',
 
  },
  {
    title: 'string',
    dataIndex: 'string',
    key: 'string',
  },
  {
    title: 'Business name',
    dataIndex: 'Business name',
    key: 'Business name',
  }
];

export const data4 = [
  {
    key: '1',
    name: '  ',
    age: ' ',
    address: ' ',
  
  },
];


export const columns5 = [
  {
    title: 'businesstype',
    dataIndex: 'businesstype',
    key: 'businesstype',
 
  },
  {
    title: 'string',
    dataIndex: 'string',
    key: 'string',
  },
  {
    title: 'Business type',
    dataIndex: 'Business type',
    key: 'Business type',
  }
];

export const data5 = [
  {
    key: '1',
    name: '  ',
    age: ' ',
    address: ' ',
  
  },
];

export const columns6 = [
  {
    title: 'rcnumber',
    dataIndex: 'rcnumber',
    key: 'rcnumber',
 
  },
  {
    title: 'string',
    dataIndex: 'string',
    key: 'string',
  },
  {
    title: 'RC Number',
    dataIndex: 'RC Number',
    key: 'RC Number',
  }
];

export const data6 = [
  {
    key: '1',
    name: '  ',
    age: ' ',
    address: ' ',
  
  },];

  export const columns7 = [
    {
      title: 'state',
      dataIndex: 'state',
      key: 'state',
   
    },
    {
      title: 'string',
      dataIndex: 'string',
      key: 'string',
    },
    {
      title: 'State',
      dataIndex: 'State',
      key: 'State',
    }
  ];
  
  export const data7 = [
    {
      key: '1',
      name: '  ',
      age: ' ',
      address: ' ',
    
    }];

    export const columns8 = [
      {
        title: 'lga',
        dataIndex: 'lga',
        key: 'lga',
     
      },
      {
        title: 'string',
        dataIndex: 'string',
        key: 'string',
      },
      {
        title: 'Local Govt. Area',
        dataIndex: 'Local Govt. Area',
        key: 'Local Govt. Area',
      }
    ];

    export const columns9 = [
      {
        title: 'street',
        dataIndex: 'street',
        key: 'street',
     
      },
      {
        title: 'string',
        dataIndex: 'string',
        key: 'string',
      },
      {
        title: 'Street',
        dataIndex: 'Street',
        key: 'Street',
      }
    ];
    
    export const data8 = [
      {
        key: '1',
        name: '  ',
        age: ' ',
        address: ' ',
      
      },
];

	  //const { Panel } = Collapse;
    export  const codeString_header = `
    secret-key =  {secretKey}"
    org-id ={organizationId} 
  `
  export const error404 = `
  {
    "status": "error",
    "message": "string",
    "code": "ACCESS_DENIED"
}
  `
  export const requestBody = `
  {
    "businessname":"Syrol Technologies",
    "businesstype":"corporate",
    "rcnumber":"RC98776",
    "state":"Lagos",
    "lga":"Eti-Osa",
    "street":"No 12C Adewale Street, Ajah"
  }
  `
  
  export const codeString = 
  ` 
  {
    "message": "Request Successful",
    "success": true,
    "payload": {
        "id": 1,
        "organizationid": "librallaw",
        "businessname": "Syrol Technologies",
        "businesstype": "corporate",
        "rcnumber": "RC98776",
        "state": "Lagos",
        "lga": "Eti-Osa",
        "street": "No 12C Adewale Street, Ajah",
        "status": "pending",
        "remark": null,
        "agentid": null,
        "lastmodifieddate": "2021-11-26T10:04:17.058+00:00",
        "createddate": "2021-11-26T10:04:17.058+00:00"
    }
}
  `
  
  
export const curlRequest = 
`curl --location --request POST 'https://testapi.iprove.ng/identity/api/v1/business/request_verification' 
--header 'Authorization: Bearer <your secret key>' 
--header 'Content-Type: application/json' 
--data-raw '{
  "businessname":"Syrol Technologies",
  "businesstype":"corporate",
  "rcnumber":"RC98776",
  "state":"Lagos",
  "lga":"Eti-Osa",
  "street":"No 12C Adewale Street, Ajah"
}'`;
      