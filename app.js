//TODO list app (my answer):
// const todoList = [];

// while (true) {
//     let task = prompt("What would you like to do?");
//     if (task === "quit") {
//         console.log("Ok, you quit.");
//         break;
//     } else if (task === "new") {
//         let newTodo = prompt("Enter new todo:");
//         todoList.push(newTodo);
//         console.log(`${newTodo} added to the list`);

//     } else if (task === "list") {
//         for (let i = 0; i < todoList.length; i++) {
//             console.log(`${i}: ${todoList[i]}`)
//         }
//     } else if (task === "delete") {
//         let deleteNumber = parseInt(prompt("What item do you want to delete?"));
//         todoList.splice(deleteNumber, 1);
//         console.log(`item ${deleteNumber} successfully deleted.`)
//     }
// }

//My version with alerts:
const todoList = [];

while (true) {
    let task = prompt("What would you like to do?");
    if (task === "quit") {
        alert("Ok, you quit.");
        break;
    } else if (task === "new") {
        let newTodo = prompt("Enter new todo:");
        todoList.push(newTodo);
        alert(`${newTodo} added to the list`);

    } else if (task === "list") {
        for (let i = 0; i < todoList.length; i++) {
            alert(`${i}: ${todoList[i]}`);
        }
    } else if (task === "delete") {
        let deleteNumber = parseInt(prompt("What item do you want to delete?"));
        todoList.splice(deleteNumber, 1);
        alert(`item ${deleteNumber} successfully deleted.`)
    }
}



// TODOlist app: Colt's resolution:
// const todos = [];
// let input = prompt("What would you like to do?");
// while (input !== "quit" && input !== "q") {
//     if (input === "list") {
//         console.log("*************");
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log("*************");
//     } else if (input === "new") {
//         const newTodo = prompt("Ok, what is the new todo?");
//         todos.push(newTodo);
//         console.log(`${newTodo} added to the list!`);
//     } else if (input === "delete") {
//         const index = parseInt(prompt("Ok, enter an index to delete:"));
//         if (!Number.isNaN(index)) {
//             const deleted = todos.splice(index, 1);
//             console.log(`OK, deleted ${deleted[0]}.`)
//         } else {
//             console.log("Unknown index")
//             //This if is only to check if the index is really valid, because any string would be converted to a number and could delete unwanted items.
//         }
//     }
//     input = prompt("What would you like to do?")
// }
// console.log("OK, YOU QUIT THE APP.");