new Splide('#big-image', {
  type: 'loop',
  autoplay: true
}).mount();

new Splide('#kategori-pilihan', {
  type: 'loop',
  perPage: 4,
  perMove: 3,
  autoHeight: true,
  pagination: false,
  gap: 15,
  breakpoints: {
		640: {
			perPage: 2,
      perMove: 1
		},
	}
}).mount()

new Splide('#menus', {
  perPage: 7,
  gap: 10,
  perMove: 5,
  autoWidth: true,
  pagination: false,
  padding: {
    right: '4rem'
  },
  breakpoints: {
		640: {
			perPage: 3,
      perMove: 1
		},
	}
}).mount()

new Splide('#produk-cod', {
  perPage: 6,
  perMove: 6,
  gap: 10,
  pagination: false,
  breakpoints: {
		640: {
			perPage: 2,
      perMove: 1
		},
	}
}).mount()

new Splide('#elektronik-pilihan', {
  perPage: 6,
  perMove: 6,
  gap: 10,
  pagination: false,
  breakpoints: {
		640: {
			perPage: 2,
      perMove: 1
		},
	}
}).mount()

new Splide('#menus-foryou', {
  perPage: 5,
  height: '5rem',
  gap: 10,
  perMove: 2,
  pagination: false,
  breakpoints: {
		640: {
			perPage: 2,
      perMove: 1,
      height: '4rem',
		},
	}
}).mount()

new Splide('#produk_toko', {
  perPage: 5,
  autoWidth: true,
  perMove: 2,
  pagination: false,
  breakpoints: {
		640: {
			perPage: 3,
      perMove: 1
		},
	}
}).mount()
