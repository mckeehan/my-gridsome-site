// ============================================
// Renders individual markdown files
// ============================================
<template>
  <Layout>
    <section class="py-5">
      <div class="container px-3">
        <h2 class="fw-bolder fs-5 mb-4">{{ $page.photo.image_title || $page.photo.image_name }}</h2>
        <div class="position-relative mb-5 mx-0 text-center">
          <g-image loading="lazy" class="img-fluid" :src="$page.photo.full_image_path"  :alt="$page.photo.image_title" />
        </div>
        <div v-if="$page.photo.image_caption" class="position-relative mb-5">{{ $page.photo.image_caption }}</div>

        <div class="row">
          <div class="col-lg-6">
          </div>
		  <div id='image-metadata' class="col-lg-6">
            Album: <g-link :to="$page.photo.album?.path">{{ $page.photo.album?.album_title }}</g-link><br/>
			<span>Creation Date: <span itemProp='dateCreated'>{{ $page.photo.creationDate }}</span><br/></span>
			<span>Modification Date: <span itemProp='dateModified'>{{ $page.photo.modificationDate }}</span><br/></span>
			<span>Camera: {{ $page.photo.make }} / {{ $page.photo.model }} <br/></span>
			<span>Lens: {{ $page.photo.lens }} <br/></span>
			<span>Aperture: f/{{ $page.photo.aperture }} <br/></span>
			<span>Focal Length: {{ $page.photo.focalLength }} mm<br/></span>
			<span>Exposure Time: {{ $page.photo.exposureTime }} <br/></span>
			<span>ISO: {{ $page.photo.sensitivity }} <br/></span>
			<span>MeteringMode: {{ $page.photo.meteringMode }} <br/></span>

            <div className="ms-3" v-if="$page.photo.photoTag">
              Find related photos:
              <div class="tags">
                <g-link 
                  v-for="tag in $page.photo.photoTag" 
                  :key="tag.id" 
                  :to="tag.path"
                  class="tag"
                >
                  {{ tag.name }}
                </g-link>
              </div>
            </div> 

		  </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  photo(id: $id) {
    id
    album_title
    image_name
    image_path
    image_title
    image_caption
    creationDate(format: "MMMM D, YYYY")
    modificationDate(format: "MMMM D, YYYY")
    make
    model
    lens
    aperture
    focalLength
    exposureTime
    sensitivity
    meteringMode
    latitudeNumber
    longitudeNumber
    path
    full_image_path
    album {
      id
      album_title
      path
    }
    photoTag {
      id
      path
      name
    }
  }
}
</page-query>

