webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const URL = "https://cv19.app:8446/app";
/* harmony export (immutable) */ __webpack_exports__["a"] = URL;

// export const URL = "http://localhost:5000/app"
const FORM_ID = "1";
/* harmony export (immutable) */ __webpack_exports__["b"] = FORM_ID;


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(326),
  /* template */
  __webpack_require__(433),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(38);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* default */].Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },

  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);

      if (user) {
        commit("SET_USER", {
          displayName: user.name,
          email: user.email,
          user_id: user.id,
          phone: user.phone,
          birthday: user.birthday,
          answer: user.answer
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
}));

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 273 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_view_survey__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_view_survey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_view_survey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_save_survey__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_save_survey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_save_survey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_resource__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_form_all_form__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_form_all_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_form_all_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_form_create_form__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_form_create_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_form_create_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_authentication_Login__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_authentication_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_authentication_Login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_authentication_Register__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_authentication_Register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_authentication_Register__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_authentication_RegisterPhone__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_authentication_RegisterPhone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_authentication_RegisterPhone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_authentication_Dashboard__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_authentication_Dashboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__components_authentication_Dashboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_authentication_Disclamer__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_authentication_Disclamer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__components_authentication_Disclamer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_authentication_DoctorApprove__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_authentication_DoctorApprove___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__components_authentication_DoctorApprove__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_all_doctors__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_all_doctors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__components_user_all_doctors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_delete_doctor__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_delete_doctor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__components_user_delete_doctor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_Layout_layout__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_Layout_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__components_Layout_layout__);





// import NewViewSurvey from '@/pages/newView-survey'














// import Dashboard1 from '@/components/authentication/dashboard'




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vue_resource__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_22__components_Layout_layout___default.a,
    children: [{
      path: '/',
      name: 'HomePage',
      component: __WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage___default.a
    }, { path: '/all', name: 'AllClinic', component: __WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic___default.a }, {
      path: '/all-form/:id',
      name: 'AllForm',
      component: __WEBPACK_IMPORTED_MODULE_9__components_form_all_form___default.a,
      children: []
    }, {
      path: '/create-clinic',
      name: 'CreateClinic',
      component: __WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic___default.a
    }, {
      path: '/create-form/:id',
      name: 'CreateForm',
      component: __WEBPACK_IMPORTED_MODULE_10__components_form_create_form___default.a
    }, {
      path: '/edit-clinic/:id',
      name: 'EditClinic',
      component: __WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic___default.a
    }, {
      path: '/delete-clinic/:id',
      name: 'DeleteClinic',
      component: __WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic___default.a
    }, {
      path: '/create_Survey/:id',
      name: 'CreateSurvey',
      component: __WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey___default.a
    }, {
      path: '/view-survey/:id',
      name: 'ViewSurvey',
      component: __WEBPACK_IMPORTED_MODULE_3__pages_view_survey___default.a
    }, {
      path: '/save-survey/:id',
      name: 'SaveSurvey',
      component: __WEBPACK_IMPORTED_MODULE_4__pages_save_survey___default.a
    }, {
      path: '/login',
      name: 'login',
      component: __WEBPACK_IMPORTED_MODULE_14__components_authentication_Login___default.a
    }, {
      path: '/register',
      name: 'Register',
      component: __WEBPACK_IMPORTED_MODULE_15__components_authentication_Register___default.a
    }, {
      path: '/register-phone',
      name: 'RegisterPhone',
      component: __WEBPACK_IMPORTED_MODULE_16__components_authentication_RegisterPhone___default.a,
      props: route => ({
        phone: route.query.phone
      })
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: __WEBPACK_IMPORTED_MODULE_17__components_authentication_Dashboard___default.a
    }, {
      path: '/disclamer',
      name: 'Disclamer',
      component: __WEBPACK_IMPORTED_MODULE_18__components_authentication_Disclamer___default.a
    },
    // {
    //   path: '/newViewSurvey',
    //   name: 'NewViewSurvey',
    //   component: NewViewSurvey
    // },
    {
      path: '/doctorapprove',
      name: 'DoctorApprove',
      component: __WEBPACK_IMPORTED_MODULE_19__components_authentication_DoctorApprove___default.a
    }, {
      path: '/all-doctor',
      name: 'AllDoctor',
      component: __WEBPACK_IMPORTED_MODULE_20__components_user_all_doctors___default.a
    }, {
      path: '/delete-doctor/:id',
      name: 'DeleteDoctor',
      component: __WEBPACK_IMPORTED_MODULE_21__components_user_delete_doctor___default.a
    }, {
      path: '/twilioex',
      name: 'TwilioEX',
      component: __WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX___default.a
    }]

  }]
}));

/***/ }),
/* 281 */,
/* 282 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(369)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(309),
  /* template */
  __webpack_require__(412),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

// import navbar from "./components/authentication/Navbar";

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  components: {
    // navbar,
  }
});

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Header"
});

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Punny from './Punny';

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      clinics: [],
      originalClinics: [],
      clinicSearch: ""
    };
  },
  mounted: function () {
    this.fetchClinicData();
  },
  methods: {
    fetchClinicData: function () {
      this.$http.get(__WEBPACK_IMPORTED_MODULE_0__variables_js__["a" /* URL */] + "/clinic").then(response => {
        this.clinics = response.body;
        this.originalClinics = this.clinics;
        //   for(var i = 0; i < this.clinics.length; i++) {
        //       this.clinics[i].date_updated = new Date(this.clinics[i].date_updated).toString();
        //       this.clinics[i].date_created = new Date(this.clinics[i].date_created).toString();
        //   }
      }, response => {});
    },
    searchClinics: function () {
      if (this.clinicSearch == "") {
        this.clinics = this.originalClinics;
        return;
      }
      var searchedClinics = [];
      for (var i = 0; i < this.originalClinics.length; i++) {
        var clinicTitle = this.originalClinics[i]["name"].toLowerCase();
        if (clinicTitle.indexOf(this.clinicSearch.toLowerCase()) >= 0) {
          searchedClinics.push(this.originalClinics[i]);
        }
      }
      this.clinics = searchedClinics;
    }
  }
});

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      advices: [{
        key: "Message to users",
        short: "Team EnSofia built this application to help you understand the CDC ...",
        text: "Team EnSofia built this application to help you understand the CDC (Center for Disease Control) guidelines as they apply to you. Our team is advised by USA certified physicians and technologies. This app is NOT a substitute for professional medical advice, diagnosis, or treatment. Always consult a medical professional for serious symptoms or emergencies.You will be presented with CDC questions and upon submitting your response, you will receive an SMS with a code, and second SMS with a link. In order to read your customized report, you will need to log in using your mobile phone number, the code sent to you, and a PIN number you chose. You can download your report and use it when talking to your doctor or physician.Your privacy is very important to us - we are in the same boat. We will not ask for your name, but you can provide it in an optional field. We will never sell your individual data or use it. We only use the aggregate data from all users together. Your data is secure on our website and encrypted in our database.If you would like to donate to this cause, please contact us.",
        show: true,
        image: "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/patient.jpg"
      }, {
        key: "Message to healthcare system",
        short: "This system is offered free to any clinic that wants to use it ...",
        text: "This system is offered free to any clinic that wants to use it. We will ask for a donation to cover third party expenses, such as hosting and telephony charges. This system is part of a bigger platform; it can be used for your screening and you can customize the questions based on specifics that you choose. From the platform, you can obtain all of the data analytics to help you with your health population management. With this platform, you have all the tools to connect with customers and patients, as well as within and among your own staff via phone, video, SMS, and other methods.In addition, you can connect to your EHR via HL7 V2 or HL7 FHIR.",
        show: true,
        image: "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/clinic.png"
      }, {
        key: "Message to doctors and physicians",
        short: "If you would like to volunteer towards our efforts by analyzing aggregate data ...",
        text: "If you would like to volunteer towards our efforts by analyzing aggregate data that we provide or providing your clinic’s services to some users (you determine, when, how many etc.), please contact us.",
        show: true,
        image: "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/doctor.png"
      }, {
        key: "Message to providers and partners",
        short: "This system is provided for free to users and clinics, except for donations ...",
        text: "This system is provided for free to users and clinics, except for donations. We invite you to collaborate with us by sharing your resources with EnSofia. Together, we can offer your group’s services to a wider user’s base. This also requested of technology providers and partners on a voluntary basis",
        show: true,
        image: "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/partner.jpg"
      }]
    };
  },
  methods: {
    changeShow: function (idx) {
      this.advices[idx].show = !this.advices[idx].show;
    }
  }
});

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_Navbar__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__authentication_Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__footer__);
//
//
//
//
//
//
//
//
//
//
//





// Vue.component("ContentWrapper", ContentWrapper);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Header: __WEBPACK_IMPORTED_MODULE_0__Header___default.a,
    navbar: __WEBPACK_IMPORTED_MODULE_1__authentication_Navbar___default.a,
    Footer: __WEBPACK_IMPORTED_MODULE_2__footer___default.a
  }
});

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(38);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapGetters */])({
    user: "user"
  }))
});

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(38);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapGetters */])({
    user: "user"
  }))
});

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_phone_number_input__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_phone_number_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_phone_number_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_phone_number_input_dist_vue_phone_number_input_css__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_phone_number_input_dist_vue_phone_number_input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_phone_number_input_dist_vue_phone_number_input_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_tel_input__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__variables__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__(53);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_3_vue__["default"].component("vue-phone-number-input", __WEBPACK_IMPORTED_MODULE_1_vue_phone_number_input___default.a);



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueTelInput: __WEBPACK_IMPORTED_MODULE_4_vue_tel_input__["a" /* VueTelInput */]
  },
  data() {
    return {
      form: {
        phone: "",
        pin: "",
        otp: "",
        code: ""
      },
      haveCode: false,
      appVerifier: "",
      userId: -1,
      userexist: false,
      smssent: false,
      disabled: false,
      bindProps: {
        mode: "international",
        placeholder: "Enter a phone number",
        required: false,
        enabledCountryCode: true,
        enabledFlags: true,
        autocomplete: "off",
        name: "telephone",
        maxLen: 25,
        inputOptions: {
          showDialCode: true
        }
      },
      error: null
    };
  },
  created: function () {
    this.initReCaptcha();
    console.log("hererere");
    console.log(this.appVerifier);
  },
  methods: {
    sendOtp() {
      if (this.form.phone.length < 10) {
        alert("Invalid Phone Number Format !");
      } else {
        //
        let phoneNumber = this.form.phone;
        //
        let appVerifier = this.appVerifier;
        //
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(function (confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;

          //
          alert("SMS sent");
        }).catch(function (error) {
          // Error; SMS not sent
          // ...
          alert("Error ! SMS not sent");
        });
      }
    },
    countryChanged(country) {
      this.countryCode = country.dialCode;
      console.log(country);
    },
    initReCaptcha() {
      setTimeout(() => {
        let vm = this;
        window.recaptchaVerifier = new __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth.RecaptchaVerifier("recaptcha-container", {
          size: "invisible",
          callback: function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          "expired-callback": function () {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          }
        });
        //
        this.appVerifier = window.recaptchaVerifier;
      }, 1000);
    },
    verifyOtp() {
      if (this.form.phone.length < 10) {
        alert("Invalid Phone Number/OTP Format !");
      } else {
        //
        let vm = this;
        let code = this.form.otp;
        //
        window.confirmationResult.confirm(code).then(function (result) {
          vm.setUserCode();
          // ...
          //route to set password !
        }).catch(function (error) {
          // User couldn't sign in (bad verification code?)
          // ...
        });
      }
    },
    submit() {
      this.disabled = true;
      this.login();
    },
    setUserCode: function () {
      var formData = new FormData();
      let vm = this;
      const axios = __webpack_require__(46).default;

      if (this.notifications) this.notifications = [];
      if (this.form.phone) axios.put(__WEBPACK_IMPORTED_MODULE_5__variables__["a" /* URL */] + "/user/" + vm.userId, {
        code: this.form.otp
      }).then(response => {
        vm.login2();
      }, response => {});
    },
    login: function () {
      var formData = new FormData();
      let vm = this;
      const axios = __webpack_require__(46).default;
      if (this.notifications) this.notifications = [];
      axios.get(__WEBPACK_IMPORTED_MODULE_5__variables__["a" /* URL */] + "/logincode?pin=" + vm.form.pin + "&phone=" + vm.form.phone).then(response => {
        if (response.data) {
          console.log(response);
          vm.userexist = true;
          if (response.data.code == "") {
            vm.userId = response.data.id;
            vm.sendOtp();
            vm.haveCode = false;
          } else {
            vm.haveCode = true;
          }
        } else {
          vm.$router.push({
            path: "/register"
          });
        }
      }, response => {});
    },
    login2: function () {
      var formData = new FormData();
      let vm = this;
      const axios = __webpack_require__(46).default;
      if (this.notifications) this.notifications = [];
      axios.get(__WEBPACK_IMPORTED_MODULE_5__variables__["a" /* URL */] + "/login?pin=" + vm.form.pin + "&code=" + vm.form.otp + "&phone=" + vm.form.phone).then(response => {
        if (response.data) {
          console.log(response);
          __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].dispatch("fetchUser", {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            phone: response.data.phone,
            birthday: response.data.birthday,
            answer: response.data.answers && response.data.answers.length > 0 ? response.data.answers[0].answer : ""
          });
          if (response.data.doctor == 0) vm.$router.push({
            path: "/save-survey/" + __WEBPACK_IMPORTED_MODULE_5__variables__["b" /* FORM_ID */]
          });else {
            if (response.data.verify == "true") {
              vm.$router.push({
                path: "/dashboard1"
              });
            } else {
              vm.$router.push({
                path: "/doctorapprove"
              });
            }
          }
        } else {
          vm.$router.push({
            path: "/register"
          });
        }
      }, response => {});
    }
  }
});

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(53);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapGetters */])({
    user: "user"
  })),
  methods: {
    signOut() {
      this.$router.replace({
        name: "login"
      });
      __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].dispatch("fetchUser", null);
    }
  }
});

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_phone_number_input__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_phone_number_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_phone_number_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_phone_number_input_dist_vue_phone_number_input_css__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_phone_number_input_dist_vue_phone_number_input_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_phone_number_input_dist_vue_phone_number_input_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_tel_input__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__variables__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__(53);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_3_vue__["default"].component("vue-phone-number-input", __WEBPACK_IMPORTED_MODULE_1_vue_phone_number_input___default.a);




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueTelInput: __WEBPACK_IMPORTED_MODULE_4_vue_tel_input__["a" /* VueTelInput */]
  },
  data() {
    return {
      show: false,
      disabled: false,
      form: {
        name: "",
        email: "",
        phone: "",
        otp: "",
        doctor: 0,
        birthday: "",
        countryCode: "",
        zipCode: "",

        password: ""
      },
      bindProps: {
        mode: "international",
        placeholder: "Enter a phone number",
        required: false,
        enabledCountryCode: true,
        enabledFlags: true,
        autocomplete: "off",
        name: "telephone",
        maxLen: 25,
        inputOptions: {
          showDialCode: true
        }
      },
      appVerifier: "",
      smssent: false,
      error: null
    };
  },
  created: function () {
    this.initReCaptcha();
    console.log("hererere");
    console.log(this.appVerifier);
  },
  methods: {
    goToLogin() {
      debugger;
      this.$router.push("login");
    },
    sendOtp() {
      if (this.form.phone.length < 10) {
        alert("Invalid Phone Number Format !");
      } else {
        //
        let phoneNumber = this.form.phone;
        //
        let appVerifier = this.appVerifier;
        //
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(function (confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;

          //
          alert("SMS sent");
        }).catch(function (error) {
          // Error; SMS not sent
          // ...
          alert("Error ! SMS not sent");
        });
      }
    },
    countryChanged(country) {
      this.countryCode = country.dialCode;
      console.log(country);
    },
    initReCaptcha() {
      setTimeout(() => {
        let vm = this;
        window.recaptchaVerifier = new __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth.RecaptchaVerifier("recaptcha-container", {
          size: "invisible",
          callback: function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          "expired-callback": function () {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          }
        });
        //
        this.appVerifier = window.recaptchaVerifier;
      }, 1000);
    },
    verifyOtp() {
      if (this.form.phone.length < 10) {
        alert("Invalid Phone Number/OTP Format !");
      } else {
        //
        let vm = this;
        let code = this.form.otp;
        //
        window.confirmationResult.confirm(code).then(function (result) {
          // User signed in successfully.
          var user = result.user;
          console.log(result);
          vm.show = true;
          vm.disabled = true;
          // ...
          //route to set password !
        }).catch(function (error) {
          // User couldn't sign in (bad verification code?)
          // ...
        });
      }
    },
    submit() {
      this.addUser();
    },
    addUser: function () {
      let vm = this;
      const axios = __webpack_require__(46).default;
      if (this.notifications) this.notifications = [];
      if (this.form.phone) axios.post(__WEBPACK_IMPORTED_MODULE_5__variables__["a" /* URL */] + "/user", {
        name: this.form.name,
        phone: this.form.phone,
        email: this.form.email,
        zipCode: this.form.zipCode,
        pin: this.form.password,
        code: this.form.otp,
        birthday: this.form.birthday,
        doctor: this.form.doctor,
        verify: "false"
      }).then(response => {
        console.log(response.data);
        __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].dispatch("fetchUser", {
          id: response.data,
          name: vm.form.name,
          email: vm.form.email
        });
        if (vm.form.doctor == 0) vm.$router.push({ path: "/view-survey/" + __WEBPACK_IMPORTED_MODULE_5__variables__["b" /* FORM_ID */] });else vm.$router.push({ path: "/doctorapprove" });
      }, response => {});
    }
  }
});

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      form: { phone: '' },
      appVerifier: ''

    };
  },
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapGetters */])({
    user: "user"
  })),
  mounted: function () {
    this.initReCaptcha();
    console.log("hererere");
    console.log(this.appVerifier);
  },
  methods: {
    sendOtp(phone) {
      if (phone.length < 10) {
        alert("Invalid Phone Number Format !");
      } else {
        //
        let phoneNumber = phone;
        //
        let appVerifier = this.appVerifier;
        //
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(function (confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;

          //
          alert("SMS sent");
        }).catch(function (error) {
          // Error; SMS not sent
          // ...
          alert("Error ! SMS not sent");
        });
      }
    },
    countryChanged(country) {
      this.countryCode = country.dialCode;
      console.log(country);
    },
    initReCaptcha() {
      setTimeout(() => {
        let vm = this;
        window.recaptchaVerifier = new __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth.RecaptchaVerifier("recaptcha-container", {
          size: "invisible",
          callback: function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          "expired-callback": function () {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          }
        });
        //
        this.appVerifier = window.recaptchaVerifier;
      }, 1000);
    }

  }
});

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Punny from './Punny';

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            clinics: [],
            originalClinics: [],
            clinicSearch: ''
        };
    },
    mounted: function () {
        this.fetchClinicData();
    },
    methods: {
        fetchClinicData: function () {
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__variables_js__["a" /* URL */] + '/clinic').then(response => {
                this.clinics = response.body;
                this.originalClinics = this.clinics;
                //   for(var i = 0; i < this.clinics.length; i++) {
                //       this.clinics[i].date_updated = new Date(this.clinics[i].date_updated).toString();
                //       this.clinics[i].date_created = new Date(this.clinics[i].date_created).toString();
                //   }
            }, response => {});
        },
        searchClinics: function () {
            if (this.clinicSearch == '') {
                this.clinics = this.originalClinics;
                return;
            }
            var searchedClinics = [];
            for (var i = 0; i < this.originalClinics.length; i++) {
                var clinicTitle = this.originalClinics[i]['name'].toLowerCase();
                if (clinicTitle.indexOf(this.clinicSearch.toLowerCase()) >= 0) {
                    searchedClinics.push(this.originalClinics[i]);
                }
            }
            this.clinics = searchedClinics;
        }
    }
});

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            clinic: {},
            notifications: [],
            image: ''
        };
    },
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.clinic.file = files[0];
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = e => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.image = '';
        },

        addClinic: function () {
            var formData = new FormData();
            formData.append('name', this.clinic.name);
            formData.append('other_info', this.clinic.other_info);
            formData.append('logo', 'this.clinic.file');

            if (this.notifications) this.notifications = [];
            if (this.clinic.name) this.$http.post(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/clinic', formData, {
                headers: {
                    'enctype': 'multipart/form-data'
                }
            }).then(response => {
                this.notifications.push({
                    type: 'success',
                    message: 'Clinic created successfully'
                });
            }, response => {
                this.notifications.push({
                    type: 'error',
                    message: 'Clinic not created'
                });
            });
        }
    },
    components: {
        'notification': __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default.a
    }
});

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            clinic: {},
            notifications: []
        };
    },

    mounted: function () {
        this.getClinic();
    },

    methods: {
        getClinic: function () {
            this.$http.get(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/clinic/' + this.$route.params.id).then(response => {
                this.clinic = response.body;
            }, response => {});
        },

        deleteClinic: function () {
            if (this.notifications) this.notifications = [];
            this.$http.delete(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/clinic/' + this.$route.params.id, this.clinic, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                this.$router.push({ name: 'AllClinic' });
            }, response => {
                this.notifications.push({
                    type: 'danger',
                    message: 'Clinic could not deleted'
                });
            });
        }
    },

    components: {
        'notification': __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default.a
    }
});

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            clinic: {},
            notifications: [],
            image: ''
        };
    },
    mounted: function () {
        this.getClinic();
    },
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.clinic.file = files[0];
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = e => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.image = '';
        },
        getClinic: function () {
            this.$http.get(__WEBPACK_IMPORTED_MODULE_1__variables__["a" /* URL */] + '/clinic/' + this.$route.params.id).then(response => {
                this.clinic = response.body;
                this.image = this.clinic.thumbnail;
            }, response => {});
        },
        editClinic: function () {
            var formData = new FormData();
            formData.append('name', this.clinic.name);
            formData.append('other_info', this.clinic.other_info);
            formData.append('logo', 'this.clinic.file');
            if (this.notifications) this.notifications = [];
            if (this.image) this.$http.put(__WEBPACK_IMPORTED_MODULE_1__variables__["a" /* URL */] + '/clinic/' + this.$route.params.id, formData, {
                headers: {
                    // 'Content-Type' : 'multipart/form-data'
                    'enctype': 'multipart/form-data'
                }
            }).then(response => {
                this.notifications.push({
                    type: 'success',
                    message: 'Clinic updated successfully'
                });
            }, response => {
                this.notifications.push({
                    type: 'error',
                    message: 'Clinic not updated'
                });
            });
        }
    },
    components: {
        'notification': __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default.a
    }
});

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuedraggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Punny from './Punny';


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        draggable: __WEBPACK_IMPORTED_MODULE_0_vuedraggable___default.a
    },
    data() {
        return {
            forms: [],
            originalForms: [],
            formSearch: '',
            id: '',
            dragging: false
        };
    },

    mounted: function () {
        this.fetchFormData();
    },
    methods: {
        fetchFormData: function () {
            this.$http.get(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/form?clinic_id=' + this.$route.params.id).then(response => {
                this.forms = response.body;
                this.originalForms = this.forms;
                for (var i = 0; i < this.forms.length; i++) {
                    this.forms[i].date_updated = new Date(this.forms[i].date_updated).toString();
                    this.forms[i].create_date = new Date(this.forms[i].create_date).toString();
                }
            }, response => {});
        },
        searchForms: function () {
            if (this.formSearch == '') {
                this.forms = this.originalForms;
                return;
            }
            var searchedForms = [];
            for (var i = 0; i < this.originalForms.length; i++) {
                var formTitle = this.originalForms[i]['name_en'].toLowerCase();
                if (formTitle.indexOf(this.formSearch.toLowerCase()) >= 0) {
                    searchedForms.push(this.originalForms[i]);
                }
            }
            this.forms = searchedForms;
        }
    }
});

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            form: {},
            notifications: [],
            image: ''
        };
    },
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.form.file = files[0];
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = e => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.image = '';
        },

        addForm: function () {
            var formData = new FormData();

            formData.append('name_en', this.form.name_en);
            formData.append('description_en', this.form.description_en);
            formData.append('status', 'suspended');
            formData.append('category', this.form.category);
            formData.append('form_type', this.form.form_type);
            formData.append('clinic_id', this.$route.params.clinic_id);
            formData.append('image_url', 'this.form.file');
            formData.append('design_path', 'this.form.file');

            if (this.notifications) this.notifications = [];
            if (this.form.name_en) this.$http.post(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/form', formData, {
                headers: {
                    'enctype': 'multipart/form-data'
                }
            }).then(response => {
                this.notifications.push({
                    type: 'success',
                    message: 'Form created successfully'
                });
            }, response => {
                this.notifications.push({
                    type: 'error',
                    message: 'Form not created'
                });
            });
        }
    },
    components: {
        'notification': __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default.a
    }
});

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    methods: {
        getNotificationClass: function (notification) {
            return 'alert alert-' + notification.type;
        }
    },
    props: ['notifications']
});

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Punny from './Punny';

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      users: [],
      originalusers: [],
      userSearch: ""
    };
  },
  mounted: function () {
    this.fetchUserData();
  },
  methods: {
    fetchUserData: function () {
      this.$http.get(__WEBPACK_IMPORTED_MODULE_0__variables_js__["a" /* URL */] + "/doctors").then(response => {
        this.users = response.body;
        this.originalusers = this.users;
        //   for(var i = 0; i < this.users.length; i++) {
        //       this.users[i].date_updated = new Date(this.users[i].date_updated).toString();
        //       this.users[i].date_created = new Date(this.users[i].date_created).toString();
        //   }
      }, response => {});
    },
    approveDoctor: function (id, index) {
      var formData = new FormData();
      let vm = this;

      formData.append("verify", "true");

      if (this.notifications) this.notifications = [];

      this.$http.put(__WEBPACK_IMPORTED_MODULE_0__variables_js__["a" /* URL */] + "/user/" + id, formData, {
        headers: {
          enctype: "multipart/form-data"
        }
      }).then(response => {
        vm.users.splice(index, 1);
      }, response => {});
    },
    searchusers: function () {
      if (this.userSearch == "") {
        this.users = this.originalusers;
        return;
      }
      var searchedusers = [];
      for (var i = 0; i < this.originalusers.length; i++) {
        var userTitle = this.originalusers[i]["name"].toLowerCase();
        if (userTitle.indexOf(this.userSearch.toLowerCase()) >= 0) {
          searchedusers.push(this.originalusers[i]);
        }
      }
      this.users = searchedusers;
    }
  }
});

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            user: {},
            notifications: []
        };
    },

    mounted: function () {
        this.getUser();
    },

    methods: {
        getUser: function () {
            this.$http.get(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/user/' + this.$route.params.id).then(response => {
                this.user = response.body;
            }, response => {});
        },

        deleteUser: function () {
            if (this.notifications) this.notifications = [];
            this.$http.delete(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/user/' + this.$route.params.id, this.user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                this.$router.push({ name: 'AllUser' });
            }, response => {
                this.notifications.push({
                    type: 'danger',
                    message: 'Doctor could not deleted'
                });
            });
        }
    },

    components: {
        'notification': __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default.a
    }
});

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import store from "../../store/index";

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  mounted() {
    $(function () {
      var speakerDevices = document.getElementById("speaker-devices");
      var ringtoneDevices = document.getElementById("ringtone-devices");
      var outputVolumeBar = document.getElementById("output-volume");
      // var inputVolumeBar = document.getElementById("input-volume");
      // var volumeIndicators = document.getElementById("volume-indicators");

      var device;
      var self = this;
      log("Requesting Capability Token...");
      $.getJSON("https://scintillating-power-4256.twil.io/capability-token").then(function (data) {
        log("Got a token.");
        console.log("Token: " + data.token);
        //   let twiml = new Twilio.twiml.VoiceResponse();

        // Setup Twilio.Device
        device = new Twilio.Device(data.token, {
          // Set Opus as our preferred codec. Opus generally performs better, requiring less bandwidth and
          // providing better audio quality in restrained network conditions. Opus will be default in 2.0.
          codecPreferences: ["opus", "pcmu"],
          // Use fake DTMF tones client-side. Real tones are still sent to the other end of the call,
          // but the client-side DTMF tones are fake. This prevents the local mic capturing the DTMF tone
          // a second time and sending the tone twice. This will be default in 2.0.
          fakeLocalDTMF: true,
          // Use `enableRingingState` to enable the device to emit the `ringing`
          // state. The TwiML backend also needs to have the attribute
          // `answerOnBridge` also set to true in the `Dial` verb. This option
          // changes the behavior of the SDK to consider a call `ringing` starting
          // from the connection to the TwiML backend to when the recipient of
          // the `Dial` verb answers.
          enableRingingState: true
        });

        device.on("ready", function (device) {
          log("Twilio.Device Ready!");
          document.getElementById("call-controls").style.display = "block";
        });

        device.on("error", function (error) {
          log("Twilio.Device Error: " + error.message);
        });

        device.on("connect", function (conn) {
          log("Successfully established call!");
          document.getElementById("button-call").style.display = "none";
          document.getElementById("button-hangup").style.display = "inline";
          // volumeIndicators.style.display = "block";
          // bindVolumeIndicators(conn);
        });

        device.on("disconnect", function (conn) {
          log("Call ended.");
          document.getElementById("button-call").style.display = "inline";
          document.getElementById("button-hangup").style.display = "none";
          // volumeIndicators.style.display = "none";
        });

        device.on("incoming", function (conn) {
          log("Incoming connection from " + conn.parameters.From);
          var archEnemyPhoneNumber = "+12093373517";

          if (conn.parameters.From === archEnemyPhoneNumber) {
            conn.reject();
            log("It's your nemesis. Rejected call.");
          } else {
            // accept the incoming connection and start two-way audio
            conn.accept();
          }
        });

        // setClientNameUI(data.identity);

        device.audio.on("deviceChange", updateAllDevices.bind(device));

        // Show audio selection UI if it is supported by the browser.
        if (device.audio.isOutputSelectionSupported) {
          document.getElementById("output-selection").style.display = "block";
        }
      }).catch(function (err) {
        console.log(err);
        log("Could not get a token from server!");
      });

      // Bind button to make call
      document.getElementById("button-call").onclick = function () {
        // get the phone number to connect the call to
        var params = {
          To: document.getElementById("phone-number").value
        };

        console.log("Calling " + params.To + "...");
        if (device) {
          var outgoingConnection = device.connect(params);
          outgoingConnection.on("ringing", function () {
            log("Ringing...");
          });
        }
      };
      var self = this;
      // Bind button to hangup call
      document.getElementById("button-hangup").onclick = function () {
        log("Hanging up...");
        if (device) {
          device.disconnectAll();
          // store.state.TwiliostartCall = false;
        }
      };

      // document.getElementById("get-devices").onclick = function() {
      //   navigator.mediaDevices
      //     .getUserMedia({ audio: true })
      //     .then(updateAllDevices.bind(device));
      // };

      speakerDevices.addEventListener("change", function () {
        var selectedDevices = [].slice.call(speakerDevices.children).filter(function (node) {
          return node.selected;
        }).map(function (node) {
          return node.getAttribute("data-id");
        });

        device.audio.speakerDevices.set(selectedDevices);
      });

      ringtoneDevices.addEventListener("change", function () {
        var selectedDevices = [].slice.call(ringtoneDevices.children).filter(function (node) {
          return node.selected;
        }).map(function (node) {
          return node.getAttribute("data-id");
        });

        device.audio.ringtoneDevices.set(selectedDevices);
      });

      // function bindVolumeIndicators(connection) {
      //   connection.on("volume", function(inputVolume, outputVolume) {
      //     var inputColor = "red";
      //     if (inputVolume < 0.5) {
      //       inputColor = "green";
      //     } else if (inputVolume < 0.75) {
      //       inputColor = "yellow";
      //     }

      //     // inputVolumeBar.style.width = Math.floor(inputVolume * 300) + "px";
      //     // inputVolumeBar.style.background = inputColor;

      //     var outputColor = "red";
      //     if (outputVolume < 0.5) {
      //       outputColor = "green";
      //     } else if (outputVolume < 0.75) {
      //       outputColor = "yellow";
      //     }

      //     outputVolumeBar.style.width = Math.floor(outputVolume * 300) + "px";
      //     outputVolumeBar.style.background = outputColor;
      //   });
      // }

      function updateAllDevices() {
        updateDevices(speakerDevices, device.audio.speakerDevices.get());
        updateDevices(ringtoneDevices, device.audio.ringtoneDevices.get());

        // updateDevices(speakerDevices, );
        // updateDevices(ringtoneDevices, device);
      }

      // Update the available ringtone and speaker devices
      function updateDevices(selectEl, selectedDevices) {
        selectEl.innerHTML = "";

        device.audio.availableOutputDevices.forEach(function (device, id) {
          var isActive = selectedDevices.size === 0 && id === "default";
          selectedDevices.forEach(function (device) {
            if (device.deviceId === id) {
              isActive = true;
            }
          });

          var option = document.createElement("option");
          option.label = device.label;
          option.setAttribute("data-id", id);
          if (isActive) {
            option.setAttribute("selected", "selected");
          }
          selectEl.appendChild(option);
        });
      }

      // Activity log
      function log(message) {
        var logDiv = document.getElementById("log");
        logDiv.innerHTML += "<p>&gt;&nbsp;" + message + "</p>";
        logDiv.scrollTop = logDiv.scrollHeight;
      }

      // Set the client name in the UI
      function setClientNameUI(clientName) {
        var div = document.getElementById("client-name");
        div.innerHTML = "Your client name: <strong>" + clientName + "</strong>";
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(122)))

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_variables__ = __webpack_require__(17);
//
//
//
//
//
//
//

// import Punny from './Punny';
// import * as SurveyCreator from "survey-creator";

//import "survey-creator/survey-creator.css";

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "survey-creator",
    props: {
        form_id: Number
    },
    data() {
        return {
            old: "",
            surveyCreator: ""
        };
    },

    mounted: function () {
        let options = {
            showEmbededSurveyTab: true,
            showTranslationTab: true,
            showLogicTab: true,
            showState: true,
            haveCommercialLicense: true,
            showOptions: true,
            showSave: true
        };

        if (!SurveyCreator) SurveyCreator = {};
        this.surveyCreator = new SurveyCreator.SurveyCreator("surveyCreatorContainer", options);
        this.getForm(this.surveyCreator);
        // surveyCreator.saveSurveyFunc = this.saveMySurvey();
    },
    methods: {
        saveMySurvey: function () {
            console.log(this.surveyCreator.text);
            // console.log(JSON.stringify(this.text));

            var vm = this;
            $.ajax({
                url: __WEBPACK_IMPORTED_MODULE_0__components_variables__["a" /* URL */] + "/form/" + __WEBPACK_IMPORTED_MODULE_0__components_variables__["b" /* FORM_ID */],
                type: "PUT",
                data: {
                    questions: vm.surveyCreator.text
                },
                success: function (data) {
                    callback(saveNo, true);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    callback(saveNo, false);
                    alert(thrownError);
                }
            });
        },
        getForm: function (json) {
            var formData = new FormData();
            var vm = this;
            var oldv = json;
            if (this.notifications) this.notifications = [];
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__components_variables__["a" /* URL */] + "/form/" + __WEBPACK_IMPORTED_MODULE_0__components_variables__["b" /* FORM_ID */], formData, {
                headers: {
                    enctype: "multipart/form-data"
                }
            }).then(response => {
                console.log(response.data.questions);

                json.text = response.data.questions;
            }, response => {
                this.notifications.push({
                    type: "error",
                    message: "Form not created"
                });
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(122)))

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_variables__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(38);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// import * as SurveyPDF from "survey-pdf";

var Survey = __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Survey"];
Survey.cssType = "bootstrap";

// var myloc = Survey.surveyLocalization.locales["localename"];
// myloc.completingSurvey = "Your text on completing survey";




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* mapGetters */])({
    user: "user"
  })),
  components: {
    Survey
  },
  mounted: function () {
    this.fetchFormData();
    console.log(this.user.data.birthDate);
    this.calculateAge();
  },
  methods: {
    fetchFormData: function () {
      var id = this.$route.params.id;
      //this.user.data.user_id
      var user_id = 18;
      var vm = this;
      this.$http.get(__WEBPACK_IMPORTED_MODULE_2__components_variables__["a" /* URL */] + "/form/" + __WEBPACK_IMPORTED_MODULE_2__components_variables__["b" /* FORM_ID */]).then(response => {
        vm.question = response.body;
        vm.json = response.body.questions;
        console.log(this.json);

        var model = new __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Model"](JSON.parse(response.body.questions));
        model.completeText = "Submit";
        model.title = response.body.name_en;
        let options = {
          haveCommercialLicense: true
        };
        // var myloc =model.csurveyLocalization.locales["localename"];
        // myloc.completingSurvey = "Your text on completing survey";
        console.log(model);
        vm.survey = model;
        vm.savePDF = function () {
          var surveyPDF = new SurveyPDF.SurveyPDF(JSON.parse(response.body.questions), options);
          surveyPDF.haveCommercialLicense = true;
          console.log(vm.age);
          var learnQuestion = model.getQuestionByName("pdf");
          learnQuestion.value = true;
          var learnQuestion = model.getQuestionByName("age65");
          learnQuestion.value = true;
          console.log(vm.user.data.phone);
          learnQuestion.text = surveyPDF.data = vm.user.data.answer;
          vm.pdfs.forEach(pdf => {
            vm.downloadWithVueResource(pdf.url, pdf.name);
          });
          // render custome pdf
          surveyPDF.onRenderQuestion.add(function (survey, options) {
            //change all boolean Questions red Yes and Blue No
            if (options.question.getType() === "boolean") {
              console.log(options.question.value);
              var htmlQuestion = __WEBPACK_IMPORTED_MODULE_0_survey_vue__["QuestionFactory"].Instance.createQuestion("html", "html_question");

              if (options.question.value) {
                //98b4d4
                htmlQuestion.html = '<font color="#98b4d4">Yes</font>';
              } else {
                //7fcdcd
                htmlQuestion.html = '<font color="#7fcdcd">No</font>';
              }

              var flatHtml = options.repository.create(survey, htmlQuestion, options.controller, "html");
              var commentBricks = options.bricks[0].unfold();
              var commentBrick = commentBricks.pop();
              var point = SurveyPDF.SurveyHelper.createPoint(commentBrick, true, true);
              return new Promise(function (resolve) {
                flatHtml.generateFlats(point).then(function (htmlBricks) {
                  options.bricks = commentBricks;
                  options.bricks.push(...htmlBricks);
                  resolve();
                });
              });
            }

            if (options.question.inputType === "date") {
              console.log(options.question.value);
              var htmlQuestion = __WEBPACK_IMPORTED_MODULE_0_survey_vue__["QuestionFactory"].Instance.createQuestion("html", "html_question");

              htmlQuestion.html = '<font color="#98b4d4">' + options.question.value + "</font>";

              var flatHtml = options.repository.create(survey, htmlQuestion, options.controller, "html");
              var commentBricks = options.bricks[0].unfold();
              var commentBrick = commentBricks.pop();
              var point = SurveyPDF.SurveyHelper.createPoint(commentBrick, true, true);
              return new Promise(function (resolve) {
                flatHtml.generateFlats(point).then(function (htmlBricks) {
                  options.bricks = commentBricks;
                  options.bricks.push(...htmlBricks);
                  resolve();
                });
              });
            }

            if (options.question.name === "name") {
              var htmlQuestion = __WEBPACK_IMPORTED_MODULE_0_survey_vue__["QuestionFactory"].Instance.createQuestion("html", "html_question");

              htmlQuestion.html = '<h3><font color="#2B60DE">User Phone #:' + vm.user.data.phone + "</font></h3>";

              var flatHtml = options.repository.create(survey, htmlQuestion, options.controller, "html");
              var commentBricks = options.bricks[0].unfold();
              var commentBrick = commentBricks.pop();
              var point = SurveyPDF.SurveyHelper.createPoint(commentBrick, true, true);
              return new Promise(function (resolve) {
                flatHtml.generateFlats(point).then(function (htmlBricks) {
                  options.bricks = commentBricks;
                  options.bricks.push(...htmlBricks);
                  resolve();
                });
              });
            }
          });

          surveyPDF.save();
        };
        var submit = function () {
          console.log(id);
          console.log(model.data);
          console.log(JSON.stringify(model.data));
          vm.notComplete = false;

          $.ajax({
            url: __WEBPACK_IMPORTED_MODULE_2__components_variables__["a" /* URL */] + "/answer",
            type: "POST",
            data: {
              answer: JSON.stringify(model.data),
              form_id: id,
              user_id: user_id
            },
            success: function (data) {
              callback(saveNo, true);
            },
            error: function (xhr, ajaxOptions, thrownError) {
              callback(saveNo, false);
              alert(thrownError);
            }
          });
        };
        model.onComplete.add(submit);
      }, response => {});
    },
    forceFileDownload(pdfurl, name) {
      const link = document.createElement("a");
      link.href = pdfurl;
      link.setAttribute("download", name + ".pdf"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    calculateAge: function () {
      let currentDate = new Date();
      let birthDate = new Date(this.user.data.birthDate);
      let difference = currentDate - birthDate;
      let age = Math.floor(difference / 31557600000);
      this.age = age;
    },
    downloadWithVueResource(pdfurl, name) {
      this.$http({
        method: "get",
        url: pdfurl,
        responseType: "arraybuffer"
      }).then(response => {
        this.forceFileDownload(pdfurl, name);
      }).catch(() => console.log("error occured"));
    }
  },
  data() {
    return {
      age: 0,
      json: {},
      survey: {},
      savePDF: {},
      question: {},
      notComplete: true,
      pdfs: [{
        url: "http://www.pdf995.com/samples/pdf.pdf",
        name: "test"
      }]
    };
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(122)))

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_variables__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(38);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import SurveyCreator from "../components/SurveyCreator";


var Survey = __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Survey"];
Survey.cssType = "bootstrap";


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* mapGetters */])({
    user: "user"
  })),

  mounted: function () {
    this.fetchFormData();
  },
  components: {
    Survey
  },
  methods: {
    fetchFormData: function () {
      var id = __WEBPACK_IMPORTED_MODULE_2__components_variables__["b" /* FORM_ID */];
      var user_id = this.user.data.user_id;
      var vm = this;
      this.$http.get(__WEBPACK_IMPORTED_MODULE_2__components_variables__["a" /* URL */] + "/form/" + __WEBPACK_IMPORTED_MODULE_2__components_variables__["b" /* FORM_ID */]).then(response => {
        vm.question = response.body;
        vm.json = response.body.questions;
        console.log(this.json);

        var model = new __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Model"](JSON.parse(response.body.questions));
        model.completeText = "Submit";
        model.title = response.body.name_en;

        // var myloc =model.csurveyLocalization.locales["localename"];
        // myloc.completingSurvey = "Your text on completing survey";
        console.log(model);
        vm.survey = model;

        var submit = function () {
          var learnQuestion = model.getQuestionByName("pdf");
          learnQuestion.value = true;

          vm.notComplete = false;
          const axios = __webpack_require__(46).default;
          axios.post(__WEBPACK_IMPORTED_MODULE_2__components_variables__["a" /* URL */] + "/answer", {
            answer: model.data,
            form_id: __WEBPACK_IMPORTED_MODULE_2__components_variables__["b" /* FORM_ID */],
            user_id: user_id
          }).then(response => {
            console.log(response);
            callback(saveNo, true);
          }, response => {});
        };
        model.onComplete.add(submit);
      }, response => {});
    },
    forceFileDownload(pdfurl, name) {
      const link = document.createElement("a");
      link.href = pdfurl;
      link.setAttribute("download", name + ".pdf"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },

    downloadWithVueResource(pdfurl, name) {
      this.$http({
        method: "get",
        url: pdfurl,
        responseType: "arraybuffer"
      }).then(response => {
        this.forceFileDownload(pdfurl, name);
      }).catch(() => console.log("error occured"));
    }
  },
  data() {
    return {
      age: 0,
      json: {},
      survey: {},
      savePDF: {},
      question: {},
      notComplete: true,
      pdfs: [{ url: "http://www.pdf995.com/samples/pdf.pdf", name: "test" }]
    };
  }
});

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_vue__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_variables__ = __webpack_require__(17);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.options.emulateJSON = true;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.headers.common['Access-Control-Allow-Origin'] = __WEBPACK_IMPORTED_MODULE_7__components_variables__["a" /* URL */];
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.headers.common['Access-Control-Request-Method'] = '*';
// Install BootstrapVue
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_bootstrap_vue__["a" /* BootstrapVue */]);
// // Optionally install the BootstrapVue icon components plugin
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_bootstrap_vue__["b" /* IconsPlugin */]);

const configOptions = {
  apiKey: "AIzaSyBov43YgZIhBH6xLfcRUloec5ORDxF8pLg",
  authDomain: "cv19app.firebaseapp.com",
  databaseURL: "https://cv19app.firebaseio.com",
  projectId: "cv19-fb498",
  storageBucket: "",
  messagingSenderId: "",
  appId: "1:990026941051:web:bf71720f51c9092fb898de"
};

__WEBPACK_IMPORTED_MODULE_5_firebase__["initializeApp"](configOptions);

__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().onAuthStateChanged(user => {
  __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].dispatch("fetchUser", user);
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */],
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a },
  template: '<App/>'
});

/***/ }),
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 369 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 370 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 371 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 372 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 373 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 374 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 375 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 376 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 377 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 378 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 379 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 380 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 381 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 382 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(378)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(310),
  /* template */
  __webpack_require__(426),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(382)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(311),
  /* template */
  __webpack_require__(430),
  /* scopeId */
  "data-v-c97a0a38",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(376)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(312),
  /* template */
  __webpack_require__(420),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(381)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(313),
  /* template */
  __webpack_require__(429),
  /* scopeId */
  "data-v-bf9cc140",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(314),
  /* template */
  __webpack_require__(424),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  null,
  /* template */
  __webpack_require__(423),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(315),
  /* template */
  __webpack_require__(432),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(316),
  /* template */
  __webpack_require__(418),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(372)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(317),
  /* template */
  __webpack_require__(415),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(318),
  /* template */
  __webpack_require__(411),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(319),
  /* template */
  __webpack_require__(422),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(379)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(320),
  /* template */
  __webpack_require__(427),
  /* scopeId */
  "data-v-7928bd28",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(371)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(321),
  /* template */
  __webpack_require__(414),
  /* scopeId */
  "data-v-2b5746b1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(322),
  /* template */
  __webpack_require__(409),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(370)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(323),
  /* template */
  __webpack_require__(413),
  /* scopeId */
  "data-v-255ed4e3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(377)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(324),
  /* template */
  __webpack_require__(425),
  /* scopeId */
  "data-v-73e363a8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(374)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(325),
  /* template */
  __webpack_require__(417),
  /* scopeId */
  "data-v-3747d669",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(380)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(327),
  /* template */
  __webpack_require__(428),
  /* scopeId */
  "data-v-7ed90bfa",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(328),
  /* template */
  __webpack_require__(431),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(329),
  /* template */
  __webpack_require__(421),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(373)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(330),
  /* template */
  __webpack_require__(416),
  /* scopeId */
  "data-v-33e66800",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(375)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(331),
  /* template */
  __webpack_require__(419),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(368)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(332),
  /* template */
  __webpack_require__(410),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 409 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "delete-product"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "mt-0 mb-5"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'AllClinic'
      }
    }
  }, [_c('span', {
    staticClass: "material-icons"
  }, [_vm._v("keyboard_backspace")])]), _vm._v(" Delete Clinic " + _vm._s(_vm.clinic.title))], 1), _vm._v(" "), _c('notification', {
    attrs: {
      "notifications": _vm.notifications
    }
  }), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.deleteClinic($event)
      }
    }
  }, [_vm._m(0)])], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('button', {
    staticClass: "btn btn-danger"
  }, [_vm._v("Delete Clinic")])])
}]}

/***/ }),
/* 410 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "view"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.question.name_en))]), _vm._v(" "), (_vm.notComplete == 1) ? _c('h4', [_vm._v("Please answer this questions :")]) : _vm._e(), _vm._v(" "), _c('survey', {
    staticClass: "survey",
    attrs: {
      "survey": _vm.survey,
      "onComplete": _vm.savePDF
    }
  })], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "alert alert-info",
    attrs: {
      "role": "alert"
    }
  }, [_c('p', [_vm._v("\n          This website / application is made by team EnSofia. It is our humble\n          effort to contribute and help the public to aid the tremendous\n          efforts and steps taken by many organizations to flatten the curve.\n        ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', {
    staticClass: "alert-heading"
  }, [_vm._v("What it is?")]), _vm._v(" "), _c('p', [_vm._v("\n          This website is application is built for awareness and sharing\n          information published by the US – Centers for Disease Control and\n          Prevention CDC.gov\n        ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', {
    staticClass: "alert-heading"
  }, [_vm._v("What it is NOT?")]), _vm._v(" "), _c('p', [_vm._v("\n          This is not diagnostic or medical site. You should not use this\n          website or its communications for any medical advice. If you have\n          medical questions, contact your doctor. If you have an emergency\n          call 911.\n        ")])])
}]}

/***/ }),
/* 411 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#F5FBFF"
    }
  }, [_vm._m(0), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-6 login-module"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "doctors_title mb-55"
  }, [_vm._v("Register")]), _vm._v(" "), (_vm.error) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(1), _vm._v("\n             \n            "), _c('vue-tel-input', _vm._b({
    staticClass: "form-control col col-9",
    on: {
      "country-changed": _vm.countryChanged
    },
    model: {
      value: (_vm.form.phone),
      callback: function($$v) {
        _vm.$set(_vm.form, "phone", $$v)
      },
      expression: "form.phone"
    }
  }, 'vue-tel-input', _vm.bindProps, false))], 1), _vm._v(" "), _c('form', {
    attrs: {
      "action": "#"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.submit($event)
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(2), _vm._v("\n               \n              "), (_vm.form.doctor == 0) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.name),
      expression: "form.name"
    }],
    staticClass: "form-control col col-9",
    attrs: {
      "id": "name",
      "type": "name",
      "name": "name",
      "value": "",
      "placeholder": "Enter Your Name",
      "autofocus": ""
    },
    domProps: {
      "value": (_vm.form.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "name", $event.target.value)
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.form.doctor == 1) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.name),
      expression: "form.name"
    }],
    staticClass: "form-control col col-9",
    attrs: {
      "id": "name",
      "type": "name",
      "name": "name",
      "placeholder": "Enter Your Name",
      "value": "",
      "autofocus": "",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "name", $event.target.value)
      }
    }
  }) : _vm._e()]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(3), _vm._v("\n               \n              "), _c('b-form-checkbox', {
    staticClass: "col col-md-9",
    attrs: {
      "name": "check-button",
      "value": 1,
      "unchecked-value": 0,
      "switch": ""
    },
    model: {
      value: (_vm.form.doctor),
      callback: function($$v) {
        _vm.$set(_vm.form, "doctor", $$v)
      },
      expression: "form.doctor"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(4), _vm._v("\n               \n              "), _c('div', {
    staticClass: "form-group col col-9 datepicker"
  }, [_c('b-form-datepicker', {
    attrs: {
      "placeholder": "Enter Your Birthday",
      "id": "birthday-datepicker",
      "required": ""
    },
    model: {
      value: (_vm.form.birthday),
      callback: function($$v) {
        _vm.$set(_vm.form, "birthday", $$v)
      },
      expression: "form.birthday"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(5), _vm._v("\n               \n              "), _c('div', {
    staticClass: "form-group col col-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.email),
      expression: "form.email"
    }],
    staticClass: "form-control",
    attrs: {
      "placeholder": "Enter Your Email",
      "id": "email",
      "type": "email",
      "name": "email",
      "value": "",
      "autofocus": ""
    },
    domProps: {
      "value": (_vm.form.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "email", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(6), _vm._v("\n               \n              "), _c('div', {
    staticClass: "form-group col col-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.password),
      expression: "form.password"
    }],
    staticClass: "form-control",
    attrs: {
      "placeholder": "Enter Your PIN",
      "id": "password",
      "type": "password",
      "name": "password",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "password", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(7), _vm._v("\n                 \n              "), _c('div', {
    staticClass: "form-group col col-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.zipCode),
      expression: "form.zipCode"
    }],
    staticClass: "form-control",
    attrs: {
      "placeholder": "Enter Your zipCode",
      "id": "zipCode",
      "type": "text",
      "name": "zipCode",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.zipCode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "zipCode", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', {
    staticClass: "btn btn-block mt-3 pointers",
    on: {
      "click": _vm.goToLogin
    }
  }, [_vm._v("\n              Already a member? Log in\n            ")])])])])])]), _vm._v(" "), _c('br'), _c('br')])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "service_area"
  }, [_c('div', {
    staticClass: "container p-0"
  }, [_c('div', {
    staticClass: "row no-gutters"
  }, [_c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/pin.png",
      "width": "100"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n              Register and chose 4 digits PIN .You will use it when you log in\n              Please keep your PIN secure\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/anonymous.png",
      "width": "100"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n              For your privacy your name and email address are optional\n            ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/united.png",
      "width": "100"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n              3 different people may register with the same mobile phone\n              number\n            ")])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "phone"
    }
  }, [_c('p', [_vm._v("Phone")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("Name")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("Doctor")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("Birthday")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("Email")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("PIN")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("Zipcode")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group row"
  }, [_c('div', [_c('button', {
    staticClass: "boxed-btn3 large_margin2",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("\n                  Register\n                ")])])])
}]}

/***/ }),
/* 412 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-view')
},staticRenderFns: []}

/***/ }),
/* 413 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "update-clinic"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "mt-0 mb-5"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'AllClinic'
      }
    }
  }, [_c('span', {
    staticClass: "material-icons"
  }, [_vm._v("keyboard_backspace")])]), _vm._v(" Update Clinic")], 1), _vm._v(" "), _c('notification', {
    attrs: {
      "notifications": _vm.notifications
    }
  }), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.editClinic($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "clinic_name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.clinic.name),
      expression: "clinic.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "clinic_name"
    },
    domProps: {
      "value": (_vm.clinic.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.clinic, "name", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "clinic_other_info"
    }
  }, [_vm._v("Other Info")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.clinic.other_info),
      expression: "clinic.other_info"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "clinic_other_info",
      "required": ""
    },
    domProps: {
      "value": (_vm.clinic.other_info)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.clinic, "other_info", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "clinic_logo"
    }
  }, [_vm._v("Thumbnail")]), _vm._v(" "), (!_vm.image) ? _c('div', [_vm._v("\n            Select an image\n                    "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.onFileChange
    }
  })]) : _c('div', [_c('img', {
    attrs: {
      "src": _vm.image
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.removeImage
    }
  }, [_vm._v("Remove image")])])]), _vm._v(" "), _vm._m(0)])], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-primary"
  }, [_vm._v("Update")])])
}]}

/***/ }),
/* 414 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "create-clinic"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "mt-0 mb-5"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'AllClinic'
      }
    }
  }, [_c('span', {
    staticClass: "material-icons"
  }, [_vm._v("keyboard_backspace")])]), _vm._v(" Create Clinic")], 1), _vm._v(" "), _c('notification', {
    attrs: {
      "notifications": _vm.notifications
    }
  }), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.addClinic($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "clinic_name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.clinic.name),
      expression: "clinic.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "clinic_name",
      "required": ""
    },
    domProps: {
      "value": (_vm.clinic.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.clinic, "name", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "clinic_other_info"
    }
  }, [_vm._v("Other Info")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.clinic.other_info),
      expression: "clinic.other_info"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "clinic_other_info",
      "required": ""
    },
    domProps: {
      "value": (_vm.clinic.other_info)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.clinic, "other_info", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "clinic_logo"
    }
  }, [_vm._v("Thumbnail")]), _vm._v(" "), (!_vm.image) ? _c('div', [_vm._v("\n            Select an image\n                    "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.onFileChange
    }
  })]) : _c('div', [_c('img', {
    attrs: {
      "src": _vm.image
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.removeImage
    }
  }, [_vm._v("Remove image")])])]), _vm._v(" "), _vm._m(0)])], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-primary"
  }, [_vm._v("Create")])])
}]}

/***/ }),
/* 415 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "header-area "
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "main-header-area",
    attrs: {
      "id": "sticky-header"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "col-md-7"
  }, [_c('div', {
    staticClass: "main-menu  d-none d-lg-block"
  }, [_c('nav', [_c('ul', {
    attrs: {
      "id": "navigation"
    }
  }, [_c('li', [_c('router-link', {
    staticClass: "p-3 text-dark",
    attrs: {
      "to": "all-doctor"
    }
  }, [_vm._v("Clinic Dashboard")])], 1), _vm._v(" "), _vm._m(2)])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-3 col-lg-3 d-none d-lg-block"
  }, [_c('div', {
    staticClass: "Appointment"
  }, [_c('div', {
    staticClass: "book_btn d-none d-lg-block"
  }, [_c('router-link', {
    staticClass: "btn btn-warning",
    attrs: {
      "to": "register"
    }
  }, [_vm._v("Register")])], 1), _vm._v("\n                 \n                "), _c('div', {
    staticClass: "book_btn d-none d-lg-block"
  }, [_c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": "login"
    }
  }, [_vm._v("Login")])], 1)])]), _vm._v(" "), _vm._m(3)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header-top_area"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-6 col-md-6 "
  }, [_c('div', {
    staticClass: "social_media_links"
  }, [_c('span', {
    staticClass: "share"
  }, [_vm._v("Share with your family and friends  ")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "http://www.linkedin.com/shareArticle?mini=true&url=https://cv19.app/&src=sdkpreparse",
      "target": "popup",
      "onclick": "window.open('http://www.linkedin.com/shareArticle?mini=true&url=https://cv19.app/&src=sdkpreparse','popup','width=600,height=600'); return false;"
    }
  }, [_c('i', {
    staticClass: "fa fa-linkedin"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://www.facebook.com/sharer/sharer.php?u=https://cv19.app/&src=sdkpreparse",
      "target": "popup",
      "onclick": "window.open('https://www.facebook.com/sharer/sharer.php?u=https://cv19.app/&src=sdkpreparse','popup','width=600,height=600'); return false;"
    }
  }, [_c('i', {
    staticClass: "fa fa-facebook"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://plus.google.com/share?url=https://cv19.app/&src=sdkpreparse",
      "target": "popup",
      "onclick": "window.open('https://plus.google.com/share?url=https://cv19.app/&src=sdkpreparse','popup','width=600,height=600'); return false;"
    }
  }, [_c('i', {
    staticClass: "fa fa-google-plus"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-6 col-md-6"
  }, [_c('div', {
    staticClass: "short_contact_list"
  }, [_c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  }), _vm._v(" info@ensofia.com")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Take survey dial "), _c('i', {
    staticClass: "fa fa-phone"
  }), _vm._v(" (408)\n                      413-4555")])])])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-2"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/CV19.APP.png",
      "alt": "",
      "width": "250"
    }
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    staticClass: "p-3 text-dark",
    attrs: {
      "href": "https://ensofia.com/contact.html",
      "target": "_blank"
    }
  }, [_vm._v("Contact Us")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "mobile_menu d-block d-lg-none"
  })])
}]}

/***/ }),
/* 416 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('button', {
    on: {
      "click": _vm.saveMySurvey
    }
  }, [_vm._v("Save")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "surveyCreatorContainer"
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 417 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "create-form"
    }
  }, [_c('h1', [_vm._v("Create Form")]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": {
        name: 'AllForm',
        params: {
          id: this.$route.params.clinic_id
        }
      }
    }
  }, [_vm._v("Return to forms")])], 1), _vm._v(" "), _c('notification', {
    attrs: {
      "notifications": _vm.notifications
    }
  }), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.addForm($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "form_name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.name_en),
      expression: "form.name_en"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "form_name",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.name_en)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "name_en", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "form_description_en"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.description_en),
      expression: "form.description_en"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "form_description_en",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.description_en)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "description_en", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "form_category"
    }
  }, [_vm._v("Category")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.category),
      expression: "form.category"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "form_category",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.category)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "category", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "form_form_type"
    }
  }, [_vm._v("Type")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.form_type),
      expression: "form.form_type"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "form_form_type",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.form_type)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "form_type", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "form_design_path"
    }
  }, [_vm._v("Design Path")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.design_path),
      expression: "form.design_path"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "form_design_path",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.design_path)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "design_path", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "form_image_url"
    }
  }, [_vm._v("Image")]), _vm._v(" "), (!_vm.image) ? _c('div', [_vm._v("\n            Select an image\n                    "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.onFileChange
    }
  })]) : _c('div', [_c('img', {
    attrs: {
      "src": _vm.image
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.removeImage
    }
  }, [_vm._v("Remove image")])])]), _vm._v(" "), _vm._m(0)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-primary"
  }, [_vm._v("Create")])])
}]}

/***/ }),
/* 418 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#F5FBFF"
    }
  }, [_vm._m(0), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-6 login-module"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "doctors_title mb-55"
  }, [_vm._v("Login")]), _vm._v(" "), (_vm.error) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c('form', {
    attrs: {
      "action": "#"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.submit($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(1), _vm._v(" "), _c('vue-tel-input', _vm._b({
    staticClass: "form-control col col-md-9",
    attrs: {
      "required": "",
      "disabled": _vm.disabled
    },
    on: {
      "country-changed": _vm.countryChanged
    },
    model: {
      value: (_vm.form.phone),
      callback: function($$v) {
        _vm.$set(_vm.form, "phone", $$v)
      },
      expression: "form.phone"
    }
  }, 'vue-tel-input', _vm.bindProps, false))], 1)]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "recaptcha-container"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(2), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.pin),
      expression: "form.pin"
    }],
    staticClass: "form-control col col-md-9",
    attrs: {
      "id": "password",
      "type": "password",
      "name": "password",
      "required": "",
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.form.pin)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "pin", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _vm._m(3)]), _vm._v(" "), (_vm.userexist) ? _c('div', [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Code")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.otp),
      expression: "form.otp"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "password",
      "type": "password",
      "name": "password",
      "placeholder": "Code",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.otp)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "otp", $event.target.value)
      }
    }
  })]), _vm._v(" "), (!_vm.haveCode) ? _c('button', {
    staticClass: "btn btn-info btn-sm",
    on: {
      "click": _vm.verifyOtp
    }
  }, [_vm._v("Verify")]) : _vm._e(), _vm._v(" "), (_vm.haveCode) ? _c('button', {
    staticClass: "btn btn-info btn-sm",
    on: {
      "click": _vm.login2
    }
  }, [_vm._v("Verify")]) : _vm._e()]) : _vm._e()])])])]), _vm._v(" "), _c('br'), _c('br')])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "service_area"
  }, [_c('div', {
    staticClass: "container p-0"
  }, [_c('div', {
    staticClass: "row no-gutters"
  }, [_c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/phone.png",
      "width": "100"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n                Log in to retrieve your personalized report, verification code will received via mobile, keep it secure\n              ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/survay.png",
      "width": "100"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n                Complete the screening questionnaire\n              ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _c('br')])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/report.png",
      "width": "100"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n                The personalized report will include assessment against the CDC guidelnes and relevant CDC information\n              ")])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "phone"
    }
  }, [_c('p', [_vm._v("Phone")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "password"
    }
  }, [_c('p', [_vm._v("Pin")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "boxed-btn3 large_margin",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Login")])])
}]}

/***/ }),
/* 419 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "view"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.question.name_en))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.savePDF
    }
  }, [_vm._v("Save PDF")])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "alert alert-info",
    attrs: {
      "role": "alert"
    }
  }, [_c('p', [_vm._v("\n          This website / application is made by team EnSofia. It is our humble\n          effort to contribute and help the public to aid the tremendous\n          efforts and steps taken by many organizations to flatten the curve.\n        ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', {
    staticClass: "alert-heading"
  }, [_vm._v("What it is?")]), _vm._v(" "), _c('p', [_vm._v("\n          This website is application is built for awareness and sharing\n          information published by the US – Centers for Disease Control and\n          Prevention CDC.gov\n        ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', {
    staticClass: "alert-heading"
  }, [_vm._v("What it is NOT?")]), _vm._v(" "), _c('p', [_vm._v("\n          This is not diagnostic or medical site. You should not use this\n          website or its communications for any medical advice. If you have\n          medical questions, contact your doctor. If you have an emergency\n          call 911.\n        ")])])
}]}

/***/ }),
/* 420 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer-container"
  }, [_c('div', {
    staticStyle: {
      "background": "#fff"
    }
  }, [_c('div', {
    staticClass: "expert_doctors_area"
  }, [_c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-12"
  }, [_c('div', {
    staticClass: "expert_active owl-carousel"
  }, [_c('div', {
    staticClass: "single_expert"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "experts_name text-center"
  }, [_c('h3', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[0].key))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[0].short))]), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c('div', {
    staticClass: "single_expert"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "experts_name text-center"
  }, [_c('h3', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[1].key))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[1].short))]), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(4)])]), _vm._v(" "), _c('div', {
    staticClass: "single_expert"
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "experts_name text-center"
  }, [_c('h3', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[2].key))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[2].short))]), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(6)])]), _vm._v(" "), _c('div', {
    staticClass: "single_expert"
  }, [_vm._m(7), _vm._v(" "), _c('div', {
    staticClass: "experts_name text-center"
  }, [_c('h3', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[3].key))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[3].short))]), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(8)])])])])])])])]), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-12"
  }, [_c('div', {
    staticClass: "doctors_title mb-55"
  }, [_c('h3', [_vm._v("A Word for YOU")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expert_thumb"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/patient.jpg",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xl-3 col-lg-3 d-none d-lg-block"
  }, [_c('div', {
    staticClass: "Appointment"
  }, [_c('div', {
    staticClass: "book_btn d-none d-lg-block"
  }, [_c('a', {
    staticClass: "popup-with-form amira_margin2",
    attrs: {
      "href": "#test-form"
    }
  }, [_vm._v("More")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expert_thumb"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/clinic.png",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xl-3 col-lg-3 d-none d-lg-block"
  }, [_c('div', {
    staticClass: "Appointment"
  }, [_c('div', {
    staticClass: "book_btn d-none d-lg-block"
  }, [_c('a', {
    staticClass: "popup-with-form amira_margin2",
    attrs: {
      "href": "#test-form"
    }
  }, [_vm._v("More")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expert_thumb"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/doctor.png",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xl-3 col-lg-3 d-none d-lg-block"
  }, [_c('div', {
    staticClass: "Appointment"
  }, [_c('div', {
    staticClass: "book_btn d-none d-lg-block"
  }, [_c('a', {
    staticClass: "popup-with-form amira_margin2",
    attrs: {
      "href": "#test-form"
    }
  }, [_vm._v("More")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expert_thumb"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/partner.jpg",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xl-3 col-lg-3 d-none d-lg-block"
  }, [_c('div', {
    staticClass: "Appointment"
  }, [_c('div', {
    staticClass: "book_btn d-none d-lg-block"
  }, [_c('a', {
    staticClass: "popup-with-form amira_margin2",
    attrs: {
      "href": "#test-form"
    }
  }, [_vm._v("More")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#000"
    }
  }, [_c('div', {
    staticClass: "copy-right_text"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "footer_border"
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-12"
  }, [_c('br'), _vm._v(" "), _c('p', {
    staticClass: "copy_right text-center"
  }, [_vm._v("\n            Copyright © @2020\n            All rights reserved | This template is made with\n            "), _c('i', {
    staticClass: "fa fa-heart-o",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" by\n            "), _c('a', {
    attrs: {
      "href": "https://colorlib.com",
      "target": "_blank"
    }
  }, [_vm._v("Colorlib")])]), _vm._v(" "), _c('br')])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    staticClass: "white-popup-block mfp-hide",
    attrs: {
      "id": "test-form"
    }
  }, [_c('div', {
    staticClass: "popup_box "
  }, [_c('div', {
    staticClass: "popup_inner"
  }, [_c('h3', [_vm._v("Message to users")]), _vm._v(" "), _c('form', {
    attrs: {
      "action": "#"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('p', [_vm._v("\n              Team EnSofia built this application to help you understand the\n              CDC (Center for Disease Control) guidelines as they apply to\n              you. Our team is advised by USA certified physicians and\n              technologies. This app is NOT a substitute for professional\n              medical advice, diagnosis, or treatment. Always consult a\n              medical professional for serious symptoms or emergencies.You\n              will be presented with CDC questions and upon submitting your\n              response, you will receive an SMS with a code, and second SMS\n              with a link. In order to read your customized report, you will\n              need to log in using your mobile phone number, the code sent to\n              you, and a PIN number you chose. You can download your report\n              and use it when talking to your doctor or physician.Your privacy\n              is very important to us - we are in the same boat. We will not\n              ask for your name, but you can provide it in an optional field.\n              We will never sell your individual data or use it. We only use\n              the aggregate data from all users together. Your data is secure\n              on our website and encrypted in our database.If you would like\n              to donate to this cause, please contact us.\n            ")])])])])])])
}]}

/***/ }),
/* 421 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vidcall",
    attrs: {
      "id": "videoWebRtc"
    }
  }, [_c('section', {
    staticClass: "app-mains"
  }, [_c('div', {
    staticClass: "columns vidclms app-contents"
  }, [_c('div', {
    attrs: {
      "id": "info"
    }
  }, [_c('div', {
    attrs: {
      "id": "client-name"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "output-selection",
      "hidden": ""
    }
  }, [_c('label', [_vm._v("Ringtone Devices")]), _vm._v(" "), _c('select', {
    attrs: {
      "id": "ringtone-devices",
      "multiple": ""
    }
  }), _vm._v(" "), _c('label', [_vm._v("Speaker Devices")]), _vm._v(" "), _c('select', {
    attrs: {
      "id": "speaker-devices",
      "multiple": ""
    }
  }), _c('br')])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "call-controls"
    }
  }, [_c('input', {
    attrs: {
      "id": "phone-number",
      "type": "text",
      "placeholder": "Enter a phone # or client name"
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "id": "button-call"
    }
  }, [_vm._v("Call")]), _vm._v(" "), _c('button', {
    attrs: {
      "id": "button-hangup"
    }
  }, [_vm._v("Hangup")])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "log",
      "hidden": ""
    }
  })])])])
}]}

/***/ }),
/* 422 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("Dashboard")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "recaptcha-container"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [(_vm.user) ? _c('div', {
    staticClass: "alert alert-success",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v("You are logged in!")]) : _vm._e(), _vm._v(" "), _vm._v("\n          ----- " + _vm._s(_vm.phone) + "\n        ")])])])])])
},staticRenderFns: []}

/***/ }),
/* 423 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#3498DB"
    }
  }, [_c('br'), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "row justify-content-center"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/disclamer.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "large_padding",
    staticStyle: {
      "background": "#ffffffdd"
    }
  }, [_c('h1', [_vm._v("\n          This screening is for you, if you:\n        ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('img', {
    attrs: {
      "width": "100",
      "height": "100",
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/emergency.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col col-9"
  }, [_c('p', [_c('strong', [_vm._v("Do not need immediate medical attention")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "color": "#787878"
    }
  }, [_c('span', {
    staticStyle: {
      "font-weight": "400"
    }
  }, [_vm._v("This program is intended to expand access to COVID-19 risk\n                screening and testing. It is not intended for people\n                experiencing")]), _vm._v(" "), _c('strong', [_vm._v("severe")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-weight": "400"
    }
  }, [_vm._v("symptoms such as severe cough, severe shortness of breath,\n                severe fever, or other concerning symptoms who may need more\n                immediate medical care.")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fabout%2Fsteps-when-sick.html"
    }
  }, [_c('strong', [_vm._v("Please visit the CDC website")])]), _vm._v(" "), _c('span', {
    staticStyle: {
      "font-weight": "400"
    }
  }, [_vm._v("for information on what to do if you are sick.")])])])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('img', {
    attrs: {
      "width": "100",
      "height": "100",
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/age.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col col-9"
  }, [_c('p', [_c('strong', [_vm._v("Are")]), _vm._v(" "), _c('strong', [_vm._v("18 years old or older")])]), _vm._v(" "), _c('p', [_vm._v("\n              San Jose (Santa Clara county), Lake Elsinore (Riverside county),\n              San Mateo (San Mateo county), and Sacramento (Sacramento county)\n            ")])])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('img', {
    attrs: {
      "width": "100",
      "height": "100",
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/map.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col col-9"
  }, [_c('p', [_c('strong', [_vm._v("Are located within range of a testing site")])]), _vm._v(" "), _c('p', [_vm._v("\n              San Jose (Santa Clara county), Lake Elsinore (Riverside county),\n              San Mateo (San Mateo county), and Sacramento (Sacramento county)\n            ")])])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('button', {
    staticClass: "boxed-btn3 large_margin",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("I Agree on the above Discaimer")])])]), _vm._v(" "), _c('br'), _c('br')])
}]}

/***/ }),
/* 424 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("Dashboard")]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [(_vm.user) ? _c('div', {
    staticClass: "alert alert-success",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v("You are logged in!")]) : _vm._e()])])])])])
},staticRenderFns: []}

/***/ }),
/* 425 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "all-form"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "mt-0 mb-5"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'AllClinic'
      }
    }
  }, [_c('span', {
    staticClass: "material-icons"
  }, [_vm._v("keyboard_backspace")])]), _vm._v(" All Form "), _c('router-link', {
    staticClass: "btn btn-primary float-right",
    attrs: {
      "to": {
        name: 'CreateForm',
        params: {
          clinic_id: this.$route.params.id
        }
      }
    }
  }, [_vm._v("Create Form")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formSearch),
      expression: "formSearch"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "search",
      "placeholder": "Search form"
    },
    domProps: {
      "value": (_vm.formSearch)
    },
    on: {
      "keyup": _vm.searchForms,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formSearch = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('table', {
    staticClass: "table table-hover",
    staticStyle: {
      "width": "100%"
    }
  }, [_vm._m(0), _vm._v(" "), _c('draggable', {
    attrs: {
      "tag": "tbody"
    },
    model: {
      value: (_vm.forms),
      callback: function($$v) {
        _vm.forms = $$v
      },
      expression: "forms"
    }
  }, _vm._l((_vm.forms), function(form) {
    return _c('tr', {
      key: form.id
    }, [_c('td', [_vm._v(_vm._s(form.id))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.name_en))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.description_en))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.create_date))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.update_date))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.status))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.category))]), _vm._v(" "), _c('td', [_c('img', {
      attrs: {
        "src": form.logo,
        "width": "50",
        "height": "50"
      }
    })]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.display_order))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.form_type))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.action_date))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [_c('router-link', {
      staticClass: "btn btn-primary",
      attrs: {
        "to": {
          name: 'EditForm',
          params: {
            id: form.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("edit")])]), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-danger",
      attrs: {
        "to": {
          name: 'DeleteForm',
          params: {
            id: form.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("delete")])]), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-default",
      attrs: {
        "to": {
          name: 'CreateSurvey',
          params: {
            id: form.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("Create")])]), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-success",
      attrs: {
        "to": {
          name: 'ViewSurvey',
          params: {
            id: form.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("web")])])], 1)])
  }), 0)], 1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('td', [_vm._v("Id")]), _vm._v(" "), _c('td', [_vm._v("Name")]), _vm._v(" "), _c('td', [_vm._v("Description")]), _vm._v(" "), _c('td', [_vm._v("Create Date")]), _vm._v(" "), _c('td', [_vm._v("Update Date")]), _vm._v(" "), _c('td', [_vm._v("Status")]), _vm._v(" "), _c('td', [_vm._v("Category")]), _vm._v(" "), _c('td', [_vm._v("Thumbnail")]), _vm._v(" "), _c('td', [_vm._v("Display Order")]), _vm._v(" "), _c('td', [_vm._v("Type")]), _vm._v(" "), _c('td', [_vm._v("Action Date")]), _vm._v(" "), _c('td', [_vm._v("Actions")])])])
}]}

/***/ }),
/* 426 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    attrs: {
      "id": "header"
    }
  })
},staticRenderFns: []}

/***/ }),
/* 427 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "all-clinic"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "mt-0 mb-5"
  }, [_vm._v("All Clinic\n               "), _c('router-link', {
    staticClass: "btn btn-primary float-right",
    attrs: {
      "to": {
        name: 'CreateClinic'
      }
    }
  }, [_vm._v("Create Clinic")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.clinicSearch),
      expression: "clinicSearch"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "search",
      "placeholder": "Search clinic"
    },
    domProps: {
      "value": (_vm.clinicSearch)
    },
    on: {
      "keyup": _vm.searchClinics,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.clinicSearch = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('table', {
    staticClass: "table table-hover",
    staticStyle: {
      "width": "100%"
    }
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.clinics), function(clinic) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(clinic.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(clinic.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(clinic.other_info))]), _vm._v(" "), _c('td', [_c('router-link', {
      staticClass: "btn btn-warning btn-sm",
      attrs: {
        "to": {
          name: 'EditClinic',
          params: {
            id: clinic.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("edit")])]), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        "to": {
          name: 'DeleteClinic',
          params: {
            id: clinic.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("delete")])]), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-info btn-sm",
      attrs: {
        "to": {
          name: 'AllForm',
          params: {
            id: clinic.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("web")])])], 1)])
  }), 0)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('td', [_vm._v("ID")]), _vm._v(" "), _c('td', [_vm._v("Title")]), _vm._v(" "), _c('td', [_vm._v("Content")]), _vm._v(" "), _c('td', [_vm._v("Actions")])])])
}]}

/***/ }),
/* 428 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "all-user"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "mt-0 mb-5"
  }, [_vm._v("All Clinic "), _c('router-link', {
    staticClass: "btn btn-primary float-right",
    attrs: {
      "to": {
        name: 'CreateClinic'
      }
    }
  }, [_vm._v("Create Clinic")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userSearch),
      expression: "userSearch"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "search",
      "placeholder": "Search user"
    },
    domProps: {
      "value": (_vm.userSearch)
    },
    on: {
      "keyup": _vm.searchusers,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userSearch = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('table', {
    staticClass: "table table-hover",
    staticStyle: {
      "width": "100%"
    }
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.users), function(user, index) {
    return _c('tr', {
      key: user.id
    }, [_c('td', [_vm._v(_vm._s(user.id))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(user.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(user.phone))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(user.email))]), _vm._v(" "), _c('td', [_c('router-link', {
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        "to": {
          name: 'DeleteClinic',
          params: {
            id: user.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("delete")])]), _vm._v(" "), _c('a', {
      staticClass: "btn btn-success btn-sm",
      attrs: {
        "href": "#!",
        "title": "Approve Doctor"
      },
      on: {
        "click": function($event) {
          return _vm.approveDoctor(user.id, index)
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("done")])])], 1)])
  }), 0)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('td', [_vm._v("ID")]), _vm._v(" "), _c('td', [_vm._v("Name")]), _vm._v(" "), _c('td', [_vm._v("Phone")]), _vm._v(" "), _c('td', [_vm._v("Email")]), _vm._v(" "), _c('td', [_vm._v("Actions")])])])
}]}

/***/ }),
/* 429 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-content-container custom-container container-fluid"
  }, [_c('navbar'), _vm._v(" "), _c('Header'), _vm._v(" "), _c('section', {
    staticClass: "section-container"
  }, [_c('router-view')], 1), _vm._v(" "), _c('Footer')], 1)
},staticRenderFns: []}

/***/ }),
/* 430 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "all-clinic"
    }
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-primary float-right",
    attrs: {
      "to": {
        name: 'AllClinic'
      }
    }
  }, [_vm._v("All Clinic")])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "slider_area"
  }, [_c('div', {
    staticClass: "slider_active owl-carousel"
  }, [_c('div', {
    staticClass: "single_slider  d-flex align-items-center amira_bg_3"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-12"
  }, [_c('div', {
    staticClass: "slider_text "
  }, [_c('h3', [_c('span', [_vm._v("Take the survay ..")]), _vm._v(" "), _c('br'), _vm._v("Increase your\n                  awareness\n                ")]), _vm._v(" "), _c('p', [_vm._v("\n                  The first step to defeat any epidemic is to learn "), _c('br'), _vm._v("\n                  This website is built to increase awareness and share\n                  information"), _c('br'), _vm._v("\n                  published by the US – Centers for Disease Control and\n                  Prevention CDC.gov.\n                ")]), _vm._v(" "), _c('a', {
    staticClass: "boxed-btn3",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Answer NOW")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "single_slider  d-flex align-items-center amira_bg_1"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-12"
  }, [_c('div', {
    staticClass: "slider_text "
  }, [_c('h3', [_c('span', [_vm._v("Stay Home ..")]), _c('br'), _vm._v("Stay Safe")]), _vm._v(" "), _c('p', [_vm._v("Keep calm and carry on "), _c('br')])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "single_slider  d-flex align-items-center amira_bg_2"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-12"
  }, [_c('div', {
    staticClass: "slider_text "
  }, [_c('h3', [_c('span', [_vm._v("Ensofia is here ..")]), _c('br'), _vm._v("To help you")]), _vm._v(" "), _c('p', [_vm._v("\n                  This is our humble effort to contribute and help the public\n                  "), _c('br'), _vm._v("\n                  to aid the tremendousefforts and steps taken by many\n                  organizations "), _c('br'), _vm._v("\n                  to flatten the curve.\n                ")])])])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "service_area"
  }, [_c('div', {
    staticClass: "container p-0"
  }, [_c('div', {
    staticClass: "row no-gutters"
  }, [_c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "flaticon-electrocardiogram"
  })]), _vm._v(" "), _c('h3', [_vm._v("AI Agent")]), _vm._v(" "), _c('p', [_vm._v("\n              This website is made by team Ensofia. It's our humble effort to\n              contribute to community and help the public and the health care\n              providers and systems\n            ")]), _vm._v(" "), _c('a', {
    staticClass: "boxed-btn3-white",
    attrs: {
      "href": "https://ensofia.com/contact.html"
    }
  }, [_vm._v("Ensofia")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "flaticon-emergency-call"
  })]), _vm._v(" "), _c('h3', [_vm._v("Emergency Care")]), _vm._v(" "), _c('p', [_vm._v("\n              This is not diagnostic or medical site. You should not use this\n              website orthe personalized report for any medical device. If you\n              have medical questions, contact your doctor. If you have an\n              emergency call 911.\n            ")]), _vm._v(" "), _c('a', {
    staticClass: "boxed-btn3-white",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("+(408) 413-4555")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "flaticon-first-aid-kit"
  })]), _vm._v(" "), _c('h3', [_vm._v("Prevention actions")]), _vm._v(" "), _c('p', [_vm._v("\n              This website is application is built for awareness and sharing\n              information published by the US – Centers for Disease Control\n              and Prevention CDC.gov\n            ")]), _vm._v(" "), _c('a', {
    staticClass: "boxed-btn3-white",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Ream More ..")])])])])])])
}]}

/***/ }),
/* 431 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "delete-doctor"
    }
  }, [_c('h1', [_vm._v("Delete User " + _vm._s(_vm.user.title))]), _vm._v(" "), _c('notification', {
    attrs: {
      "notifications": _vm.notifications
    }
  }), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.deleteUser($event)
      }
    }
  }, [_vm._m(0)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('button', {
    staticClass: "btn btn-danger"
  }, [_vm._v("Delete User")])])
}]}

/***/ }),
/* 432 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("Dashboard")]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [(_vm.user) ? _c('div', {
    staticClass: "alert alert-success",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v("You are logged in! Please Contact us to confirm yourself")]) : _vm._e(), _vm._v(" "), _c('center', [_c('b-button', {
    attrs: {
      "variant": "outline-primary"
    }
  }, [_vm._v("Primary")])], 1)], 1)])])])])
},staticRenderFns: []}

/***/ }),
/* 433 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "notifications"
    }
  }, _vm._l((_vm.notifications), function(notification) {
    return _c('div', {
      class: _vm.getNotificationClass(notification)
    }, [_vm._v("\n        " + _vm._s(notification.message) + "\n    ")])
  }), 0)
},staticRenderFns: []}

/***/ }),
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[333]);
//# sourceMappingURL=app.fa4d2cc364322c7ea6b1.js.map