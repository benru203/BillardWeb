<template>
    <div :class="'col-md-2 pool ' + (pool.status?'active':'')">
        <div class="row h-100">
            <div class="users br col-6 text-center">
                <h5>USER NAME</h5>
                <h6>3000000</h6>
            </div>
            <div class="users col-6 text-center">
                <h5>USER NAME</h5>
                <h6>3000000</h6>
            </div>
        </div>
        <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header  bg-primary text-light">
                        <h5 class="modal-title" id="exampleModalLabel">Agregar usuario</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form >
                        <div class="modal-body">
                            <div class="form-group">
                                <label >Nombre</label>
                                <input class="form-control"  type="text">
                            </div>
                            <div class="form-group">
                                <label >N° celular</label>
                                <input class="form-control"  type="number">
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
    export default {
        name: "Pool",
        props:{
            data:{
                type:Object,
                default: new Pool(),
            }
        },
        data(){
            return {
                pool:this.data
            }
        },
        watch:{
            data(){
                this.pool = this.data;
            }
        }
    }
</script>

<style scoped lang="scss">
    .pool{
        background: url("../assets/pool.png");
        height: 175px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        color: #f1f1f1;
        border: 1px solid rgba(0, 0, 0, .15);
        box-shadow: 0 3px 8px rgba(0, 0, 0, .3);
        margin: 10px;
    }
    .active{
        border: 2px solid #9bc848;
    }
    .users{
        align-self: center;
        cursor: pointer;
    }
    .br{
        border-right: 1px solid;
    }
</style>