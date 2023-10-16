$(document).ready(function () {
    let tags = [];

    // function countTags() {
    //     $("input").focus();
    // }

    function createTag() {
        $("ul li").remove();
        tags.slice().reverse().forEach(tag => {
            let liTag = `<li>${tag} <i class="fa-solid fa-xmark"></i></li>`;
            $("ul").prepend(liTag);
        });
        // countTags();
    }

    function removeTag(tag) {
        let index = tags.indexOf(tag);
        // if (index !== -1) {
            tags.splice(index, 1);
        // }
        createTag();
    }

    function addTag(e) {
        if (e.key === "Enter" || e.key === ",") {
            let tagInput = e.target.value.trim();
            let tagArray = tagInput.split(',').map(tag => tag.trim()).filter(tag => tag !== ''); // Split, trim, and filter empty tags
            tagArray.forEach(tag => {
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            });
            createTag();
            e.target.value = "";
            e.target.placeholder = "";
        }
    }

    $("ul").on("click", ".fa-solid", function() {
        let tagToRemove = $(this).closest("li").text().trim();
        removeTag(tagToRemove);
    });

    $("#searchingTags").on("keyup", addTag);

    $(".removeButton").on("click", () => {
        tags.length = 0;
        $("ul li").remove();
        // countTags();
        button.placeholder = "Search Job by Title";
        // window.location.reload();
    });

    createTag();

    //adding jobs------------------------------------

    $(".addJobButton").click(function() {
        $("#jobModal").css("display", "block");
    });

    // Close the modal when the close button or outside the modal is clicked
    $(".close, .modal").click(function(e) {
        if ($(e.target).is(".modal") || $(e.target).is(".close")) {
            $("#jobModal").css("display", "none");
        }
    });

    // Handle form submission
    $("#jobForm").submit(function(e) {
        e.preventDefault();

        // Get values from the form
        var company = $("#company").val();
        var position = $("#position").val();
        var role = $("#role").val();
        var level = $("#level").val();
        var postedAt = $("#postedAt").val();
        var contract = $("#contract").val();
        var location = $("#location").val();
        var languagesInput = $("#languages").val();
        var toolsInput = $("#tools").val();
        var logo = "./images/photosnap.svg";
        

        var languages = languagesInput.split(',').map(function(language) {
            return language.trim();
        });

        var tools = toolsInput.split(',').map(function(tool) {
            return tool.trim();
        });
        

        // Create an object to store the job data
        var jobData = {
            company: company,
            logo: logo,
            position: position,
            role: role,
            level: level,
            postedAt: postedAt,
            contract: contract,
            location: location,
            languages: languages,
            tools: tools

            // Add other fields as needed
        };

        

        // Display the object in the console (for demonstration purposes)
        console.log(jobData);
        
        // Close the modal
        $("#jobModal").css("display", "none");

        // Clear form fields
        $("#company").val("");
        $("#position").val("");

        Display(jobData);
    });



    function Display(obj){
        // Create a "job" div for each object
        var jobDiv = $('<div class="job"></div>');
        var jobContentDiv = $('<div class="jobContent"></div>');
    
        var pictureElement = $('<img class="picture" src="' + obj.logo + '">');
    
        var companyNameTimeDiv = $('<div class="companyNameTime"></div>');
        var companyDiv = $('<div class="company"></div>');
        var companyH5 = $('<h5>' + obj.company + '</h5>');
    
        

        var newDiv = obj.new ? '<div class="new">NEW!</div>' : '';
        var featuredDiv = obj.featured ? '<div class="featured">FEATURED</div>' : '';
    
        var positionDiv = $('<div class="position"></div>');
        var positionH3 = $('<h3>' + obj.position + '</h3>');
    
        var postContractLocationDiv = $('<div class="postContractLocation"></div>');
        var postedH6 = $('<h6>' + obj.postedAt + "." + '</h6>');
        var contractH6 = $('<h6>' + obj.contract + "." + '</h6>');
        var locationH6 = $('<h6>' + obj.location + "." + '</h6>');
    
        var languagesToolsDiv = $('<div class="languagesTools"></div>');
        var languagesDiv = $('<div class="languages"></div>');
        var ToolsDiv = $('<div class="tools"></div>');

        //Adding Span Elements
    
        $.each(obj.languages, function(index, language) {
            var languageSpan = $('<span>' + language + '</span>');
            languagesDiv.append(languageSpan);
        });
    
        $.each(obj.tools, function(index, tools) {
            var toolsSpan = $('<span>' + tools + '</span>');
            ToolsDiv.append(toolsSpan);
        });
        var roleDiv = $('<div class="role"></div>');
        var roleSpan = $('<span>' + obj.role + '</span>');

        var levelDiv = $('<div class="level"></div>');
        var levelSpan = $('<span>' + obj.level + '</span>');


        /*Delete Button */

        var deleteButton = $('<button class="deleteButton">Delete</button>');
    
        jobContentDiv.append(pictureElement);
        jobContentDiv.append(companyNameTimeDiv);
        companyNameTimeDiv.append(companyDiv);
        companyDiv.append(companyH5);
        companyDiv.append(newDiv);
        companyDiv.append(featuredDiv);
        companyNameTimeDiv.append(positionDiv);
        positionDiv.append(positionH3);
        companyNameTimeDiv.append(postContractLocationDiv);
        postContractLocationDiv.append(postedH6);
        postContractLocationDiv.append(contractH6);
        postContractLocationDiv.append(locationH6);
        jobContentDiv.append(languagesToolsDiv);
        languagesToolsDiv.append(roleDiv);
        roleDiv.append(roleSpan);
        languagesToolsDiv.append(levelDiv);
        roleDiv.append(levelSpan);
        languagesToolsDiv.append(languagesDiv);
        languagesToolsDiv.append(ToolsDiv);
        
        // Add a click event listener to the delete button
        deleteButton.click(function () {
            // Remove the job item from the frontend
            jobDiv.remove();
        });

        // Append the delete button to the job item
        jobContentDiv.append(deleteButton);


        jobDiv.append(jobContentDiv);
        jobDiv.data("tags", obj.languages.concat(obj.tools).concat(obj.role).concat(obj.level).join(', '));
    
        $('.allJobs').append(jobDiv);
       
    }   


  /*Fetching Data from data.json*/
  $.getJSON('data.json', function(data) {
    // 'data' variable contains the JSON data as an array of objects
    // You can access and manipulate the data here

    // Store the data in an array
    // var dataArray = [];

    // Iterate through each object in the JSON data
    // $.each(data, function(index, obj) {
    //   // Push each object to the dataArray
    //   dataArray.push(obj);
    // });

    // // Print the dataArray to the console
    // console.log(dataArray);

    // // You can also display the data in the #output div if needed
    // $('#output').html(JSON.stringify(dataArray, null, 2));

    // var allJobsContainer = $('<div class="allJobs"></div>');


    $.each(data, function(index, obj) {
        Display(obj)
     });
    // Append the container with all jobs to the #output div
    // $('#output').append(allJobsContainer);
    //$('#allJobs').append(jobDiv);
  });
function filterJobs() {
    const selectedTags = tags.map(tag => tag.toLowerCase());
    $(".job").each(function () {
        const jobTags = $(this).data("tags").split(',').map(tag => tag.trim().toLowerCase());
        if (selectedTags.every(tag => jobTags.includes(tag))) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}
/* Searchin Tags Event Listener */
$("#searchingTags").on("keyup", function (e) {
    if (e.key === "Enter" || e.key === ",") {
        let tagInput = e.target.value.trim();
        let tagArray = tagInput.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
        tagArray.forEach(tag => {
            if (!tags.includes(tag)) {
                tags.push(tag);
            }
        });
        createTag();
        e.target.value = "";
        e.target.placeholder = "";
        filterJobs();
    }
});

/*  Tags Removal Event Listener */
$("ul").on("click", ".fa-solid", function () {
    let tagToRemove = $(this).closest("li").text().trim();
    removeTag(tagToRemove);
    filterJobs();
});

$(".removeButton").on("click", () => {
    tags.length = 0;
    $("ul li").remove();
    filterJobs();
});
});