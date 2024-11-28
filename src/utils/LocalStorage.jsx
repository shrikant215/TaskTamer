// localStorage.clear()
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 101,
        "title": "Complete project report",
        "description": "Prepare the final project report for submission.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2024-11-21",
        "category": "Documentation"
      },
      {
        "taskNumber": 102,
        "title": "Fix login bug",
        "description": "Debug and fix the issue in the login feature.",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "date": "2024-11-20",
        "category": "Development"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Ishani",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 201,
        "title": "Update inventory records",
        "description": "Update the inventory database with recent stock changes.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2024-11-21",
        "category": "Operations"
      },
      {
        "taskNumber": 202,
        "title": "Design new banner",
        "description": "Create a new banner for the upcoming sale.",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "date": "2024-11-18",
        "category": "Design"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Vihaan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "taskNumber": 301,
        "title": "Optimize database queries",
        "description": "Improve the performance of key database queries.",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "date": "2024-11-19",
        "category": "Database"
      },
      {
        "taskNumber": 302,
        "title": "Schedule team meeting",
        "description": "Arrange a team meeting to discuss project progress.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2024-11-21",
        "category": "Management"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Ananya",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 401,
        "title": "Test new features",
        "description": "Perform QA testing on newly developed features.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2024-11-21",
        "category": "Testing"
      },
      {
        "taskNumber": 402,
        "title": "Prepare budget report",
        "description": "Compile the department's budget report for review.",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "date": "2024-11-20",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Kabir",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 501,
        "title": "Update client information",
        "description": "Ensure client records are up-to-date in the CRM.",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false,
        "date": "2024-11-19",
        "category": "CRM"
      },
      {
        "taskNumber": 502,
        "title": "Analyze sales data",
        "description": "Analyze the recent sales data for trends.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2024-11-21",
        "category": "Analysis"
      }
    ]
  }
];



  const admin =[
    {
        "id": 1,
        "firstName":"shrikant",
        "email": "admin@example.com",
        "password": "123"
      }
  ];

  export const setLocalStorage = () => {
localStorage.setItem('employees', JSON.stringify(employees) );
localStorage.setItem('admin', JSON.stringify(admin) );

  }
  // setLocalStorage()
  // localStorage.clear()


  export const getLocalStorage = () => {
const employee = JSON.parse(localStorage.getItem('employees'))
const admin = JSON.parse(localStorage.getItem('admin'))

return {employee,admin}
  }
  