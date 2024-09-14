import React, { useState, useEffect } from 'react';

const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState("anaura");
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to switch between mobile/tablet and desktop layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <p className="mb-4 fs-1">About Us</p>

            {/* Navigation - Tabs */}
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <div
                className={`fs-4 my-3 pb-3 ps-0 ${activeTab === "anaura" ? 'text-primary' : ''}`}
                style={{ borderBottom: '2px dotted rgb(105, 105, 105)', cursor: "pointer" }}
                id="v-pills-home-tab"
                onClick={() => handleTabClick("anaura")}
              >
                Anaura
              </div>

              {/* Show Anaura content under Anaura title in mobile/tablet */}
              {isMobile && activeTab === "anaura" && (
                <div className="fs-5 lh-base mb-4">
                  At Anaura, we blend sustainability with style by offering premium, eco-friendly fabrics made from recycled materials.
                  As a part of Rudra Ecovation, one of India's largest PET bottle recyclers, our mission is to replace unsustainable fabrics
                  with beautiful, responsible alternatives. Our innovative processes create soft, breathable textiles that are both luxurious
                  and environmentally conscious. Anaura is committed to conserving resources, reducing waste, and contributing to a sustainable future,
                  all while providing high-quality products for the fashion industry.
                </div>
              )}

              <div
                className={`fs-4 my-3 pb-3 ps-0 ${activeTab === "mission" ? 'text-primary' : ''}`}
                style={{ borderBottom: '2px dotted rgb(105, 105, 105)', cursor: "pointer" }}
                id="v-pills-profile-tab"
                onClick={() => handleTabClick("mission")}
              >
                Mission
              </div>

              {/* Show Mission content under Mission title in mobile/tablet */}
              {isMobile && activeTab === "mission" && (
                <div className="fs-5 lh-base mb-4">
                  Anaura is committed to promoting sustainability through innovative textile solutions by recycling PET bottles into high-quality fabrics.
                  Their mission is to reduce environmental impact by creating eco-friendly, stylish, and durable products that contribute to a circular economy.
                </div>
              )}

              <div
                className={`fs-4 my-3 pb-3 ps-0 ${activeTab === "vision" ? 'text-primary' : ''}`}
                style={{ borderBottom: '2px dotted rgb(105, 105, 105)', cursor: "pointer" }}
                id="v-pills-disabled-tab"
                onClick={() => handleTabClick("vision")}
              >
                Vision
              </div>

              {/* Show Vision content under Vision title in mobile/tablet */}
              {isMobile && activeTab === "vision" && (
                <div className="fs-5 lh-base mb-4">
                  Anaura envisions a world where sustainable practices are at the forefront of the fashion industry.
                  They strive to lead by example, inspiring others to adopt eco-conscious approaches and creating a future where waste is minimized,
                  and natural resources are preserved for generations to come.
                </div>
              )}
            </div>
          </div>

          {/* For desktop/larger screens, show the content in the main right section */}
          {!isMobile && (
            <div className="col-lg-8 col-md-12 mt-5 mt-lg-0">
              <div className="tab-content">
                {/* Anaura Section */}
                {activeTab === "anaura" && (
                  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <h1 className="mb-4 fs-1">Recruitment for Creative People</h1>
                    <p className="fs-5 lh-base">
                      At Anaura, we blend sustainability with style by offering premium, eco-friendly fabrics made from recycled materials.
                      As a part of Rudra Ecovation, one of India's largest PET bottle recyclers, our mission is to replace unsustainable fabrics
                      with beautiful, responsible alternatives. Our innovative processes create soft, breathable textiles that are both luxurious
                      and environmentally conscious. Anaura is committed to conserving resources, reducing waste, and contributing to a sustainable future,
                      all while providing high-quality products for the fashion industry.
                    </p>
                  </div>
                )}

                {/* Mission Section */}
                {activeTab === "mission" && (
                  <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <h1 className="mb-4 fs-1">Our Mission</h1>
                    <p className="fs-5 lh-base">
                      Anaura is committed to promoting sustainability through innovative textile solutions by recycling PET bottles into high-quality fabrics.
                      Their mission is to reduce environmental impact by creating eco-friendly, stylish, and durable products that contribute to a circular economy.
                    </p>
                  </div>
                )}

                {/* Vision Section */}
                {activeTab === "vision" && (
                  <div className="tab-pane fade show active" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab">
                    <h1 className="mb-4 fs-1">Our Vision</h1>
                    <p className="fs-5 lh-base">
                      Anaura envisions a world where sustainable practices are at the forefront of the fashion industry.
                      They strive to lead by example, inspiring others to adopt eco-conscious approaches and creating a future where waste is minimized,
                      and natural resources are preserved for generations to come.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
