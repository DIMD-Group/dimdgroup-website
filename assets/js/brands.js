const brandImages = [
    // Food brands first
    'assets/images/brands/Gullon.jpg',
    'assets/images/brands/Ulker.png',
    'assets/images/brands/Bifa.png',
    'assets/images/brands/Vinut.png',
    'assets/images/brands/Thandaa.png',
    'assets/images/brands/Mini Joose.png',
    'assets/images/brands/Simonetto.png',
    'assets/images/brands/Doriva.png',
    'assets/images/brands/Refresh.png',
    'assets/images/brands/Bakemate.png',
    'assets/images/brands/Biskrem.png',
    'assets/images/brands/Fiesta.png',
    'assets/images/brands/Food Life.png',
    'assets/images/brands/Futuresun.png',
    'assets/images/brands/Lactimoza.png',
    'assets/images/brands/Milano.png',
    'assets/images/brands/Mima.png',
    'assets/images/brands/Nutro.png',
    'assets/images/brands/Pushti.png',
    'assets/images/brands/Shakanganj.png',
    'assets/images/brands/Sunset.png',
    'assets/images/brands/Doriva Troffino.png',
    'assets/images/brands/Shakarganj.png',
    'assets/images/brands/Gulpy.png',
    'assets/images/brands/Cory.png',
    'assets/images/brands/Deli.png',
    
    // Then Ingco
    'assets/images/brands/Ingco.png',
    'assets/images/brands/Decakila.png',
    
    // Then all other non-food brands
    'assets/images/brands/Dream logo top wing powerful beauty.png',
 'assets/images/brands/Daybyday.png',
   
    'assets/images/brands/Daybydaymen.png',
    'assets/images/brands/Babymed.png',
    'assets/images/brands/Vip EAU DE PARAFUM.png',
    'assets/images/brands/Miss.png',
 
    'assets/images/brands/Belair.png',
    'assets/images/brands/Aqualis.png',
    'assets/images/brands/Dermaskin.png',
    'assets/images/brands/Fres.png',
    'assets/images/brands/Aqualis 2.png',
    'assets/images/brands/Hydralux.png',
    'assets/images/brands/Stars.png',
 
    'assets/images/brands/Boudchou.png',
 
  
    'assets/images/brands/Bactigel.png',

    
    'assets/images/brands/Eminent.png'
];

function loadBrands() {
    const brandsContainer = document.querySelector('#our_brands_section .row');
    
    if (!brandsContainer) {
        console.error('Brands container not found');
        return;
    }
    brandsContainer.innerHTML = '';
    
    brandImages.forEach(imagePath => {
        const col = document.createElement('div');
        col.className = 'col pb-30';
        
        col.innerHTML = `
            <div class="service-card">
                <div class="service-card-thumb">
                    <img src="${imagePath}" alt="Brand Logo"/>
                </div>
            </div>
        `;
        
        brandsContainer.appendChild(col);
    });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadBrands);
} else {
    loadBrands();
}