<template>
    <div class="col-12">
        <div class="card">
            <div class="card-header text-light bg-primary">
                <h2>Listado de productos</h2>
            </div>
            <div class="card-body text-right">
                <button class="btn btn-success"  data-toggle="modal" data-target="#AddModal">Agregar</button>
            </div>
            <div class="card-body">
                <table class="table  table-bordered">
                    <thead class="bg-primary text-light">
                    <tr>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">PRECIO</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr :key="index" v-for="(product, index) in products">
                            <td scope="row">
                                {{product.name}}
                            </td>
                            <td scope="row">
                                {{product.price}}
                            </td>
                         </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="modal fade" id="AddModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header  bg-primary text-light">
                        <h5 class="modal-title" id="exampleModalLabel">Agregar Producto</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="createProduct">
                        <div class="modal-body">
                            <div class="form-group">
                                <label >Nombre</label>
                                <input class="form-control" v-model="Product.name" type="text">
                            </div>
                            <div class="form-group">
                                <label >Precio</label>
                                <input class="form-control" v-model.number="Product.price" type="number">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Guardar</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Product from '../Models/Product';
    import FireBase from '../config.firebase';
    let DB =  FireBase.database();
    let products = DB.ref('products');
    export default {
        name: "Products",
        data(){
            return{
                Product : new Product(),
                edit:[false]
            }
        },
        firebase:{
            products:products
        },
        methods:{
            createProduct(){
                products.push(this.Product);
                this.Product = new Product();
                $('#AddModal').modal('hide')
            }
        }
    }
</script>

<style scoped>

</style>