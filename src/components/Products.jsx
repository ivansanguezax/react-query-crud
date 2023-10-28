import { useQuery, useMutation, useQueryClient } from "react-query";
import { getProducts, deleteProduct } from "../api/productsAPI";



function Products() {
    const queryClient = useQueryClient();
    const {isLoading, data:products, isError, error} = useQuery({
        queryKey: 'products',
        queryFn: getProducts,
        select: products => products.sort((a,b) => b.id - a.id)
    });

    const deleteMutation = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries('products');
        }
    })



    if (isLoading) {
        return <div>Loading...</div>;
    } else if (isError) {
        return <div>Error: {error.message}</div>;
    }

    
  
    return products.map((product) => (
        <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.image}</p>
            <button onClick={() =>{
                deleteMutation.mutate(product.id);
            } 
            }>delete</button>
            <input type="checkbox" />
            <label htmlFor="">In Stock</label>
        </div>
    ));
}

export default Products;
