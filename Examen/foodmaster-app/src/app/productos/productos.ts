import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

interface Producto {
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent {
    productos: Producto[] = [
    {
      nombre: 'Café Americano',
      precio: 18,
      descripcion: 'Café espresso de origen guatemalteco diluido con agua caliente, resaltando la acidez y el cuerpo característico de la región.',
      imagen: 'https://i.blogs.es/139e0f/cafe-americano2/840_560.jpeg'
    },
    {
      nombre: 'Cappuccino',
      precio: 22,
      descripcion: 'Un balance perfecto entre café espresso, leche vaporizada y una generosa capa de espuma de leche.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvakn3d9I7SdsOd7eyN6mXZVu0275pn5hFog&s'
    },
    {
      nombre: 'Latte',
      precio: 25,
      descripcion: 'Bebida suave y cremosa preparada con una mayor proporción de leche vaporizada sobre un shot de espresso.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIoIVSktbB1Iqk7g11LTyN27DcK0s71zP5-Q&s'
    },
    {
      nombre: 'Chocolate Caliente',
      precio: 20,
      descripcion: 'Bebida reconfortante preparada con chocolate local, a menudo con notas de especias como la canela.',
      imagen: 'https://www.novachef.es/media/images/chocolate-caliente-especias.jpg'
    },
    {
      nombre: 'Té Chai Latte',
      precio: 28,
      descripcion: 'Una mezcla aromática de té negro y especias como canela, cardamomo y jengibre, combinado con leche vaporizada.',
      imagen: 'https://www.splenda.com/wp-content/themes/bistrotheme/assets/recipe-images/chai-tea-blend.jpg'
    },
    {
      nombre: 'Pastel de Zanahoria',
      precio: 28,
      descripcion: 'Porción de pastel húmedo y especiado, elaborado con zanahoria fresca y a menudo cubierto con un glaseado de queso crema.',
      imagen: 'https://peopleenespanol.com/thmb/yy2sl47SGlJH0dIZGZqADJ3FggQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pastel-de-zanahoria-con-nuez-2000-41c58bf044c0418d8694ffb720d29e85.jpg'
    },
    {
      nombre: 'Cheesecake',
      precio: 32,
      descripcion: 'Rebanada de un cremoso pastel de queso sobre una base de galleta, coronado con una salsa de bayas o frutos del bosque.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdEmXGdSHM0ifVTx_bRzkKvufUiWVmd_kVg&s'
    },
    {
      nombre: 'Croissant con Jamón y Queso',
      precio: 25,
      descripcion: 'Un clásico hojaldrado y tibio, relleno con jamón y queso derretido, ideal para un desayuno o refacción ligera.',
      imagen: 'https://chefeel.com/chefgeneralfiles/2023/01/croissant-bacon-with-mustard-880x745.jpg'
    },
    {
      nombre: 'Pan con Pollo',
      precio: 40,
      descripcion: 'Pan artesanal relleno con pechuga de pollo preparada, lechuga, tomate y aderezos. Una opción sustanciosa.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyp-x3PcWJ2k777KyLQI1qnt1JQoyGPZ8Z0w&s'
    },
    {
      nombre: 'Champurrada',
      precio: 8,
      descripcion: 'Galleta tradicional guatemalteca, grande y crujiente, con un sabor a base de ajonjolí, perfecta para acompañar el café.',
      imagen: 'https://i.ytimg.com/vi/L1hDRgUn8uA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDRUdt2H-BgBcNYAbkyIjC629LSTA'
    },
    {
      nombre: 'Panque de Arándano',
      precio: 20,
      descripcion: 'Panecillo dulce y esponjoso, horneado con arándanos frescos o deshidratados en su interior.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0DYkzNviZD84VRuZZazRQ9ZcciMKpVlTlg&s'
    },
    {
      nombre: 'Limonada con Hierbabuena',
      precio: 18,
      descripcion: 'Bebida refrescante y natural, preparada con jugo de limón fresco y hojas de hierbabuena.',
      imagen: 'https://www.hola.com/horizon/landscape/cd43e77c4a2f-receta-limonada-hierbabuena-limon-t.jpg'
    }
  ];


  agregar(p: Producto) {
    alert(`El producto ${p.nombre} ha sido agregado al carrito.`);
  }
}
