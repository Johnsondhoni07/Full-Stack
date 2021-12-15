import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DummyData=[{
    id:1,
    title:'Idli',
    price:1,
    description:'Idli with Sambhar'
  },
  {
    id:2,
    title:'Dosa',
    price:2,
    description:'Dosa with Sambhar'
  },{
    id:3,
    title:'Parotta',
    price:5,
    description:'Parotta with Chicken Gravy'
  }]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {DummyData.map((s,i)=><ul key={i}>
        <ProductItem
          key={i}
          id={s.id}
          title= {s.title}
          price={s.price}
          description={s.description}
        />
      </ul> )}
    </section>
  );
};

export default Products;
