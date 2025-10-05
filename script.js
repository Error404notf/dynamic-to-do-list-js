// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    
  // Step 2: Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  
  // Step 3: Create the addTask Function
  function addTask() {
      // Retrieve and trim the input value
      const taskText = taskInput.value.trim();
      
      // Check if taskText is empty
      if (taskText === "") {
          alert("Please enter a task.");
          return;
      }
      
      // Step 4: Task Creation and Removal
      // Create new li element and set its text content
      const li = document.createElement('li');
      li.textContent = taskText;
      
      // Create remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";
      removeBtn.className = 'remove-btn';
      
      // Assign onclick event to remove button
      removeBtn.onclick = function() {
          taskList.removeChild(li);
      };
      
      // Append remove button to li, then li to taskList
      li.appendChild(removeBtn);
      taskList.appendChild(li);
      
      // Clear the input field
      taskInput.value = "";
  }
  
  // Step 5: Attach Event Listeners
  // Add click event listener to Add Task button
  addButton.addEventListener('click', addTask);
  
  // Add keypress event listener to input field for Enter key
  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});