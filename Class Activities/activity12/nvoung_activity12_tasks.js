
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnTask1').addEventListener('click',
        async () => {
           const r = await simulateAsyncTask(2000, "Task 1 is complete");
            displayResult(r);
        }

    );
    document.getElementById('btnTask2').addEventListener('click', 
        async () => {
       const r = await simulateAsyncTask(2000, "Task 2 is complete");
        displayResult(r);
    }

    );
    document.getElementById('btnTask3').addEventListener('click', 
        async () => {
        const r = await simulateAsyncTask(2000, "Task 3 is complete");
        displayResult(r);
    }

    );
    function simulateAsyncTask(delay, result) {
        return new Promise((resolve, reject) => {
         setTimeout(()=>{
            resolve(result);
         }, delay);   
        });
    }
    function displayResult(message) {
        const taskResultsDiv = document.getElementById('taskResults');
        taskResultsDiv.innerHTML += `<p>${message}</p>`;
    }
});