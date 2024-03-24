function calculateNetSalary(basicSalary, benefits) {
    const taxRates = {
    
    };

    const nhifRates = {
        
    };

    const nssfRates = {
    
    };

    const grossSalary = basicSalary + benefits;

    let payee = 0;
   

    let nhifDeductions = 0;


    let nssfDeductions = 0;
    

    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    return {
        grossSalary,
        payee,
        nhifDeductions,
        nssfDeductions,
        netSalary
    };
}

const basicSalary = parseFloat(prompt("Enter the basic salary:"));
const benefits = parseFloat(prompt("Enter the benefits:"));

if (!isNaN(basicSalary) && !isNaN(benefits)) {
    const result = calculateNetSalary(basicSalary, benefits);
    console.log("Gross Salary:", result.grossSalary);
    console.log("Payee:", result.payee);
    console.log("NHIF Deductions:", result.nhifDeductions);
    console.log("NSSF Deductions:", result.nssfDeductions);
    console.log("Net Salary:", result.netSalary);
} else {
    console.log("Invalid input. Please enter valid numbers.");
}
