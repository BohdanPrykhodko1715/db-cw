(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{647:function(a,t,s){"use strict";s.r(t);var r=s(34),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"проєктування-бази-даних"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#проєктування-бази-даних"}},[a._v("#")]),a._v(" Проєктування бази даних")]),a._v(" "),s("h2",{attrs:{id:"модель-бізнес-об-єктів"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#модель-бізнес-об-єктів"}},[a._v("#")]),a._v(" Модель бізнес-об'єктів")]),a._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/XPLBRiCW443tEONbxA8uIcwGLRgg55Nj0QXD95h_15XLRX_CTy03PP4el2SOPXXo5P9mkGpzRbVfGKV9vBFw4fIBQd-xdTL0q8aEXFNL_g479h2kH6SYnD_4YywYFaSoq9BpMFe-ScBfpgSVsahy81Pc8tMyewBbR9Pi6ijYFbXdg6pBHMI2VQV3DynwJ3-cdkBdM4bXRut16MFwniaeCrlUAH-O4FhSQ08zFyr0HHCGr4swO_EJY5zykvNyNmnjvKggOL84R0_IzMpq-KGYBEHRuvcpDdifLSUnbir8uc5lDKtN7CnCHDNPSiXtGqxmRPSJVCzj1PS5q3P6iXC91glWWYr3IO75nZpxjRaOnbsdeU43Ja4KIGh1EL9aYempVuS0jZpqgs7hRuXyd1gubA2zPfFY9xPog5AGOCMh-dAyrCfPclfyFDJk5RAEUvCCqvRsqNfjragIik6W4znAe3VIFUF8z7jO3ZuemT3ldUNcxKi4cASh7Jlrt_W2",alt:"uml diagram"}}),a._v(" "),s("h1",{attrs:{id:"er-модель"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#er-модель"}},[a._v("#")]),a._v(" ER-модель")]),a._v(" "),s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/lLHDJuD04BtlhzXmD2snLmwcH56Rb9P0KQ_hCZMhi93ThR4n_dSNjgLyfeq7zq38l7d3UpF3pgKYGkso526i3oSPo89GmB444OXyorB0tnLM7k2AgNq5oaQuF8ix1yVnuguLZ2ClNBc-v-2Dzx9fGO4RHS_hKBEUtF3sqGrRw7syN8uGFTzTB3ln7sIU7HFQm3jGvHDEtY3JuljM3YaNkIaB3mXAG5B12iLoFe3g1gkTxEdjwjWG-V7F8Wpj4zAy03605O9HE2iyqFl3A2j8gxkZybV3ygCnWIEJTIa5AOCyPNJV7weFsUi56zet4-Ofo3_QQ5GZISOuaqeGbGji9_QDgUnWnlKeE8NrjaxEgkqycxQJupbT6m-YFOs1gO78c9HwMpfkML9MLkr5g9CThE1BzN-xvX9OrxPzPU7fT8gjcNuv30EP3RTc9zGaDhZ8zD-Q7UadjhboQiHGZs3z4v-OPt33hoJL7vsKO5AX4msQBYBJInCoQ9LuQY12S-29la9_0G00",alt:"uml diagram"}}),a._v(" "),s("h2",{attrs:{id:"опис-er-моделі"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#опис-er-моделі"}},[a._v("#")]),a._v(" Опис ER-моделі")]),a._v(" "),s("h3",{attrs:{id:"roles-ролі-у-проекті"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#roles-ролі-у-проекті"}},[a._v("#")]),a._v(" Roles (Ролі у проекті)")]),a._v(" "),s("p",[a._v("Представляє собою ролі, які може приймати користувач у певному проекті.")]),a._v(" "),s("ul",[s("li",[a._v("id: BINARY - унікальний код користувача у проекті")]),a._v(" "),s("li",[a._v("name: VARCHAR - назва ролі")])]),a._v(" "),s("h3",{attrs:{id:"grant-сукупність-прав"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grant-сукупність-прав"}},[a._v("#")]),a._v(" Grant (Сукупність прав)")]),a._v(" "),s("p",[a._v("Це сутність-асоціація, яка зберігає сукупність прав, які має певна роль.")]),a._v(" "),s("ul",[s("li",[a._v("id: BINARY - унікальний код гранту.")])]),a._v(" "),s("h3",{attrs:{id:"permission-права"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permission-права"}},[a._v("#")]),a._v(" Permission (Права)")]),a._v(" "),s("p",[a._v("Права, які можуть додаватися до ролі.")]),a._v(" "),s("ul",[s("li",[a._v("id: BINARY - унікальний код ролі.")]),a._v(" "),s("li",[a._v("permission: VARCHAR - право, яке надається")])]),a._v(" "),s("h3",{attrs:{id:"members-учасники-проекта"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#members-учасники-проекта"}},[a._v("#")]),a._v(" Members (Учасники проекта)")]),a._v(" "),s("p",[a._v("Представляє собою базу з користувачів, які підв'язані до проекту.")]),a._v(" "),s("ul",[s("li",[a._v("id: BINARY - унікальний код користувача")])]),a._v(" "),s("h3",{attrs:{id:"users-користувачі"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#users-користувачі"}},[a._v("#")]),a._v(" Users (Користувачі)")]),a._v(" "),s("p",[a._v("Представляє собою користувачів.")]),a._v(" "),s("ul",[s("li",[a._v("id: BINARY - унікальний код користувача")]),a._v(" "),s("li",[a._v("username: VARCHAR - логін користувача")]),a._v(" "),s("li",[a._v("password: VARCHAR - пароль користувача")]),a._v(" "),s("li",[a._v("fullname: VARCHAR - справжнє ім'я користувача")]),a._v(" "),s("li",[a._v("email: VARCHAR - поштова скринька користувача")])]),a._v(" "),s("h3",{attrs:{id:"projects-проєкти"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#projects-проєкти"}},[a._v("#")]),a._v(" Projects (Проєкти)")]),a._v(" "),s("p",[a._v("Представляє собою проєкт.")]),a._v(" "),s("ul",[s("li",[a._v("id: BINARY - унікальний код")]),a._v(" "),s("li",[a._v("name: VARCHAR - ім'я проєкту")]),a._v(" "),s("li",[a._v("description: VARCHAR - опис проєкту")]),a._v(" "),s("li",[a._v("status: VARCHAR - статус проєкту")])]),a._v(" "),s("h3",{attrs:{id:"task-завдання"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-завдання"}},[a._v("#")]),a._v(" Task (Завдання)")]),a._v(" "),s("p",[a._v("Представляє собою завдання. Має поля:")]),a._v(" "),s("ul",[s("li",[a._v("id: BINARY - унікальний код")]),a._v(" "),s("li",[a._v("name: VARCHAR - назва завдання")]),a._v(" "),s("li",[a._v("description: VARCHAR - опис завдання")]),a._v(" "),s("li",[a._v("status: VARCHAR - статус завдання")]),a._v(" "),s("li",[a._v("price: VARCHAR - ціна виконання завдання")]),a._v(" "),s("li",[a._v("deadline: Date - дата дедлайну")])]),a._v(" "),s("h3",{attrs:{id:"participant-учасники-завдання"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#participant-учасники-завдання"}},[a._v("#")]),a._v(" Participant (Учасники завдання)")]),a._v(" "),s("p",[a._v("Participant - це сутність-асоціація, яка зберігає учасників, які працюють над завданням.")]),a._v(" "),s("ul",[s("li",[a._v("id: BINARY - унікальний код")])])])}),[],!1,null,null,null);t.default=v.exports}}]);