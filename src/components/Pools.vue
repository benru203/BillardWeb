<template>
    <div class="col-12">
        <div class="card">
            <div class="card-header text-light bg-primary">
                <h2>Listado de mesas</h2>
            </div>
            <div class="card-body text-right">
                <button class="btn btn-success"  data-toggle="modal" data-target="#AddModal">Agregar</button>
            </div>
            <div class="card-body">
                <table class="table  table-bordered">
                    <thead class="bg-primary text-light">
                    <tr>
                        <th scope="col">MESA N°</th>
                        <th scope="col">ESTADO</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr :key="index" v-for="(pool, index) in pools">
                        <td >{{pool.num}}</td>
                        <td>{{pool.status}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="modal fade" id="AddModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header  bg-primary text-light">
                        <h5 class="modal-title" id="exampleModalLabel">Agregar Mesa</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="createPool">
                        <div class="modal-body">
                            <div class="form-group">
                                <label >Mesa N°</label>
                                <input class="form-control" v-model.number="Pool.num" type="number">
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
    import Pool from '../Models/Pool';
    import FireBase from '../config.firebase';
    let DB =  FireBase.database();
    let pools = DB.ref('pools');
    export default {
        name: "Pools",
        data(){
            return{
                Pool : new Pool(),
            }
        },
        firebase:{
            pools:pools
        },
        methods:{
            createPool(){
                pools.push(this.Pool);
                this.Pool = new Pool();
                $('#AddModal').modal('hide')
            }
        }

    }
</script>

<style scoped>

</style>