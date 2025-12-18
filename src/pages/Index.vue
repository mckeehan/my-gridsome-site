<template>
  <Layout>
    <header class="bg-dark">
      <div class="container px-5">
        <div class="row gx-5 align-items-center justify-content-center">
          <div class="col-lg-8 col-xl-7 col-xxl-6">
            <div class="my-5 text-center text-xl-start">
              <h1 class="display-5 fw-bolder text-white mb-2 text-center">William McKeehan</h1>
              <p class="display-5 fw-bolder text-white mb-2 text-center">KI4HDU</p>
              <p class="lead fw-normal text-white-50 mb-4">
                This is my personal website. In it I have placed information about my interest and hobbies that others may find interesting.
              </p>
              <span class="text-center">
                <div>
                  <a id="follow-button" class="rounded-pill p-2 twitter-button text-white text-decoration-none" title="Follow @mckeehan on Twitter" href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.ki4hdu.com%2F&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Emckeehan&amp;region=follow_link&amp;screen_name=mckeehan">
                   <span class="text-light"><FaTwitter/> Follow <b>@mckeehan</b></span>
                 </a>
                </div>
              </span>
            </div>
          </div>
          <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><g-image class="img-fluid rounded-3 my-5" src="~/assets/wm-2012-600x400.png" alt="William McKeehaan Headshot" /></div>
        </div>
      </div>
    </header>

            <section class="bg-light py-1">
                <div class="container px-5 my-5">
                    <div class="text-center mb-5">
                        <h2 class="fw-bolder">My Interests</h2>
                    </div>
                    <div class="row gx-5">
                        <div class="col-lg-6">
                            <div class="position-relative mb-5 text-center">
                                <img loading="lazy" class="img-fluid rounded-3 mb-3" src="https://ki4hdu.com/_resources/amateur-radio-cover.jpg" alt="amateur radio" />
                                <g-link class="h3 fw-bolder text-decoration-none link-dark stretched-link" to="/notes/amateur-radio">Amateur Radio</g-link>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="position-relative mb-5 text-center">
                                <img loading="lazy" class="img-fluid rounded-3 mb-3" src="https://ki4hdu.com/_resources/off-road-cover.jpg" alt="off-road" />
                                <g-link class="h3 fw-bolder text-decoration-none link-dark stretched-link" to="/notes/off-road">Off-Road</g-link>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="position-relative mb-5 text-center">
                                <img loading="lazy" class="img-fluid rounded-3 mb-3" src="https://ki4hdu.com/pics/thumbnails/Motorcycle/2013-10-20%20Over%20the%20Mountains%20to%20the%20Blue%20Ridge/DSC_3724-1024x768.JPG" alt="Smoky Mountain Fall" />
                                <g-link class="h3 fw-bolder text-decoration-none link-dark stretched-link" to="/photos">Photos</g-link>
                            </div>
                        </div>                                                                                                                                                                                                             <div class="col-lg-6">
                            <div class="position-relative mb-5 text-center">
                                <img loading="lazy" class="img-fluid rounded-3 mb-3" src="https://ki4hdu.com/_resources/gaiascreenshot.png" alt="maps" />
                                <g-link class="h3 fw-bolder text-decoration-none link-dark stretched-link" to="/maps">Maps</g-link>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="position-relative mb-5 text-center">
                                <img loading="lazy" class="img-fluid rounded-3 mb-3" src="https://ki4hdu.com/_resources/todo.jpg" alt="todo" />
                                <g-link class="h3 fw-bolder text-decoration-none link-dark stretched-link" to="/notes/productivity">Productivity</g-link>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="position-relative mb-5 text-center">
                                <img loading="lazy" class="img-fluid rounded-3 mb-3" src="https://ki4hdu.com/_resources/clipart_tipsandtricks.jpg" alt="tips and tricks" />
                                <g-link class="h3 fw-bolder text-decoration-none link-dark stretched-link" to="/notes/tips-and-tricks">Tips & Tricks</g-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'KI4HDU Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
