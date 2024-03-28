interface UserData {
    userId: string;
    loggedIn: Date;
    loggedOut: Date;
  }
  
  function getMonthlyActiveUsers(userdata: UserData[]): Map<string, number> {
      const monthlyActiveUsers = new Map<string, Set<String>>(); // To store Month with year and unique userId
    
      //Assumed here that All Login and Logout belongs to same year.
      for (const data of userdata) {
        let loginDateMonth = new Date(data.loggedIn).getMonth();
        const logOutDateMonth = new Date(data.loggedOut).getMonth();
        
  
        while(loginDateMonth <= logOutDateMonth){
          if (!monthlyActiveUsers.has(`${loginDateMonth+1}`)) {
              monthlyActiveUsers.set(`${loginDateMonth+1}`, new Set<string>());
          }
          monthlyActiveUsers.get(`${loginDateMonth +1 }`)?.add(data.userId);
          loginDateMonth++;
        }
      }
    
      const monthlyActiveCount = new Map<string, number>();
      for (const [month, users] of monthlyActiveUsers) {
        monthlyActiveCount.set(month, users.size);
      }
    
      return monthlyActiveCount;
    }
  
  // Example usage
  const userdata: UserData[] = [
    { userId: "user1", loggedIn: new Date("2024-01-05"), loggedOut: new Date("2024-01-10") },
    { userId: "user2", loggedIn: new Date("2024-01-15"), loggedOut: new Date("2024-01-20") },
    { userId: "user5", loggedIn: new Date("2024-01-01"), loggedOut: new Date("2024-06-20") },
    { userId: "user3", loggedIn: new Date("2024-02-05"), loggedOut: new Date("2024-02-15") },
    { userId: "user4", loggedIn: new Date("2024-02-10"), loggedOut: new Date("2024-02-20") }
  ];
  
  const monthlyActiveUsers = getMonthlyActiveUsers(userdata);
  console.log(monthlyActiveUsers);