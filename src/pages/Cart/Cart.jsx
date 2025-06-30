import CartItems from "./CartItems"
export function Cart() {

    return(
        <section>
            <div> 
                <CartItems hasItems={false} />
            </div>
        </section>
    )
}
