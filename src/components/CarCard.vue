<template>
  <div class="col">
    <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" width="100%" height="225" :src="car.thumbnail" role="img" aria-label="Placeholder: Thumbnail" focusable="false">

        <div class="card-body">
        <p class="card-text">    {{ car.brand_name }}  {{ car.model_name }}</p>
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button 
                    type="button" 
                    class="btn btn-sm btn-outline-secondary"
                    @click="$emit('viewCar')"
                >View</button>
            </div>
            <small class="text-muted">{{ car.year}}</small>
        </div>
        </div>
  </div>
</div>
</template>

<script>
export default {
    props: {
        car: {
            type: Object,
            required: true
        }
    }
}
</script>
