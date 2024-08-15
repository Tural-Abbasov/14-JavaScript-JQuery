
// Task One 



// $(document).ready(function() {
//     $('#addBtn').click(function() {
//         var task = $('#textInput').val();

//         $('#taskList').append(`
//             <li>
//                 <span class="taskText">${task}</span>
//                 <div>
//                     <button class="deleteBtn">✖</button>
//                     <button class="completeBtn">✔</button>
//                 </div>
//             </li>
//         `);

//         $('#textInput').val('');
//     });

//     $(document).on('click', '.deleteBtn', function() {
//         $(this).closest('li').remove();
//     });

//     $(document).on('click', '.completeBtn', function() {
//         $(this).closest('li').toggleClass('done');
//     });
// });



// Task two 



// let images= [
//     {category:"nature", name:"forest", source:"./assets/image/forest.jpg"},
//     {category:"nature", name:"mountain", source:"./assets/image/mountains.jpg"},
//     {category:"nature", name:"light", source:"./assets/image/lights.jpg"},
//     {category:"car", name:"retro", source:"./assets/image/retro.jpg"},
//     {category:"car", name:"fast", source:"./assets/image/fast.jpg"},
//     {category:"car", name:"classic", source:"./assets/image/classic.jpg"},
//     {category:"people", name:"girl", source:"./assets/image/girl.jpg"},
//     {category:"people", name:"man", source:"./assets/image/man.jpg"},
//     {category:"people", name:"woman", source:"./assets/image/woman.jpg"},
// ]


// function filterImages(category) {  
//     $('#gallery').empty();  
//     let filteredImages= images.filter(image=> category=== 'all' || image.category=== category);  
//     $.each(filteredImages, function(index, image) {  
//      let card= $('<div>').addClass('card');  
//      card.html(`  
//       <img src="${image.source}" alt="${image.name}">  
//       <div class="card-body">  
//         <p>${image.name.charAt(0).toUpperCase()+ image.name.slice(1)}</p>  
//         <p>Lorem ipsum dolor...</p>  
//       </div>  
//      `);  
//      $('#gallery').append(card);  
//     });  
//     $('p', '.textBox').removeClass('selected');  
//     $(`p[onclick="filterImages('${category}')"]`, '.textBox').addClass('selected');  
//   }  
    
//   filterImages('all');



// Task three 



// $(document).ready(function() {
//   var isEditMode= false;
//   var currentRow;

//   $("#editModal").hide();

//   $(".rowBtn").on("click", function() {
//     isEditMode= false;

//     $("#editForm")[0].reset();

//     $("#editModal").css("display", "flex");
//   });

//   $(".edit-icon").on("click", function() {
//     isEditMode= true;
//     currentRow= $(this).closest("tr");

//     $("#editName").val(currentRow.find("td:eq(1)").text());
//     $("#editSurname").val(currentRow.find("td:eq(2)").text());
//     $("#editAge").val(currentRow.find("td:eq(3)").text());

//     $("#editModal").css("display", "flex");
//   });

//   $(".remove-icon").on("click", function() {
//       $(this).closest("tr").remove();
//   });

//   $("#editForm").on("submit", function(event) {
//     event.preventDefault();

//     var name= $("#editName").val();
//     var surname= $("#editSurname").val();
//     var age= $("#editAge").val();

//     if (isEditMode) {

//     currentRow.find("td:eq(1)").text(name);
//     currentRow.find("td:eq(2)").text(surname);
//     currentRow.find("td:eq(3)").text(age);
//     }else {

//     var rowCount= $(".tableBox tbody tr").length+ 1;
//     var newRow= `
//               <tr>
//                   <td>${rowCount}</td>
//                   <td>${name}</td>
//                   <td>${surname}</td>
//                   <td>${age}</td>
//                   <td class="small">
//                       <i class="fa-solid fa-pen-to-square edit-icon"></i>
//                   </td>
//                   <td class="small">
//                       <i class="fa-solid fa-trash remove-icon"></i>
//                   </td>
//               </tr>
//           `;

//     $(".tableBox tbody").append(newRow);

//     $(".tableBox tbody tr:last-child .edit-icon").on("click", function() {
//       isEditMode = true;
//       currentRow = $(this).closest("tr");

//     $("#editName").val(name);
//     $("#editSurname").val(surname);
//     $("#editAge").val(age);

//     $("#editModal").css("display", "flex");
//     });

//     $(".tableBox tbody tr:last-child .remove-icon").on("click", function() {
//       $(this).closest("tr").remove();
//       });
//     }

//     $("#editForm")[0].reset();
//     $("#editModal").hide();
//   });

//   $(".closeBtn").on("click", function() {
//     $("#editModal").hide();
//   });

//   $(window).on("click", function(event) {
//     if ($(event.target).is("#editModal")) {
//       $("#editModal").hide();
//     }
//   });

//   $("#searchBar").on("input", function() {
//       var filter= $(this).val().toLowerCase();
//       $(".tableBox tbody tr").each(function() {
//           var name= $(this).find("td:eq(1)").text().toLowerCase();
//           var surname= $(this).find("td:eq(2)").text().toLowerCase();
//           var age= $(this).find("td:eq(3)").text().toLowerCase();

//           if (name.includes(filter) || surname.includes(filter) || age.includes(filter)) {
//               $(this).show();
//           } else {
//               $(this).hide();
//           }
//       });
//   });
// });



// Task four 



$(document).ready(function() {

    $("#openModal").click(function(e) {
        e.preventDefault();
        $(".modalBoxTwo").fadeIn();
        updateTotal();
    });
  
    $(".closeBtnTwo").click(function() {
        $(".modalBoxTwo").fadeOut();
    });
  
    $(".add-to-cart").click(function(e) {
        e.preventDefault();
        
        var productCard= $(this).closest('.productCard');
        var imgSrc= productCard.find('img').attr('src');
        var title= productCard.find('h2').text();
        var price= productCard.find('p').text().replace('$', '').trim(); 
        var priceNumber= parseFloat(price);
        
        var quantityElement= $(this).closest('.mainBoxThree').find('.quantity');
        var currentQuantity= parseInt(quantityElement.text());
        quantityElement.text(currentQuantity + 1);
        
        var existingItem= $(".cardList .cartItem").filter(function() {
          return $(this).find("h2").text()=== title;
        });
  
        if (existingItem.length > 0) {
            var quantityBox= existingItem.find(".quantityBox");
            var currentQuantityInList= parseInt(quantityBox.text());
            quantityBox.text(currentQuantityInList + 1);
        } else {
  
            var newItem= `
                <div class="cartItem">
                    <img src="${imgSrc}" alt="${title}" class="itemImg">
                    <div class="itemDetails">
                        <h2>${title}</h2>
                        <p>$${price}</p> <!-- $ işarəsi buraya əlavə edilir -->
                        <div class="quantityControl">
                            <button class="quantityBtn decrease">-</button>
                            <span class="quantityBox">1</span>
                            <button class="quantityBtn increase">+</button>
                            <button class="deleteBtn">
                                <i class="fa-solid fa-trash remove-icon"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            $(".cardList").append(newItem);
        }
        
        updateTotal();
    });
  
    $(document).on("click", ".quantityBtn.decrease", function() {
          var quantityBox= $(this).siblings(".quantityBox");
          var currentQuantity= parseInt(quantityBox.text());
          if (currentQuantity> 1) {
              quantityBox.text(currentQuantity- 1);
          }
  
      updateTotal();
      });
  
    $(document).on("click", ".quantityBtn.increase", function() {
          var quantityBox= $(this).siblings(".quantityBox");
          var currentQuantity= parseInt(quantityBox.text());
          quantityBox.text(currentQuantity+ 1);
  
      updateTotal();
    });
  
    $(document).on("click", ".deleteBtn", function() {
          $(this).closest(".cartItem").remove();
          updateTotal();
    });
  
    function updateTotal() {
        var total= 0;
        $(".cardList .cartItem").each(function() {
            var price= parseFloat($(this).find(".itemDetails p").text().replace('$', '').trim());
            var quantity= parseInt($(this).find(".quantityBox").text());
            total+= price* quantity;
        });
        
        var totalString= total.toFixed(2); 
        if (totalString.endsWith('.00')) {
            totalString= total.toFixed(0); 
        }
    
        $(".total span").text(`Total: $${totalString}`);
    }
    
});
  





















