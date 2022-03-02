import {useNavigate} from 'react-router-dom'
function Product() {
    const navigate = useNavigate()
    const toDetail = ()=> {
        navigate(`/productdetail`)
    }

 return(
    <div class='container-fluid'>
    <div class="card mx-auto col-md-3 col-10 mt-5"> <img class='mx-auto img-thumbnail' src="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/1/30/144f106c-aea9-4e86-a8d2-5df0e102e631.jpg" width="auto" height="auto" />
        <div class="card-body text-center mx-auto">
            <div class='cvp'>
                <h5 class="card-title font-weight-bold">Audio-Technica</h5>
                <p class="card-text">$299</p> <a href="#"  onClick={()=>toDetail()} class="btn details px-auto">Show Detail</a>
            </div>
        </div>
    </div>

</div>
 )
}

export default Product