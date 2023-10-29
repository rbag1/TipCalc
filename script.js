document.addEventListener('DOMContentLoaded', function () {
    const tipCalculator = document.getElementById('tipCalculator');
    tipCalculator.addEventListener('input', calculateTip);

    function calculateTip() {
        const billTotal = parseFloat(document.getElementById('billTotal').value);
        const tipPercentage = parseInt(document.getElementById('tip').value);
        const tipAmount = (billTotal * tipPercentage) / 100;
        const totalBillWithTip = billTotal + tipAmount;

        document.getElementById('tipPercentage').value = tipPercentage + '%';
        document.getElementById('tipAmount').value = tipAmount.toFixed(2);
        document.getElementById('totalBillWithTip').value = totalBillWithTip.toFixed(2);
    }
});
