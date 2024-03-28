////LOGIC////////////////////////////
// For checking if each trip is valid or not:
// Each pick-up point is picked up exactly once.
// Each drop point is dropped off exactly once.
// Each pick-up and drop point pair is covered in the trips.



interface Shipment {
    pickups: string[]; // Array of pickup points
    dropoffs: string[]; // Array of drop-off points
  }
  
  interface Trip {
    from: string; // Start point of the trip
    to: string; // End point of the trip
  }
  
  function validateTrips(shipment: Shipment, trips: Trip[]): boolean {
    const { pickups, dropoffs } = shipment;
  
    // Create a copy of pickups and dropoffs to keep track of unvisited points
    const unvisitedPickups = new Set(pickups);
    const unvisitedDropoffs = new Set(dropoffs);
  
    // Iterate through each trip
    for (const trip of trips) {
      const { from, to } = trip;
  
      // Check if the trip is valid
      if (
        (!unvisitedPickups.has(from) && from !== 'W') ||
        (!unvisitedDropoffs.has(to) && to !== 'W') ||
        (from !== 'W' && to !== 'W' && from === to) // Check if from and to are same and not a warehouse
      ) {
        return false; // Invalid trip
      }
  
      // Remove visited pickup and dropoff points
      if (from !== 'W') unvisitedPickups.delete(from);
      if (to !== 'W') unvisitedDropoffs.delete(to);
    }
  
    // Check if all pickups and dropoffs are covered
    return unvisitedPickups.size === 0 && unvisitedDropoffs.size === 0;
  }
  
  // Example usage
  const shipment: Shipment = {
    pickups: ['A', 'B'],
    dropoffs: ['C', 'D']
  };
  
  const trips1: Trip[] = [
    { from: 'A', to: 'W' },
    { from: 'B', to: 'W' },
    { from: 'W', to: 'C' },
    { from: 'W', to: 'D' }
  ];
  
  const trips2: Trip[] = [
    { from: 'A', to: 'W1' },
    { from: 'B', to: 'W2' },
    { from: 'W3', to: 'C' },
    { from: 'W4', to: 'D' }
  ];
  
  console.log(validateTrips(shipment, trips1)); // Output: true (Valid set of trips)
  console.log(validateTrips(shipment, trips2)); // Output: false (Invalid set of trips)
  