import { useMutation, useQueryClient } from "react-query";
import { createProduct } from "../api/productsAPI";

function ProductForm() {
    const queryClient = useQueryClient();

    const addProductMutation = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            console.log("Product created successfully");
            queryClient.invalidateQueries('products');
        },
        
    })

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);
    console.log(product);
    addProductMutation.mutate({
        ...product,
        inStock: true
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Title</label>
      <input type="text" name="name" id="name" />
      <br />
      <label htmlFor="">Price</label>
      <input type="text" name="price" id="price" />
      <br />
      <label htmlFor="">Description</label>
      <input type="text" name="description" id="description" />
      <br />
      <input type="submit" value="Create" />
    </form>
  );
}

export default ProductForm;
