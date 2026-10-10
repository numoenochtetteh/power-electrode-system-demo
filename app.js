const accounts={
 'owner@powerelectrode.com':{name:'Enoch / Owner Demo',role:'Owner',label:'Super Admin',initials:'EO'},
 'manager@powerelectrode.com':{name:'Kwame Mensah',role:'Manager',label:'General Manager',initials:'KM'},
 'production@powerelectrode.com':{name:'Yaw Boateng',role:'Production',label:'Production Team',initials:'YB'},
 'sales@powerelectrode.com':{name:'Ama Owusu',role:'Sales',label:'Sales Team',initials:'AO'},
 'store@powerelectrode.com':{name:'Kojo Asare',role:'Storekeeper',label:'Inventory / Store',initials:'KA'},
 'finance@powerelectrode.com':{name:'Akosua Mensah',role:'Finance',label:'Finance / Accounts',initials:'AM'}
};

const navItems=[
 {group:'MAIN'},
 {id:'dashboard',icon:'⌂',label:'Dashboard',roles:['Owner','Manager','Production','Sales','Storekeeper','Finance']},
 {group:'OPERATIONS'},
 {id:'inventory',icon:'▦',label:'Inventory',roles:['Owner','Manager','Production','Storekeeper']},
 {id:'production',icon:'⚙',label:'Production',roles:['Owner','Manager','Production']},
 {id:'sales',icon:'₵',label:'Sales & Customers',roles:['Owner','Manager','Sales','Finance']},
 {id:'purchases',icon:'⇩',label:'Purchasing & Suppliers',roles:['Owner','Manager','Storekeeper','Finance']},
 {id:'finance',icon:'▥',label:'Finance',roles:['Owner','Manager','Finance']},
 {group:'INSIGHTS'},
 {id:'reports',icon:'◫',label:'Reports & Analytics',roles:['Owner','Manager','Finance']},
 {id:'notifications',icon:'◉',label:'Notifications',roles:['Owner','Manager','Production','Sales','Storekeeper','Finance']},
 {group:'CONTROL'},
 {id:'activity',icon:'≡',label:'Activity Log',roles:['Owner','Manager']},
 {id:'staff',icon:'◎',label:'Staff & Permissions',roles:['Owner']},
 {id:'settings',icon:'⚙',label:'Settings',roles:['Owner','Manager']}
];

const products=[
 {sku:'PE-E6013-25',name:'E6013 Electrode 2.5mm',category:'Finished Product',stock:1240,min:500,max:3000,unit:'boxes',status:'Healthy'},
 {sku:'PE-E6013-32',name:'E6013 Electrode 3.2mm',category:'Finished Product',stock:2150,min:700,max:3200,unit:'boxes',status:'Healthy'},
 {sku:'PE-E6013-40',name:'E6013 Electrode 4.0mm',category:'Finished Product',stock:420,min:500,max:2500,unit:'boxes',status:'Low'},
 {sku:'RM-SW-001',name:'Steel Wire',category:'Raw Material',stock:7800,min:2500,max:10000,unit:'kg',status:'Healthy'},
 {sku:'RM-FLX-002',name:'Flux Material',category:'Raw Material',stock:9200,min:2000,max:9000,unit:'kg',status:'High'},
 {sku:'RM-PKG-003',name:'Packaging Boxes',category:'Raw Material',stock:1800,min:1000,max:7000,unit:'pcs',status:'Healthy'}
];

const productionRows=[
 {batch:'PB-1048',date:'09 Oct 2026',product:'E6013 3.2mm',target:1500,actual:1460,waste:'18 kg',damaged:12,shift:'Morning',supervisor:'Yaw Boateng',status:'Completed'},
 {batch:'PB-1047',date:'09 Oct 2026',product:'E6013 2.5mm',target:1200,actual:1180,waste:'14 kg',damaged:9,shift:'Morning',supervisor:'Yaw Boateng',status:'Completed'},
 {batch:'PB-1046',date:'09 Oct 2026',product:'E6013 4.0mm',target:1000,actual:870,waste:'29 kg',damaged:21,shift:'Morning',supervisor:'Yaw Boateng',status:'Below Target'},
 {batch:'PB-1045',date:'08 Oct 2026',product:'E6013 3.2mm',target:1400,actual:1450,waste:'15 kg',damaged:8,shift:'Evening',supervisor:'Kofi Annan',status:'Above Target'}
];

const salesRows=[
 {invoice:'PE-00128',date:'09 Oct',customer:'Tema Steel Works',product:'E6013 3.2mm',qty:320,total:28800,paid:28800,status:'Paid'},
 {invoice:'PE-00127',date:'09 Oct',customer:'Accra Fabricators Ltd',product:'E6013 2.5mm',qty:180,total:14400,paid:10000,status:'Partial'},
 {invoice:'PE-00126',date:'09 Oct',customer:'Adom Construction',product:'E6013 4.0mm',qty:120,total:12600,paid:0,status:'Unpaid'},
 {invoice:'PE-00125',date:'08 Oct',customer:'Cape Coast Engineering',product:'E6013 3.2mm',qty:250,total:22500,paid:22500,status:'Paid'},
 {invoice:'PE-00124',date:'08 Oct',customer:'Kumasi Metal Works',product:'E6013 2.5mm',qty:210,total:16800,paid:16800,status:'Paid'}
];

const expenses=[
 {ref:'EXP-0091',date:'09 Oct',category:'Raw Materials',description:'Steel wire delivery',amount:18500,enteredBy:'Akosua Mensah',status:'Approved'},
 {ref:'EXP-0090',date:'09 Oct',category:'Transport',description:'Customer delivery fuel',amount:2400,enteredBy:'Ama Owusu',status:'Approved'},
 {ref:'EXP-0089',date:'09 Oct',category:'Electricity',description:'Factory electricity top-up',amount:6200,enteredBy:'Akosua Mensah',status:'Approved'},
 {ref:'EXP-0088',date:'08 Oct',category:'Maintenance',description:'Machine servicing',amount:3800,enteredBy:'Yaw Boateng',status:'Approved'}
];

const activities=[
 ['₵','Ama Owusu recorded a new sale','Invoice PE-00128 • GH₵28,800','10:43 AM'],
 ['⚙','Yaw Boateng completed production batch','PB-1048 • 1,460 boxes produced','10:31 AM'],
 ['▦','Kojo Asare received raw materials','2,500 kg Steel Wire added to stock','9:55 AM'],
 ['▥','Akosua Mensah approved an expense','EXP-0091 • GH₵18,500','9:21 AM'],
 ['✎','Kwame Mensah adjusted stock','Packaging Boxes: 1,760 → 1,800','8:48 AM'],
 ['◎','Owner changed user permission','Finance role granted report export access','Yesterday']
];

const alerts=[
 {icon:'⚠️',title:'Low stock: E6013 4.0mm',text:'420 boxes remaining. Minimum level is 500.'},
 {icon:'📦',title:'High stock: Flux Material',text:'9,200 kg is above the configured maximum of 9,000 kg.'},
 {icon:'💳',title:'Outstanding payment',text:'Adom Construction owes GH₵12,600 on invoice PE-00126.'},
 {icon:'📉',title:'Production below target',text:'E6013 4.0mm output is 13% below today’s production target.'}
];

const state={user:null,page:'dashboard'};
const loginView=document.getElementById('loginView'); const appView=document.getElementById('appView'); const content=document.getElementById('content');
const nav=document.getElementById('nav'); const sidebar=document.getElementById('sidebar');

function money(n){return 'GH₵'+Number(n).toLocaleString('en-GH')}
function tag(text){const map={Paid:'green',Approved:'green',Completed:'green',Healthy:'green',Partial:'amber',Unpaid:'red',Low:'red',High:'amber','Below Target':'red','Above Target':'blue','Active':'green','Pending':'amber'};return `<span class="tag ${map[text]||'gray'}">${text}</span>`}
function metric(label,value,icon,trend,trendText){return `<div class="metric"><div class="metric-top"><div class="metric-label">${label}</div><div class="metric-icon">${icon}</div></div><div class="metric-value">${value}</div><div class="metric-foot"><span class="trend ${trend}">${trend==='up'?'↑':'↓'} ${trendText}</span><span class="muted">vs last period</span></div></div>`}
function pageHead(title,desc,actions=''){return `<div class="page-head"><div><h3>${title}</h3><p>${desc}</p></div><div class="actions">${actions}</div></div>`}
function table(headers,rows){return `<div class="table-wrap"><table class="table"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`}
function chart(vals,labels,prefix=''){const max=Math.max(...vals);return `<div class="chart">${vals.map((v,i)=>`<div class="bar-col"><div class="bar" style="height:${Math.max(10,(v/max)*92)}%" data-value="${prefix}${v.toLocaleString()}"></div><div class="bar-label">${labels[i]}</div></div>`).join('')}</div>`}
function activityList(){return `<div class="activity-list">${activities.map(a=>`<div class="activity"><div class="activity-icon">${a[0]}</div><div><strong>${a[1]}</strong><span>${a[2]}</span></div><div class="activity-time">${a[3]}</div></div>`).join('')}</div>`}
function alertList(){return `<div class="alert-list">${alerts.map(a=>`<div class="alert"><div class="alert-icon">${a.icon}</div><div><strong>${a.title}</strong><span>${a.text}</span></div></div>`).join('')}</div>`}

function renderNav(){
 nav.innerHTML=navItems.map(item=>item.group?`<div class="nav-group">${item.group}</div>`:(item.roles.includes(state.user.role)?`<button data-page="${item.id}" class="${state.page===item.id?'active':''}"><span class="nav-icon">${item.icon}</span><span>${item.label}</span></button>`:'')).join('');
 nav.querySelectorAll('button[data-page]').forEach(btn=>btn.onclick=()=>{state.page=btn.dataset.page;sidebar.classList.remove('open');render();});
}

function renderDashboard(){
 const role=state.user.role;
 if(role==='Production') return renderProduction(true);
 if(role==='Sales') return renderSales(true);
 if(role==='Storekeeper') return renderInventory(true);
 if(role==='Finance') return renderFinance(true);
 return `${pageHead('Business Overview','Live snapshot of Power Electrode operations, finance and performance.',`<button class="btn" onclick="showToast('Demo report prepared for export')">Export Report</button><button class="btn orange" onclick="openQuickAction()">+ Quick Entry</button>`)}
 <div class="grid metrics">${metric('Today’s Sales',money(55800),'₵','up','12.8%')}${metric('Cash Received',money(43200),'▥','up','9.4%')}${metric('Production Output','3,510 boxes','⚙','up','4.1%')}${metric('Today’s Expenses',money(27100),'↘','down','6.2%')}</div>
 <div class="kpi-strip"><div class="kpi"><label>Outstanding</label><div>${money(17000)}</div></div><div class="kpi"><label>Gross Profit MTD</label><div>${money(84200)}</div></div><div class="kpi"><label>Stock Alerts</label><div>2</div></div><div class="kpi"><label>Target Achievement</label><div>91%</div></div><div class="kpi"><label>Active Staff Today</label><div>14 / 17</div></div></div>
 <div class="grid two"><div class="panel"><div class="panel-head"><div><div class="panel-title">Sales Overview</div><div class="panel-sub">Daily sales value — current week</div></div><span class="tag green">+18.4% week</span></div><div class="panel-body">${chart([38200,41700,36500,48900,55800,0,0],['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],'GH₵')}</div></div>
 <div class="panel"><div class="panel-head"><div><div class="panel-title">Production Performance</div><div class="panel-sub">Target vs actual by product</div></div></div><div class="panel-body"><div class="progress-list"><div class="progress-row"><div class="progress-meta"><span>E6013 2.5mm</span><strong>98%</strong></div><div class="progress-track"><div class="progress-fill green" style="width:98%"></div></div></div><div class="progress-row"><div class="progress-meta"><span>E6013 3.2mm</span><strong>97%</strong></div><div class="progress-track"><div class="progress-fill orange" style="width:97%"></div></div></div><div class="progress-row"><div class="progress-meta"><span>E6013 4.0mm</span><strong>87%</strong></div><div class="progress-track"><div class="progress-fill red" style="width:87%"></div></div></div></div><div class="stat-pair" style="margin-top:18px"><div class="mini-stat"><label>Waste Rate</label><strong>2.3%</strong></div><div class="mini-stat"><label>Damaged</label><strong>42 boxes</strong></div></div></div></div></div>
 <div class="grid two" style="margin-top:16px"><div class="panel"><div class="panel-head"><div><div class="panel-title">Recent Business Activity</div><div class="panel-sub">Who changed what and when</div></div><button class="btn" onclick="go('activity')">View Audit Log</button></div><div class="panel-body">${activityList()}</div></div><div class="panel"><div class="panel-head"><div><div class="panel-title">Attention Needed</div><div class="panel-sub">Automatic business alerts</div></div></div><div class="panel-body">${alertList()}</div></div></div>`;
}

function renderInventory(isDash=false){
 const rows=products.map(p=>`<tr><td><strong>${p.name}</strong><div class="muted small">${p.sku}</div></td><td>${p.category}</td><td><strong>${p.stock.toLocaleString()}</strong> ${p.unit}</td><td>${p.min.toLocaleString()}</td><td>${p.max.toLocaleString()}</td><td>${tag(p.status)}</td><td><button class="btn" onclick="showToast('Opened ${p.name}')">View</button></td></tr>`);
 return `${pageHead(isDash?'Inventory Dashboard':'Inventory','Track raw materials, finished goods and every stock movement.',`<button class="btn" onclick="showToast('Stock movement form opened')">Stock Movement</button><button class="btn orange" onclick="openStockModal()">+ Add Item</button>`)}
 <div class="grid metrics">${metric('Finished Products','3,810 boxes','▦','up','5.6%')}${metric('Raw Material Value',money(186400),'◫','up','3.2%')}${metric('Low Stock Items','1','⚠','down','1 item')}${metric('Overstock Items','1','↑','up','1 item')}</div>
 <div class="panel"><div class="panel-head"><div><div class="panel-title">Current Stock</div><div class="panel-sub">Configured minimum and maximum stock levels</div></div><div class="filters"><select><option>All categories</option><option>Finished Products</option><option>Raw Materials</option></select><input placeholder="Search product…"></div></div>${table(['Product','Type','Current Stock','Min','Max','Status',''],rows)}</div>
 <div class="grid two" style="margin-top:16px"><div class="panel"><div class="panel-head"><div class="panel-title">Recent Stock Movements</div></div>${table(['Time','Item','Movement','Quantity','By'],[
 `<tr><td>09:55</td><td>Steel Wire</td><td>${tag('Stock In')}</td><td>+2,500 kg</td><td>Kojo Asare</td></tr>`,
 `<tr><td>09:18</td><td>E6013 3.2mm</td><td>${tag('gray')}</td><td>-320 boxes</td><td>Ama Owusu</td></tr>`,
 `<tr><td>08:48</td><td>Packaging Boxes</td><td>${tag('Adjustment')}</td><td>+40 pcs</td><td>Kwame Mensah</td></tr>`])}</div><div class="panel"><div class="panel-head"><div class="panel-title">Inventory Alerts</div></div><div class="panel-body">${alertList().split('</div>').slice(0,2).join('</div>')+'</div>'}</div></div>`;
}

function renderProduction(isDash=false){
 const rows=productionRows.map(r=>`<tr><td><strong>${r.batch}</strong></td><td>${r.date}</td><td>${r.product}</td><td>${r.target.toLocaleString()}</td><td><strong>${r.actual.toLocaleString()}</strong></td><td>${Math.round((r.actual/r.target)*100)}%</td><td>${r.waste}</td><td>${r.damaged}</td><td>${r.shift}</td><td>${tag(r.status)}</td></tr>`);
 return `${pageHead(isDash?'Production Dashboard':'Production','Monitor production output, targets, material usage, waste and damages.',`<button class="btn" onclick="showToast('Production target form opened')">Set Target</button><button class="btn orange" onclick="openProductionModal()">+ Record Production</button>`)}
 <div class="grid metrics">${metric('Today’s Target','3,700 boxes','◎','up','2.8%')}${metric('Actual Output','3,510 boxes','⚙','up','4.1%')}${metric('Target Achievement','94.9%','✓','up','1.7%')}${metric('Waste Today','61 kg','↘','down','8.2%')}</div>
 <div class="grid two"><div class="panel"><div class="panel-head"><div><div class="panel-title">7-Day Production Output</div><div class="panel-sub">Total finished boxes per day</div></div></div><div class="panel-body">${chart([3220,3480,3350,3690,3510,0,0],['Mon','Tue','Wed','Thu','Fri','Sat','Sun'])}</div></div><div class="panel"><div class="panel-head"><div><div class="panel-title">Today by Product</div></div></div><div class="panel-body"><div class="progress-list"><div class="progress-row"><div class="progress-meta"><span>E6013 2.5mm</span><strong>1,180 / 1,200</strong></div><div class="progress-track"><div class="progress-fill green" style="width:98%"></div></div></div><div class="progress-row"><div class="progress-meta"><span>E6013 3.2mm</span><strong>1,460 / 1,500</strong></div><div class="progress-track"><div class="progress-fill orange" style="width:97%"></div></div></div><div class="progress-row"><div class="progress-meta"><span>E6013 4.0mm</span><strong>870 / 1,000</strong></div><div class="progress-track"><div class="progress-fill red" style="width:87%"></div></div></div></div></div></div></div>
 <div class="panel" style="margin-top:16px"><div class="panel-head"><div><div class="panel-title">Production Batches</div><div class="panel-sub">Complete traceability of daily output</div></div></div>${table(['Batch','Date','Product','Target','Actual','Achievement','Waste','Damaged','Shift','Status'],rows)}</div>`;
}

function renderSales(isDash=false){
 const rows=salesRows.map(r=>`<tr><td><strong>${r.invoice}</strong></td><td>${r.date}</td><td>${r.customer}</td><td>${r.product}</td><td>${r.qty}</td><td><strong>${money(r.total)}</strong></td><td>${money(r.paid)}</td><td>${money(r.total-r.paid)}</td><td>${tag(r.status)}</td></tr>`);
 return `${pageHead(isDash?'Sales Dashboard':'Sales & Customers','Track every sale, payment, customer balance and outstanding invoice.',`<button class="btn" onclick="showToast('Customer form opened')">+ Customer</button><button class="btn orange" onclick="openSaleModal()">+ New Sale</button>`)}
 <div class="grid metrics">${metric('Sales Today',money(55800),'₵','up','12.8%')}${metric('Money Received',money(38800),'▥','up','8.5%')}${metric('Outstanding',money(17000),'◔','down','4.0%')}${metric('Orders Today','3','☷','up','1 order')}</div>
 <div class="grid two"><div class="panel"><div class="panel-head"><div><div class="panel-title">Sales Trend</div><div class="panel-sub">Current week</div></div></div><div class="panel-body">${chart([38200,41700,36500,48900,55800,0,0],['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],'GH₵')}</div></div><div class="panel"><div class="panel-head"><div><div class="panel-title">Payment Status</div></div></div><div class="panel-body"><div class="stat-pair"><div class="mini-stat"><label>Paid</label><strong>${money(68100)}</strong></div><div class="mini-stat"><label>Outstanding</label><strong>${money(17000)}</strong></div></div><div class="progress-row" style="margin-top:18px"><div class="progress-meta"><span>Collection Rate</span><strong>80%</strong></div><div class="progress-track"><div class="progress-fill green" style="width:80%"></div></div></div></div></div></div>
 <div class="panel" style="margin-top:16px"><div class="panel-head"><div><div class="panel-title">Recent Sales</div><div class="panel-sub">Sales value is separated from actual money received</div></div></div>${table(['Invoice','Date','Customer','Product','Qty','Sale Value','Paid','Balance','Status'],rows)}</div>`;
}

function renderPurchases(){
 const rows=[
 `<tr><td><strong>PO-0042</strong></td><td>09 Oct</td><td>Ghana Steel Supply Ltd</td><td>Steel Wire</td><td>2,500 kg</td><td>${money(18500)}</td><td>${tag('Received')}</td></tr>`,
 `<tr><td><strong>PO-0041</strong></td><td>08 Oct</td><td>West Africa Minerals</td><td>Flux Material</td><td>1,800 kg</td><td>${money(12600)}</td><td>${tag('Pending')}</td></tr>`,
 `<tr><td><strong>PO-0040</strong></td><td>07 Oct</td><td>PackRight Ghana</td><td>Packaging Boxes</td><td>4,000 pcs</td><td>${money(7200)}</td><td>${tag('Received')}</td></tr>`
 ];
 return `${pageHead('Purchasing & Suppliers','Manage raw-material procurement, supplier balances and goods received.',`<button class="btn" onclick="showToast('Supplier form opened')">+ Supplier</button><button class="btn orange" onclick="showToast('Purchase order form opened')">+ Purchase Order</button>`)}
 <div class="grid metrics">${metric('Purchases MTD',money(123800),'⇩','up','7.3%')}${metric('Supplier Balance',money(29400),'◔','down','3.5%')}${metric('Open POs','4','☷','up','1')}${metric('Due This Week',money(12600),'⚠','down','2 invoices')}</div>
 <div class="panel"><div class="panel-head"><div><div class="panel-title">Purchase Orders</div><div class="panel-sub">Raw materials and supplier orders</div></div></div>${table(['PO','Date','Supplier','Item','Quantity','Total','Status'],rows)}</div>`;
}

function renderFinance(isDash=false){
 const expRows=expenses.map(e=>`<tr><td><strong>${e.ref}</strong></td><td>${e.date}</td><td>${e.category}</td><td>${e.description}</td><td><strong>${money(e.amount)}</strong></td><td>${e.enteredBy}</td><td>${tag(e.status)}</td></tr>`);
 return `${pageHead(isDash?'Finance Dashboard':'Finance','See sales value, cash received, expenses and estimated business profitability.',`<button class="btn" onclick="showToast('Income statement prepared')">Income Statement</button><button class="btn orange" onclick="openExpenseModal()">+ Add Expense</button>`)}
 <div class="grid metrics">${metric('Revenue MTD',money(286500),'₵','up','14.2%')}${metric('Cash Received',money(253200),'▥','up','11.8%')}${metric('Expenses MTD',money(124600),'↘','down','2.9%')}${metric('Est. Net Profit',money(85800),'↑','up','19.4%')}</div>
 <div class="grid two"><div class="panel"><div class="panel-head"><div><div class="panel-title">Revenue vs Expenses</div><div class="panel-sub">Last 6 months</div></div></div><div class="panel-body">${chart([162,188,205,231,254,286],['May','Jun','Jul','Aug','Sep','Oct'],'GH₵k')}</div></div><div class="panel"><div class="panel-head"><div><div class="panel-title">Profit Summary</div></div></div><div class="panel-body"><div class="progress-list"><div class="progress-row"><div class="progress-meta"><span>Sales / Revenue</span><strong>${money(286500)}</strong></div></div><div class="progress-row"><div class="progress-meta"><span>Cost of Production</span><strong>${money(76100)}</strong></div></div><div class="progress-row"><div class="progress-meta"><span>Operating Expenses</span><strong>${money(124600)}</strong></div></div><hr style="border:0;border-top:1px solid var(--line);width:100%"><div class="progress-row"><div class="progress-meta"><span><strong>Estimated Net Profit</strong></span><strong>${money(85800)}</strong></div><div class="progress-track"><div class="progress-fill green" style="width:30%"></div></div></div></div><div class="info-card" style="margin-top:16px"><h4>Accounting note</h4><p>The final live system can use the company accountant’s approved costing method so financial reports match Power Electrode’s real accounting process.</p></div></div></div></div>
 <div class="panel" style="margin-top:16px"><div class="panel-head"><div><div class="panel-title">Expenses</div><div class="panel-sub">Track spending by category and approval status</div></div></div>${table(['Ref','Date','Category','Description','Amount','Entered By','Status'],expRows)}</div>`;
}

function renderReports(){return `${pageHead('Reports & Analytics','Daily, weekly, monthly and custom reports for management.',`<button class="btn" onclick="showToast('PDF export generated')">Export PDF</button><button class="btn" onclick="showToast('Excel export generated')">Export Excel</button>`)}
 <div class="filters" style="margin-bottom:16px"><select><option>This Month</option><option>This Week</option><option>Today</option><option>Custom Range</option></select><select><option>All Business Areas</option><option>Sales</option><option>Production</option><option>Inventory</option><option>Finance</option></select><button class="btn primary">Apply</button></div>
 <div class="grid metrics">${metric('Sales Growth','18.4%','↑','up','6.1%')}${metric('Production Efficiency','94.9%','⚙','up','1.7%')}${metric('Collection Rate','88.4%','▥','up','3.2%')}${metric('Waste Rate','2.3%','↘','down','0.6%')}</div>
 <div class="grid two"><div class="panel"><div class="panel-head"><div><div class="panel-title">Monthly Revenue</div></div></div><div class="panel-body">${chart([162,188,205,231,254,286],['May','Jun','Jul','Aug','Sep','Oct'],'GH₵k')}</div></div><div class="panel"><div class="panel-head"><div><div class="panel-title">Production Target Achievement</div></div></div><div class="panel-body">${chart([88,91,89,94,96,95],['May','Jun','Jul','Aug','Sep','Oct'],'')}</div></div></div>
 <div class="grid three" style="margin-top:16px"><div class="panel"><div class="panel-head"><div class="panel-title">Top Product</div></div><div class="panel-body"><div class="metric-value">E6013 3.2mm</div><p class="muted small">42% of sales volume this month</p></div></div><div class="panel"><div class="panel-head"><div class="panel-title">Top Customer</div></div><div class="panel-body"><div class="metric-value" style="font-size:20px">Tema Steel Works</div><p class="muted small">${money(67400)} sales this month</p></div></div><div class="panel"><div class="panel-head"><div class="panel-title">Lowest Output Area</div></div><div class="panel-body"><div class="metric-value" style="font-size:20px">E6013 4.0mm</div><p class="muted small">Currently 13% below target</p></div></div></div>`}

function renderNotifications(){return `${pageHead('Notifications','Important events the owner and relevant staff should see.',`<button class="btn" onclick="showToast('All notifications marked as read')">Mark all read</button>`)}<div class="grid two"><div class="panel"><div class="panel-head"><div><div class="panel-title">Business Alerts</div><div class="panel-sub">Rules can be configured per user and role</div></div></div><div class="panel-body">${alertList()}</div></div><div class="panel"><div class="panel-head"><div><div class="panel-title">Notification Preferences</div></div></div><div class="panel-body"><div class="progress-list"><div class="info-card"><h4>In-app notifications</h4><p>Enabled for all relevant roles.</p></div><div class="info-card"><h4>Email alerts</h4><p>Owner receives critical stock, payment and production alerts.</p></div><div class="info-card"><h4>WhatsApp integration</h4><p>Can be added later for selected critical events.</p></div></div></div></div></div>`}

function renderActivity(){return `${pageHead('Activity Log','A complete audit trail showing who entered, changed or approved business information.',`<button class="btn" onclick="showToast('Audit log exported')">Export Audit Log</button>`)}<div class="grid metrics">${metric('Actions Today','128','≡','up','11')}${metric('Edits','19','✎','down','3')}${metric('Approvals','24','✓','up','4')}${metric('Failed Logins','2','⚠','down','1')}</div><div class="panel"><div class="panel-head"><div><div class="panel-title">Audit Trail</div><div class="panel-sub">Records are not silently overwritten — changes remain traceable</div></div></div><div class="panel-body">${activityList()}</div></div>`}

function renderStaff(){
 const rows=[
 ['Enoch / Owner Demo','Owner','Super Admin','All modules','Active','Today 12:05 PM'],['Kwame Mensah','General Manager','Manager','Operations + reports','Active','Today 11:58 AM'],['Yaw Boateng','Production Supervisor','Production','Production + inventory view','Active','Today 10:51 AM'],['Ama Owusu','Sales Officer','Sales','Sales + customers','Active','Today 10:43 AM'],['Kojo Asare','Storekeeper','Storekeeper','Inventory + purchasing','Active','Today 10:02 AM'],['Akosua Mensah','Accountant','Finance','Finance + sales + reports','Active','Today 9:46 AM']
 ].map(r=>`<tr>${r.map((v,i)=>`<td>${i===4?tag(v):v}</td>`).join('')}<td><button class="btn" onclick="showToast('Permission editor opened')">Manage</button></td></tr>`);
 return `${pageHead('Staff & Permissions','Every staff member has their own login and only sees what their role allows.',`<button class="btn orange" onclick="openStaffModal()">+ Add Staff</button>`)}<div class="panel"><div class="panel-head"><div><div class="panel-title">Users & Roles</div><div class="panel-sub">Role-based access control</div></div></div>${table(['Name','Position','System Role','Access','Status','Last Login',''],rows)}</div><div class="grid three" style="margin-top:16px"><div class="info-card"><h4>Production Staff</h4><p>Can enter production, material usage, waste and damage. Cannot see confidential company profit.</p></div><div class="info-card"><h4>Finance</h4><p>Can enter and review income, payments, expenses and approved financial reports.</p></div><div class="info-card"><h4>Owner / Super Admin</h4><p>Can see the entire business, user activity, permissions, operational reports and financial performance.</p></div></div>`;
}

function renderSettings(){return `${pageHead('Settings','Configure business rules, stock thresholds and system preferences.')}<div class="grid two"><div class="panel"><div class="panel-head"><div class="panel-title">Business Configuration</div></div><div class="panel-body"><div class="progress-list"><div class="info-card"><h4>Company</h4><p>Power Electrode Ltd • Ghana operations • Owner access from UK</p></div><div class="info-card"><h4>Currency</h4><p>Ghana Cedi (GH₵)</p></div><div class="info-card"><h4>Reporting</h4><p>Daily, weekly, monthly and custom date-range reporting.</p></div></div></div></div><div class="panel"><div class="panel-head"><div class="panel-title">Controls</div></div><div class="panel-body"><div class="progress-list"><div class="info-card"><h4>Stock Thresholds</h4><p>Set minimum and maximum level for each product and raw material.</p></div><div class="info-card"><h4>Approval Rules</h4><p>Configure which transactions need manager approval.</p></div><div class="info-card"><h4>Data Retention</h4><p>Audit history stays available for accountability and review.</p></div></div></div></div></div>`}

function render(){
 document.getElementById('userName').textContent=state.user.name;document.getElementById('userRole').textContent=state.user.label;document.getElementById('avatar').textContent=state.user.initials;
 renderNav();
 const titles={dashboard:['OVERVIEW','Dashboard'],inventory:['OPERATIONS','Inventory'],production:['OPERATIONS','Production'],sales:['OPERATIONS','Sales & Customers'],purchases:['OPERATIONS','Purchasing'],finance:['FINANCE','Finance'],reports:['INSIGHTS','Reports & Analytics'],notifications:['INSIGHTS','Notifications'],activity:['CONTROL','Activity Log'],staff:['CONTROL','Staff & Permissions'],settings:['CONTROL','Settings']};
 document.getElementById('pageEyebrow').textContent=titles[state.page][0];document.getElementById('pageTitle').textContent=titles[state.page][1];
 const f={dashboard:renderDashboard,inventory:renderInventory,production:renderProduction,sales:renderSales,purchases:renderPurchases,finance:renderFinance,reports:renderReports,notifications:renderNotifications,activity:renderActivity,staff:renderStaff,settings:renderSettings}; content.innerHTML=f[state.page]();
 window.scrollTo({top:0,behavior:'smooth'});
}

function go(page){state.page=page;render()}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
function openModal(title,body){document.getElementById('modalTitle').textContent=title;document.getElementById('modalBody').innerHTML=body;document.getElementById('modal').classList.remove('hidden')}
function closeModal(){document.getElementById('modal').classList.add('hidden')}
function demoForm(fields,success){return `<form class="form-grid" onsubmit="event.preventDefault();closeModal();showToast('${success}')">${fields}<div class="form-actions"><button type="button" class="btn" onclick="closeModal()">Cancel</button><button class="btn orange" type="submit">Save Demo Record</button></div></form>`}
function openSaleModal(){openModal('Record New Sale',demoForm(`<label>Customer<select><option>Tema Steel Works</option><option>Accra Fabricators Ltd</option><option>New Customer</option></select></label><label>Product<select><option>E6013 3.2mm</option><option>E6013 2.5mm</option><option>E6013 4.0mm</option></select></label><label>Quantity<input type="number" value="100"></label><label>Sale Amount<input value="9000"></label><label>Amount Paid<input value="9000"></label><label>Payment Method<select><option>Bank Transfer</option><option>Cash</option><option>Mobile Money</option><option>Cheque</option></select></label>`,'Demo sale recorded'))}
function openProductionModal(){openModal('Record Production',demoForm(`<label>Product<select><option>E6013 3.2mm</option><option>E6013 2.5mm</option><option>E6013 4.0mm</option></select></label><label>Shift<select><option>Morning</option><option>Evening</option><option>Night</option></select></label><label>Target<input type="number" value="1500"></label><label>Actual Output<input type="number" value="1460"></label><label>Waste (kg)<input type="number" value="18"></label><label>Damaged Boxes<input type="number" value="12"></label><label class="full">Notes<textarea>Production completed normally.</textarea></label>`,'Demo production record saved'))}
function openExpenseModal(){openModal('Add Expense',demoForm(`<label>Category<select><option>Raw Materials</option><option>Transport</option><option>Electricity</option><option>Maintenance</option><option>Fuel</option><option>Other</option></select></label><label>Amount<input value="2500"></label><label class="full">Description<input value="Example operating expense"></label><label>Payment Method<select><option>Bank Transfer</option><option>Cash</option><option>Mobile Money</option></select></label><label>Receipt Ref<input value="RCPT-1002"></label>`,'Demo expense saved'))}
function openStockModal(){openModal('Add Inventory Item',demoForm(`<label>Item Name<input value="New Raw Material"></label><label>Type<select><option>Raw Material</option><option>Finished Product</option></select></label><label>Unit<input value="kg"></label><label>Opening Stock<input type="number" value="0"></label><label>Minimum Level<input type="number" value="500"></label><label>Maximum Level<input type="number" value="5000"></label>`,'Demo inventory item added'))}
function openStaffModal(){openModal('Add Staff Account',demoForm(`<label>Full Name<input value="Demo Employee"></label><label>Email<input type="email" value="employee@powerelectrode.com"></label><label>Role<select><option>Production</option><option>Sales</option><option>Storekeeper</option><option>Finance</option><option>Manager</option></select></label><label>Position<input value="Staff"></label><label class="full">Access Note<input value="Access is controlled by role permissions"></label>`,'Demo staff account created'))}
function openQuickAction(){openModal('Quick Entry',`<div style="padding:18px;display:grid;grid-template-columns:1fr 1fr;gap:10px"><button class="btn" onclick="closeModal();openSaleModal()">₵ Record Sale</button><button class="btn" onclick="closeModal();openProductionModal()">⚙ Record Production</button><button class="btn" onclick="closeModal();openExpenseModal()">▥ Add Expense</button><button class="btn" onclick="closeModal();openStockModal()">▦ Stock Entry</button></div>`)}

document.getElementById('loginForm').onsubmit=e=>{e.preventDefault();const email=document.getElementById('email').value.trim().toLowerCase();const pass=document.getElementById('password').value;if(!accounts[email]||pass!=='demo123'){showToast('Use one of the demo accounts and password demo123');return}state.user=accounts[email];state.page='dashboard';loginView.classList.add('hidden');appView.classList.remove('hidden');render()};
document.querySelectorAll('[data-demo]').forEach(b=>b.onclick=()=>{document.getElementById('email').value=b.dataset.demo;document.getElementById('password').value='demo123'});
document.getElementById('logoutBtn').onclick=()=>{state.user=null;appView.classList.add('hidden');loginView.classList.remove('hidden');sidebar.classList.remove('open')};
document.getElementById('menuBtn').onclick=()=>sidebar.classList.add('open');document.getElementById('closeSidebar').onclick=()=>sidebar.classList.remove('open');document.getElementById('modalClose').onclick=closeModal;document.getElementById('modal').onclick=e=>{if(e.target.id==='modal')closeModal()};
document.getElementById('notificationBtn').onclick=()=>{state.page='notifications';render()};
