const batteryBatches = [3, 4, 5, 3, 4, 2, 5, 2, 3]; 

const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);

console.log(totalBatteries); 
