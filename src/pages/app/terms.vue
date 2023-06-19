<script setup lang="tsx">
interface Content {
  title: string
  text: string
}

const content: Content = [
  {
    title: 'Payment Methods',
    text: 'We offer online and phone purchasing via credit card and PayPal through our Pivotel Online Store. We also accept Money Orders. We will confirm the order via email or phone within 24 hours.',
  },
  {
    title: 'Credit Cards',
    text: 'We accept Visa, Mastercard, American Express and Discover credit cards. Please be sure to provide the exact billing address and telephone number that your credit card issuer has on file for you. Incorrect or incomplete information may cause a delay in processing your order. Please note: the billing address and shipping address for the order must match; otherwise, credit card company verification is required which may delay shipping of the order 3-5 business days. You can avoid the shipping delay by choosing PayPal for the payment method.',
  },
  {
    title: 'Money Orders, Cashier’s Checks and Company Checks',
    text: 'We accept money orders, cashier’s checks and company checks in U.S. dollars only. Orders are processed upon receipt of a money order, however orders will not be processed for cashier’s check or company checks until funds have cleared the account. We cannot guarantee the availability of a product by the time funds clear or payment is received. We reserve the right to charge a fee of $35.00 on all returned checks.',
  },
  {
    title: 'Order Confirmation',
    text: 'We will send you an e-mail once your order is shipped containing your tracking number. In the event you are having your order shipped to an address other than the billing address, we recommend you make payment by PayPal. Orders paid by credit card and shipped to an address different from the credit card billing address will experience a delay in shipping until we receive credit card company verification. This shipping delay could be 3-5 business days. For orders with a value of $1200 or greater, and payment method of credit card, you must contact the credit card issuing bank and inform them that you placed an order with Pivotel to avoid a delay in shipping of the order. This is known as notating your account.',
  },
  {
    title: 'Pricing and Availability',
    text: 'Prices, services and availability of products are subject to change at any time and without notice. It is our goal to offer a wide range of products from standard to cutting edge technology. We also try to offer products and services at a reasonable market price. Prices in the Pivotel Online Store are current in real time, per session. Quoted prices shall remain effective for ninety (90) days from the date of the original quotation unless otherwise noted. All Orders placed after 90 days shall be treated as a new order with pricing adjustments as needed. Price quotes obtained from Pivotel and saved, copied or cached are not necessarily valid. Since the computer industry is constantly and rapidly changing we regularly update prices and information.',
  },
  {
    title: 'Taxes',
    text: 'The customer is liable for any/all taxes, duties, levies, and/or fees, imposed on Pivotel or the Customer for delivery of the items within the taxing authority unless an exemption certificate or appropriate documentation is provided to Pivotel.',
  },
  {
    title: 'Delivery Charges',
    text: 'Pivotel agrees to handle shipping arrangements to the “Ship To Address” as provided by the customer in the transaction and shall be billed to the customer. Please note: shipping and transportation charges may be billed separately.',
  },
  {
    title: 'Expedited Order',
    text: 'All orders received after 3p.m. EST for same day shipment shall incur a $25 expediting fee.',
  },
  {
    title: 'Subscription Renewals',
    text: 'Customer acknowledges that Pivotel will automatically renew service accounts 1-3 days before the expiration date of the service. The renewal term will match the term of the expiring service. As a courtesy, Pivotel will send a subscription renewal notice to the email address on file. Customers wishing to change or terminate the service must contact Pivotel via email to info@pivotel.com or via phone (+1 865 379 8723) at least three business days prior to the service expiration date.',
  },
  {
    title: 'Support',
    text: 'Pivotel agrees to provide initial customer assistance, within the Pivotel warranty period, up to thirty (30) minutes at no charge, for products and services purchased from Pivotel. It is recommended that a customer has reasonable knowledge of basic computer and software setup procedures and usage or has someone knowledgeable available for the initial installation.',
  },
  {
    title: 'Additional Telephone Support',
    text: 'Any and all additional telephone support beyond the initial installation support outlined above, will be billed in increments of one hour (60 minutes) at $199.00 USD per increment.',
  },
  {
    title: 'Remote Assistance Support',
    text: 'We also offer remote assistance support, via GoToAssist. Remote assistance support requires that Pivotel have access to your computer and is billed in increments of sixty (60) minutes at $199.00 per increment. Remote support is provided only as a convenience to licensed users of Pivotel products and services. Problems and solutions may depend on the nature of your system environment and other parameters that are unknown to Pivotel. By requesting remote assistance, you agree that actions and solutions described, suggested or implemented by Pivotel staff are entirely at your own risk and are provided to you without warranties of any kind. By requesting and accepting a remote assistance session, you accept responsibility for any changes made to the desktop content or system settings. Pivotel does not assume and is not responsible for any liability for the linking and viewing of any desktop content or system performance. Pivotel recommends for your security and privacy that you exit any applications you have open that is displaying content such as personal or confidential information, as the technician will be viewing your desktop; and, that you back up all data and files on the system before initiating a remote support session. Pivotel will not be held responsible for any data loss if any occurs during or after a remote session. Pivotel further recommends that you remain at your desktop and observe throughout the entire remote session. You will retain control for the duration of the session and can terminate the session at anytime. Pivotel continuously undertakes the utmost care when in use of your computer. However, Pivotel cannot guarantee that our service will resolve your problem.',
  },
  {
    title: 'Escalated Support',
    text: 'All support escalated to Engineering will be billed at $225.00 per hour.',
  },
  {
    title: 'In-House Support',
    text: 'If you prefer, you may ship your computer to our offce for: installation of the latest windows patches, drivers for the satellite phone and devices you own, installation of purchased software and testing connections before returning the computer to you. The fee for this service is $250 USD plus shipping.',
  },
  {
    title: 'Waiver of Support Fees',
    text: 'If support is required due to a defect in the software or equipment purchased from Pivotel then Additional Support fees shall be waived.',
  },
  {
    title: 'Warranty',
    text: 'All hardware sales come with 30-day Pivotel warranty. If the item you have ordered is defective, contact us within the warranty period, and we will replace defective items with an item of equal or greater functionality within the 30-day warranty period. All returns must include the original factory box, original factory packaging (foam, plastic, wrappings, etc.), blank, unfilled warranty cards, all instruction booklets, and paperwork. Do not deface original factory cartons or packaging in any manner. We will not accept a return if the packaging is not in its original condition. All returned merchandise must be in its original mint and clean condition. Returns on damaged or scratched merchandise will not be accepted. All returns must include all the factory accessories which come with the item. Pivotel will not accept any returns if these packed accessories are missing. Any item returned must include the RMA Form found at www.pivotel.com/returns. If we receive a shipment without this form and are unable to make contact with you, the item will be returned and you will be responsible for any shipping charges. Compatibility is not guaranteed. There is a 20% restocking fee for all non-defective products returned. This includes problems with: compatibility, driver/software conflicts, improper installation, etc. Customers must return items at their own expense and will be charged a return shipping fee for the replacement item. Shipping and handling charges are non-refundable. In the event that a suitable replacement is not available, a refund (less shipping and handling) will be issued in the form of the original payment method. If a problem arises after the 30-day Pivotel warranty period, please contact the manufacturer. Pivotel supplied hardware carries a 1-year manufacturers warranty against defects from the date of sale.',
  },
  {
    title: 'Return Policy',
    text: 'All sales are considered final after the 30-day Pivotel warranty period. If your package has arrived damaged, missing items, or otherwise tampered with, please contact the carrier (UPS, FedEx, etc.) and our Customer Service department immediately. Any delay in contacting us makes it more diffcult to file a claim. Please keep all packaging and items exactly as they arrived. Any return must include the RMA and Returns Form found at www.pivotel.com/returns. If we receive a shipment without this form and are unable to make contact with you, the item will, and you will be responsible for any shipping charges. All returns must include the original factory box, original factory packaging (foam, plastic, wrappings, etc.), blank, unfilled warranty cards, all instruction booklets, and paperwork. Do not deface original factory cartons or packaging in any manner. We will not accept a return if the packaging is not in its original condition. All returned merchandise must be in its original mint and clean condition. Returns on damaged or scratched merchandise will not be accepted. All returns must include all the factory accessories which come with the item. Pivotel will not accept any returns if these packed accessories are missing. Enclose the original receipt or a copy of it with your return. Also, enclose a brief letter of explanation of the reason for your return and state your request for either a store credit or an exchange. Please include the Return Authorization Number, given to you by our Customer Service department, on this letter and on the outside of the box. Returned merchandise which is lost or damaged in transit is not Pivotel\'s responsibility, but rather the carrier’s. It is the buyer’s responsibility to file claims with the carrier upon the discovery of the problem. Any item returned without a Return Authorization Number may be refused. Do not send merchandise back COD or freight collect. We cannot accept such packages. For your protection, insure all return packages. Pivotel cannot be responsible for packages we do not receive.',
  },
  {
    title: 'Limitation of Liability for the Services',
    text: 'The satellite services provided by Pivotel may be temporarily interrupted, delayed or otherwise limited and not available everywhere in the world. Pivotel makes no representation that it can provide uninterrupted service. Furthermore, Pivotel shall have no liabilities or credit due for interrupted service. Pivotel shall not be liable for acts or omissions of other carriers, equipment failures or modifications, acts of God, strikes, government actions or other causes beyond our reasonable control. Pivotel makes no warranties with respect to the service of any kind whatsoever, expressed or implied, except as provided explicitly in written agreement. The implied warranties of merchantability and fitness for any particular purpose are hereby disclaimed and excluded. Pivotel shall not be liable to its distributor or customer or any third party for any special, incidental or consequential damages.',
  },
  {
    title: 'Shipping and Handling Charges are Not Refundable',
    text: 'If you are not completely satisfied with the handling of your order, please contact our Customer Service Department Manager, and we will do our utmost to satisfy your request.',
  },
  {
    title: 'Shipping',
    text: 'Orders usually ship on the same or next business day; subject to the conditions outlined in the Credit Cards section and Order Confirmation section above. We ship via UPS Ground, FedEx, DHL, or USPS. Shipping charges are based on the weight and value of the product(s) ordered. Additional charges are incurred for other methods of shipment (3rd Day Select, 2nd Day Air, and Overnight). Any extra charges from the carrier that may occur because of wrong address information will be passed on to the customer. We will be happy to fax a copy of the carrier’s relevant form.',
  },
  {
    title: 'Indemnification and Limits of Liability',
    text: 'Customer agrees to indemnify, hold harmless, and defend Pivotel or any of its resellers against any claims resulting from or relating to customer\'s breach of this agreement or misuse of the services, equipment or services used in connection with Pivotel products. Pivotel parties shall not be liable for any harm, loss, liability, damage, expense, cost, suit, claim or demand whatsoever. Under no circumstances will Pivotel be liable for any indirect, aggravated, exemplary, punitive, special, incidental or consequential damages (including damages for lost profits, lost revenues, lost information, business interruption, failure to realize anticipated savings or any other commercial or economic loss), or third party claims, expenses, costs, liability, loss, or damage whatsoever, whether arising in negligence, tort, statute, equity, contract, common law, or any other cause of action or legal theory, even if Pivotel has been advised of the possibility of such damages. Customer agrees, acknowledges and confirms that the limitations of liability set out in this agreement are fair and reasonable in the commercial circumstances of this agreement and that Pivotel would not have entered into this agreement but for customer’s agreement to limit Pivotel\'s liability in the manner and to the extent provided for herein.',
  },
]
</script>

<template>
  <div>
    <n-h1 class="text-center">
      Terms and Conditions
    </n-h1>
    <n-p>
      The following information describes our Terms and Conditions for sales. All potential
      customers should read these terms before making a purchase. When you purchase a product
      or service from Pivotel Connected LLC (Pivotel) you automatically agree and become bound
      by the terms, even if you have not read them. Please take a moment to familiarize yourself with
      our Terms and Conditions and contact us should you have any questions.
    </n-p>
    <template v-for="part in content" :key="part.title">
      <n-h3>{{ part.title }}</n-h3>
      <n-p>{{ part.text }}</n-p>
    </template>
    <n-divider />
  </div>
  <div class="flex justify-between">
    <router-link v-slot="{ navigate }" custom to="/information">
      <n-button size="large" @click="navigate">
        Back
      </n-button>
    </router-link>
  </div>
</template>
