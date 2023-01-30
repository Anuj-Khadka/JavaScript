let url = "https://kontests.net/api/v1/all";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    let contestCard = ``
    let contestImg = [
        "https://cdn.mos.cms.futurecdn.net/9QTpESGBXa32D29J77VR3d-1200-80.jpg",
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        "https://www.shutterstock.com/image-vector/kids-learning-coding-programming-online-260nw-1777292972.jpg",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        "https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA=",
        "https://img.freepik.com/premium-photo/programmer-coding-software-development-working-project-it_1423-2974.jpg?w=2000",
        "https://www.shutterstock.com/image-illustration/terabytes-binary-code-data-flying-260nw-2045393252.jpg",
        "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202012/MIT-Coding-Brain-01-press_0.jpg?itok=JKoUflf8",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        "https://st.depositphotos.com/10048732/59705/i/600/depositphotos_597059654-stock-photo-close-programmer-coding-programming-software.jpg",
        "https://media.istockphoto.com/id/1218017051/photo/profile-side-photo-of-concentrated-skilled-web-expert-afro-american-girl-sit-evening-desk-use.jpg?s=612x612&w=0&k=20&c=dQJAXyU20JuCfY594PIBgl3RgMHnDyEWC9VF6vOFBkg=",
        "https://jpeg.org/images/jpegai-home.jpg",
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ll1nu9qk7ho2r5xsp5hb.jpg",
        "https://edulyst.learningoxygen.com/wp-content/uploads/2022/12/program_071222125736.jpg",
        "https://www.cambridgespark.com/hubfs/shutterstock_753780223.jpg",
        "https://thumbs.dreamstime.com/b/developing-programmer-team-development-website-design-coding-technologies-working-software-company-office-140335451.jpg",
        "https://thumbs.dreamstime.com/b/developing-programmer-team-development-website-design-coding-technologies-working-software-company-office-140335451.jpg",
        "https://fsa2-assets.imgix.net/assets/UNIV/OKU/coding/coding-image-1.jpg?auto=compress%2Cformat&crop=focalpoint&domain=fsa2-assets.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=681&ixlib=php-3.3.0&w=1200",
        "https://s2.research.com/wp-content/uploads/2020/12/24112820/coding-student-1-1200x600.jpg",
        "https://ogkcreative.com/wp-content/uploads/2021/04/coding-responsive-websites.jpg",
        "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-p-kung-2519-lyj0811-1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ea3512942cf04e57c5c606bba9326243",
        "https://media.istockphoto.com/id/1255928059/photo/young-caucasian-female-programmer-in-glasses-writes-program-code-on-a-laptop.jpg?s=612x612&w=0&k=20&c=TltdnbJUzCuUD-Mx9FgzYCHk-k49ejpqQpnZvWadXnM="
    ]
    for(item in res){
        console.log(res[item])
        randContestImg = contestImg[Math.floor(Math.random()*contestImg.length)];
        ele = res[item]
        contestCard += `
        <div class="card" style="width: 25rem;"> 
        <img src="${randContestImg}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${ele.name}</h5>
          <p class="card-text">Organizer: ${ele.site}</p>
          <p class="card-text">Starts at: ${ele.start_time}</p>
          <p class="card-text">Ends at: ${ele.end_time}</p>
          <a href="${ele.url}" class="btn btn-primary">Visit Site</a>
        </div>
      </div>
        `
    }
    
    let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = contestCard;
  });
