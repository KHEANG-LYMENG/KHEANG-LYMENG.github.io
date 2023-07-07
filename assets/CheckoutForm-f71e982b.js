import{_ as i,r as d,o,c,a as e,b as a,w as t,F as n,f as l,d as r}from"./index-bda948ae.js";const p={},m=e("div",{style:{"padding-top":"30px"}},null,-1),u={class:"container"},v={class:"row"},b=l('<div class="col-md-4 order-md-2 mb-4"><h4 class="d-flex justify-content-between align-items-center mb-3"><span class="text-muted">Summarize items (3)</span><span class="badge badge-secondary badge-pill">3</span></h4><ul class="list-group mb-3"><li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 class="my-0">First product</h6><small class="text-muted">Brief description</small></div><span class="text-muted">$10.00</span></li><li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 class="my-0">Second product</h6><small class="text-muted">Brief description</small></div><span class="text-muted">$10.00</span></li><li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 class="my-0">Third item</h6><small class="text-muted">Brief description</small></div><span class="text-muted">$10.00</span></li><li class="list-group-item d-flex justify-content-between"><span>Total (USD)</span><strong>$30.00</strong></li></ul><form class="card p-2"><div class="input-group"><input type="text" class="form-control" placeholder="Promo code"><div class="input-group-append"><button type="submit" class="btn btn-secondary">Redeem</button></div></div></form></div>',1),f={class:"col-md-8 order-md-1"},h=e("h4",{class:"mb-3"},"Customer Information",-1),_={class:"needs-validation",novalidate:""},y=l('<div class="mb-3"><label for="email">Email <span class="text-muted">(Optional)</span></label><input type="email" class="form-control" id="email" placeholder="you@example.com"><div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div></div><div class="mb-3"><label for="email">Phone Number</label><input type="email" class="form-control" id="email" placeholder="012345678"><div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div></div><hr><h4 class="mb-3">Shipping Address</h4><div class="row"><div class="col-md-6 mb-3"><label for="firstName">First name</label><input type="text" class="form-control" id="firstName" placeholder="" value="" required><div class="invalid-feedback"> Valid first name is required. </div></div><div class="col-md-6 mb-3"><label for="lastName">Last name</label><input type="text" class="form-control" id="lastName" placeholder="" value="" required><div class="invalid-feedback"> Valid last name is required. </div></div></div><div class="mb-3"><label for="email">Company <span class="text-muted">(Optional)</span></label><input type="email" class="form-control" id="email" placeholder="you@example.com"><div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div></div><div class="mb-3"><label for="address">Address</label><input type="text" class="form-control" id="address" placeholder="1234 Main St" required><div class="invalid-feedback"> Please enter your shipping address. </div></div><div class="mb-3"><label for="address2">Address 2 <span class="text-muted">(Optional)</span></label><input type="text" class="form-control" id="address2" placeholder="Apartment or suite"></div><div class="row"><div class="col-md-5 mb-3"><label for="country">Country</label><select class="custom-select d-block w-100" id="country" required><option value="">Choose...</option><option>Cambodia</option></select><div class="invalid-feedback"> Please select a valid country. </div></div><div class="col-md-4 mb-3"><label for="state">State</label><select class="custom-select d-block w-100" id="state" required><option value="">Choose...</option><option>Phnom Penh</option><option>Siem Reap</option><option>Kandal</option><option>Sihanoukville</option></select><div class="invalid-feedback"> Please provide a valid state. </div></div><div class="col-md-3 mb-3"><label for="zip">Zip</label><input type="text" class="form-control" id="zip" placeholder="" required><div class="invalid-feedback"> Zip code required. </div></div></div><hr>',10),x={class:"d-flex justify-content-between pt-5"},g={class:"mb-0"},k=e("a",{href:"#!",class:"text-body"},[e("i",{class:"fas fa-long-arrow-alt-left me-2"}),r("Return to cart ")],-1),w=e("button",{class:"btn btn-primary btn-lg",type:"submit"},"Continue to Shipping Method",-1);function C(P,S){const s=d("router-link");return o(),c(n,null,[m,e("div",u,[e("div",v,[b,e("div",f,[h,e("form",_,[y,e("div",x,[e("h6",g,[a(s,{to:"/cart"},{default:t(()=>[k]),_:1})]),a(s,{to:"/cart/checkout/shipping"},{default:t(()=>[w]),_:1})])])])])])],64)}const N=i(p,[["render",C]]);export{N as default};
