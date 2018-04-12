$('.media-gallery').owlCarousel({
  // nav: true,
  //touchDrag: false,
  loop: true,
  rewind: false,
  pullDrag: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,

  items: 5,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,

    },
    600: {
      items: 3,

    },
    1000: {
      items: 5,

    }

  }
});

$('.partners-list').owlCarousel({
  // nav: true,
  //touchDrag: false,
  loop: true,
  rewind: false,
  pullDrag: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,

  items: 5,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,

    },
    600: {
      items: 3,

    },
    1000: {
      items: 5,

    }

  }
});

$('.blog-post-col').owlCarousel({
  //nav: true,
  //touchDrag: false,
  loop: true,
  rewind: false,
  pullDrag: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,

  items: 4,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,

    },
    600: {
      items: 3,

    },
    1000: {
      items: 4,

    }

  }
});

$('.features-list').owlCarousel({
  nav: true,
  //touchDrag: false,
  pullDrag: false,
  dots: true,

  items: 3,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,

    },
    600: {
      items: 2,

    },
    1000: {
      items: 3,

    }

  }
});
