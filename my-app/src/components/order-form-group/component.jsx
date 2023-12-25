import { AddressForm } from '../address-form/component';
import { CustomerForm } from '../customer-form/component';
import { OrderProvider } from '../order/component';



export const OrderFormGroup = () => {

   

     return (
      <div>
      <OrderProvider>
          <h3>Customer Form</h3>
          <CustomerForm/>
          <h3>Address Form</h3>
          <AddressForm />
      </OrderProvider>
      </div>
  );
}