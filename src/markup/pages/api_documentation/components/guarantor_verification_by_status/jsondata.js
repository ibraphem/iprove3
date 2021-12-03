export const columns1 = [
  {
    title: 'pending',
    dataIndex: 'pending',
    key: 'pending',
  
  },
  {
    title: 'string',
    dataIndex: 'string',
    key: 'string',
  },
  {
    title: 'Address Verification ID',
    dataIndex: 'Address Verification ID',
    key: 'Address Verification ID',
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
    title: 'valid',
    dataIndex: 'valid',
    key: 'valid',
 
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
    title: 'invalid',
    dataIndex: 'invalid',
    key: 'invalid',
 
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
    title: 'pending',
    dataIndex: 'pending',
    key: 'pending',
    
  },
  {
    title: 'string',
    dataIndex: 'string',
    key: 'string',
  },
  {
    title: 'Authorization Token',
    dataIndex: 'Authorization Token',
    key: 'Authorization Token',
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
    title: 'canceled',
    dataIndex: 'canceled',
    key: 'canceled',
 
  },
  {
    title: 'string',
    dataIndex: 'string',
    key: 'string',
  },
  {
    title: 'Middlename',
    dataIndex: 'Middlename',
    key: 'Middlename',
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
    title: 'None',
    dataIndex: 'None',
    key: 'None',
 
  },
  {
    title: 'string',
    dataIndex: 'string',
    key: 'string',
  },
  {
    title: 'Surname',
    dataIndex: 'Surname',
    key: 'Surname',
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
      title: 'birthdate',
      dataIndex: 'birthdate',
      key: 'birthdate',
   
    },
    {
      title: 'string',
      dataIndex: 'string',
      key: 'string',
    },
    {
      title: 'Date of Birth',
      dataIndex: 'Date of Birth',
      key: 'Date of Birth',
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
        title: 'phonenumber',
        dataIndex: 'phonenumber',
        key: 'phonenumber',
     
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
    "message": "Property Not Found",
    "code": "NOT_FOUND_ERROR"
}
  `
  export const requestBody = `
  {
      "firstname":"KUDIRAT",
      "middlename":"OMOWUNMI",
      "surname":"AZEEZ",
      "birthdate":"26-05-1994",
      "phonenumber":"08127763271"
  }
  `
  
  export const codeString = 
  `
  {
    "message": "Request Successful",
    "success": true,
    "payload": {
        "content": [
         			{
					"id": 1,
					"organizationid": "librallaw",
					"firstname": "Jhon",
					"lastname": "Doe",
					"phone": "07099887676",
					"email": "jhon@gmail.com",
					"state": "Lagos",
					"lga": "Eti-Osa",
					"street": "No 12C Adewale Street, Ajah",
					"landmark": null,
					"idtype": "nin",
					"idnumber": "76556789900",
					"status": "valid",
					"remark": null,
					"agentid": null,
					"lastmodifieddate": "2021-11-26T10:29:46.569+00:00",
					"createddate": "2021-11-26T10:29:46.569+00:00"
				}

        ],
        "pageable": {
            "sort": {
                "sorted": true,
                "unsorted": false,
                "empty": false
            },
            "pageSize": 20,
            "pageNumber": 0,
            "offset": 0,
            "paged": true,
            "unpaged": false
        },
        "totalPages": 1,
        "totalElements": 1,
        "last": true,
        "number": 0,
        "size": 20,
        "numberOfElements": 1,
        "sort": {
            "sorted": true,
            "unsorted": false,
            "empty": false
        },
        "first": true,
        "empty": false
    }
}
  `
  
  
export const curlRequest = 
`curl --location --request GET 'https://testapi.iprove.ng/identity/api/v1/guarantor/get_verification_by_status/valid?page=0' 
--header 'Authorization: Bearer <your secret key>' 
--header 'Content-Type: application/json' 
--data-raw '{
    "firstname":"KUDIRAT",
    "lastname":"OMOWUNMI",
    "surname":"AZEEZ",
    "phonenumber":"08127763271",
    "birthdate":"26-05-1994"
}'`;
      