import React from "react";
const Posts = () => {
  return (
    <div>
      <div className="Post__app">
        <div className="container Post__container col-8">
        
          <div className="row">
            <div className=" Post__header">
              <img
                src="https://www.chennaisuperkings.com/CSK_NEW/images/logo.png"
                alt="Avatar"
                className="Post__avatar"
              />
              <h6 className="Post__username">CHENNAI SUPER KINGS</h6>
            </div>

            <img
              className="Post__image"
              src="https://media.gettyimages.com/photos/dhoni-of-the-chennai-super-kings-hits-out-during-the-indian-premier-picture-id1148242503?k=20&m=1148242503&s=612x612&w=0&h=WroAJfFIr_AXEKddIGVWihdJYihWs04cKC7w4EyVdxM="
              alt=""
            />
            <p className="Post__comment mt-1  ">
              <b>CHENNAI SUPER KINGS : </b>Welcome To Den Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nam veritatis ullam, minima perspiciatis nihil reiciendis expedita eos magni laboriosam aliquid beatae eum at repudiandae? Aut ullam error minus ut!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
