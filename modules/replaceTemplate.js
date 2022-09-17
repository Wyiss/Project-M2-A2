module.exports = (htmlStr, user)=>{
    let output = htmlStr.replace(/{%NAME%}/g, user.customerName);
    output = output.replace(/{%PHONENUM%}/g, user.phoneNumber);
    output = output.replace(/{%ADDRESS%}/g, user.address);
    output = output.replace(/{%LOANAMOUNT%}/g, user.loanAmount);
    output = output.replace(/{%LOANTERMYEARS%}/g, user.loanTermYears)
    output = output.replace(/{%DESCRIPTION%}/g, user.description);
    output = output.replace(/{%ID%}/g, user.id);
    output = output.replace(/{%LOANTYPE%}/g, user.loanType);
    output = output.replace(/{%INTEREST%}/g, user.interest);
    output = output.replace(/{%TOTALAMOUNT%}/g, (user.loanAmount * user.interest * user.loanTermYears + user.loanAmount));
    return output;
}