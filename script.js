const btn = document.querySelectorAll('.btn')


btn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const dropdownContent = btn.nextElementSibling
        dropdownContent.classList.toggle('hidden')

        const container = dropdownContent.parentElement
        container.classList.toggle('open')
    })
})

document.addEventListener("click",(event)=>{
    const openDropDowns = document.querySelectorAll('.open')
    console.log(openDropDowns)
    // Now loop through each open dropdown and check if click was outside
    openDropDowns.forEach(dropdown => {
    if(!dropdown.contains(event.target)){
        // dropdown is the container (.dropdown-container)
        // Find the dropdown content inside THIS container
        const dropdownContent = dropdown.querySelector('.menu-options');
        
        dropdown.classList.remove('open');
        dropdownContent.classList.add('hidden');
    }
})
    
})