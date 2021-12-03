export const columns1 = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  
  },
  {
    title: 'string',
    dataIndex: 'string',
    key: 'string',
  },
  {
    title: 'Country ID',
    dataIndex: 'Country ID',
    key: 'Country ID',
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
    title: 'limit',
    dataIndex: 'limit',
    key: 'limit',
   
  },
  {
    title: 'number',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Number of verifications to fetch at once ',
    dataIndex: 'Number of verifications to fetch at once ',
    key: 'Number of verifications to fetch at once ',
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
    title: 'offset',
    dataIndex: 'offset',
    key: 'offset',
    
  },
  {
    title: 'number',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Number of verifications to skip per call',
    dataIndex: 'Number of verifications to skip per call',
    key: 'Number of verifications to skip per call',
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
    title: 'Authentication',
    dataIndex: 'Authentication',
    key: 'Authentication',
    
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
    title: 'middlename',
    dataIndex: 'middlename',
    key: 'middlename',
 
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
    title: 'surname',
    dataIndex: 'surname',
    key: 'surname',
 
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
    "message": "string",
    "code": "INTERNAL_SERVER_ERROR"
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
    "message": "Request Success",
    "success": true,
    "payload": [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
    ]
}

  `
  
  
export const curlRequest = 
`curl --location --request GET 'https://testapi.iprove.ng/identity/api/v1/location/get_states' 
--header 'Authorization: Bearer <your secret key>' 
--header 'Content-Type: application/json' 
--data-raw '{
    "firstname":"KUDIRAT",
    "lastname":"OMOWUNMI",
    "surname":"AZEEZ",
    "phonenumber":"08127763271",
    "birthdate":"26-05-1994"
}'`;
      