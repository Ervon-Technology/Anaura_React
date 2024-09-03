import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <p className="mb-4 fs-1">About Us</p>

            <div
              className="nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <div
                className="fs-4 my-3 pb-3 ps-0"
                style={{ borderBottom: '2px dotted rgb(105, 105, 105)' }}
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="div"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Anaura
              </div>
              <div
                className="fs-4 my-3 pb-3 ps-0"
                style={{ borderBottom: '2px dotted rgb(105, 105, 105)' }}
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="div"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Mission
              </div>
              <div
                className="fs-4 my-3 pb-3 ps-0"
                style={{ borderBottom: '2px dotted rgb(105, 105, 105)' }}
                id="v-pills-disabled-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-disabled"
                type="div"
                role="tab"
                aria-controls="v-pills-disabled"
                aria-selected="false"
              >
                Vision
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-12 mt-5 mt-lg-0">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
                tabIndex="0"
              >
                <h1 className="mb-4 fs-1">Recruitment for Creative People</h1>
                <p className="fs-5 lh-base">
                  At Anaura, we blend sustainability with style by offering
                  premium, eco-friendly fabrics made from recycled materials. As
                  a part of Rudra Ecovation, one of India's largest PET bottle
                  recyclers, our mission is to replace unsustainable fabrics
                  with beautiful, responsible alternatives. Our innovative
                  processes create soft, breathable textiles that are both
                  luxurious and environmentally conscious. Anaura is committed
                  to conserving resources, reducing waste, and contributing to
                  a sustainable future, all while providing high-quality
                  products for the fashion industry.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
                tabIndex="0"
              >
                <p className="fs-5 lh-base">
                  Anaura is committed to promoting sustainability through
                  innovative textile solutions by recycling PET bottles into
                  high-quality fabrics. Their mission is to reduce environmental
                  impact by creating eco-friendly, stylish, and durable products
                  that contribute to a circular economy.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-disabled"
                role="tabpanel"
                aria-labelledby="v-pills-disabled-tab"
                tabIndex="0"
              >
                <p className="fs-5 lh-base">
                  Anaura envisions a world where sustainable practices are at
                  the forefront of the fashion industry. They strive to lead by
                  example, inspiring others to adopt eco-conscious approaches
                  and creating a future where waste is minimized, and natural
                  resources are preserved for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
