// get all the buttons on the page
const btn = document.querySelectorAll('.btn')

// add click event listener to each dropdown button with a loop
btn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        //find the dropdown menu content (next element after the button)
        const dropdownContent = btn.nextElementSibling
        // toggle visibility of the dropdown content
        dropdownContent.classList.toggle('hidden')

        // find the container and mark it as open/closed for tracking
        const container = dropdownContent.parentElement
        container.classList.toggle('open')
    })
})


// listen for clicks anywhere on the page to handle "click outside to close" functionality
document.addEventListener("click",(event)=>{
    // find all currently open dropdowns
    const openDropDowns = document.querySelectorAll('.open')

    // Now loop through each open dropdown and check if click was outside
    openDropDowns.forEach(dropdown => {
        //if the click was outside this dropdown, close it
    if(!dropdown.contains(event.target)){
        console.log(dropdown)
        console.log(event.target)
       // find the menu content inside this specific dropdown 
        const dropdownContent = dropdown.querySelector('.menu-options');
        
        //close the dropdown by removing open state and hiding content 
        dropdown.classList.remove('open');
        dropdownContent.classList.add('hidden');
    }
})
    
})