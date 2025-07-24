import {
  ToastrService,
  init_ngx_toastr
} from "./chunk-U2S7ZBOR.js";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  init_forms
} from "./chunk-QMZDIYWG.js";
import {
  CookieService,
  init_ngx_cookie_service
} from "./chunk-N5A3YSTN.js";
import {
  CommonModule,
  init_common
} from "./chunk-EXIZREPD.js";
import {
  employeeService,
  init_employee_service
} from "./chunk-VCOKURTV.js";
import {
  HrService,
  init_hr
} from "./chunk-SNTJHH7M.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-NMBEJXC6.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/Hr/hr-component/hr-component.html
var hr_component_default;
var init_hr_component = __esm({
  "angular:jit:template:src/app/Hr/hr-component/hr-component.html"() {
    hr_component_default = '<div class="row row-cols-4">\n  <div class="col" *ngFor="let item of newEmployee">\n    <div class="card" style="width: 18rem;">\n      <div class="card-body">\n        <h5 class="card-title mt-2">{{ item.name }}</h5>\n        <h6 class="card-subtitle mb-2 text-body-secondary">+91-{{ item.contactNo }}</h6>\n        <h6 class="card-subtitle mb-2 text-body-secondary">{{ item.email }}</h6>\n        <div class="d-flex gap-3 p-3">\n          <select #roleRef class="form-select">\n            <option value="User">User</option>\n            <option value="Admin">Admin</option>\n          </select>\n          <select #deptRef class="form-select">\n            <option value="Engineering">Engineering</option>\n            <option value="Marketing">Marketing</option>\n            <option value="HR">HR</option>\n          </select>\n        </div>\n\n        <div class="d-flex gap-3 mt-3">\n          <button type="button" class="btn btn-primary" (click)="addNewEmployee(item, roleRef.value, deptRef.value)">Add Employee</button>\n          <button type="button" class="btn btn-danger" (click)="reject(item)">Reject</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';
  }
});

// angular:jit:style:src/app/Hr/hr-component/hr-component.css
var hr_component_default2;
var init_hr_component2 = __esm({
  "angular:jit:style:src/app/Hr/hr-component/hr-component.css"() {
    hr_component_default2 = "/* src/app/Hr/hr-component/hr-component.css */\n/*# sourceMappingURL=hr-component.css.map */\n";
  }
});

// src/app/Hr/hr-component/hr-component.ts
function cov_15d34gmqpf() {
  var path = "/Users/consultadd/Angular/my-app/src/app/Hr/hr-component/hr-component.ts";
  var hash = "b476ccc613509b19632851472d5df2239406c6ac";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/consultadd/Angular/my-app/src/app/Hr/hr-component/hr-component.ts",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 18
        },
        end: {
          line: 83,
          column: 1
        }
      },
      "1": {
        start: {
          line: 17,
          column: 17
        },
        end: {
          line: 17,
          column: 26
        }
      },
      "2": {
        start: {
          line: 19,
          column: 17
        },
        end: {
          line: 23,
          column: 6
        }
      },
      "3": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 45
        }
      },
      "4": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 35
        }
      },
      "5": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 47
        }
      },
      "6": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 43
        }
      },
      "7": {
        start: {
          line: 32,
          column: 8
        },
        end: {
          line: 32,
          column: 30
        }
      },
      "8": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
          column: 20
        }
      },
      "9": {
        start: {
          line: 36,
          column: 8
        },
        end: {
          line: 36,
          column: 39
        }
      },
      "10": {
        start: {
          line: 39,
          column: 8
        },
        end: {
          line: 49,
          column: 11
        }
      },
      "11": {
        start: {
          line: 41,
          column: 16
        },
        end: {
          line: 41,
          column: 44
        }
      },
      "12": {
        start: {
          line: 42,
          column: 16
        },
        end: {
          line: 42,
          column: 50
        }
      },
      "13": {
        start: {
          line: 43,
          column: 16
        },
        end: {
          line: 43,
          column: 73
        }
      },
      "14": {
        start: {
          line: 44,
          column: 16
        },
        end: {
          line: 44,
          column: 68
        }
      },
      "15": {
        start: {
          line: 47,
          column: 16
        },
        end: {
          line: 47,
          column: 71
        }
      },
      "16": {
        start: {
          line: 52,
          column: 8
        },
        end: {
          line: 52,
          column: 41
        }
      },
      "17": {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 53,
          column: 29
        }
      },
      "18": {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 64,
          column: 11
        }
      },
      "19": {
        start: {
          line: 56,
          column: 16
        },
        end: {
          line: 56,
          column: 38
        }
      },
      "20": {
        start: {
          line: 57,
          column: 16
        },
        end: {
          line: 57,
          column: 86
        }
      },
      "21": {
        start: {
          line: 58,
          column: 16
        },
        end: {
          line: 58,
          column: 92
        }
      },
      "22": {
        start: {
          line: 58,
          column: 64
        },
        end: {
          line: 58,
          column: 90
        }
      },
      "23": {
        start: {
          line: 59,
          column: 16
        },
        end: {
          line: 59,
          column: 33
        }
      },
      "24": {
        start: {
          line: 62,
          column: 16
        },
        end: {
          line: 62,
          column: 78
        }
      },
      "25": {
        start: {
          line: 67,
          column: 8
        },
        end: {
          line: 75,
          column: 11
        }
      },
      "26": {
        start: {
          line: 69,
          column: 16
        },
        end: {
          line: 69,
          column: 55
        }
      },
      "27": {
        start: {
          line: 70,
          column: 16
        },
        end: {
          line: 70,
          column: 74
        }
      },
      "28": {
        start: {
          line: 71,
          column: 16
        },
        end: {
          line: 71,
          column: 92
        }
      },
      "29": {
        start: {
          line: 71,
          column: 64
        },
        end: {
          line: 71,
          column: 90
        }
      },
      "30": {
        start: {
          line: 73,
          column: 16
        },
        end: {
          line: 73,
          column: 78
        }
      },
      "31": {
        start: {
          line: 77,
          column: 28
        },
        end: {
          line: 82,
          column: 5
        }
      },
      "32": {
        start: {
          line: 77,
          column: 34
        },
        end: {
          line: 82,
          column: 5
        }
      },
      "33": {
        start: {
          line: 84,
          column: 0
        },
        end: {
          line: 91,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 5
          }
        },
        loc: {
          start: {
            line: 24,
            column: 75
          },
          end: {
            line: 29,
            column: 5
          }
        },
        line: 24
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 31,
            column: 5
          }
        },
        loc: {
          start: {
            line: 31,
            column: 15
          },
          end: {
            line: 34,
            column: 5
          }
        },
        line: 31
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        },
        loc: {
          start: {
            line: 35,
            column: 11
          },
          end: {
            line: 37,
            column: 5
          }
        },
        line: 35
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        },
        loc: {
          start: {
            line: 38,
            column: 21
          },
          end: {
            line: 50,
            column: 5
          }
        },
        line: 38
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 40,
            column: 18
          },
          end: {
            line: 40,
            column: 19
          }
        },
        loc: {
          start: {
            line: 40,
            column: 27
          },
          end: {
            line: 45,
            column: 13
          }
        },
        line: 40
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 46,
            column: 19
          },
          end: {
            line: 46,
            column: 20
          }
        },
        loc: {
          start: {
            line: 46,
            column: 28
          },
          end: {
            line: 48,
            column: 13
          }
        },
        line: 46
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 51,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        },
        loc: {
          start: {
            line: 51,
            column: 47
          },
          end: {
            line: 65,
            column: 5
          }
        },
        line: 51
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 55,
            column: 18
          },
          end: {
            line: 55,
            column: 19
          }
        },
        loc: {
          start: {
            line: 55,
            column: 27
          },
          end: {
            line: 60,
            column: 13
          }
        },
        line: 55
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 58,
            column: 59
          },
          end: {
            line: 58,
            column: 60
          }
        },
        loc: {
          start: {
            line: 58,
            column: 64
          },
          end: {
            line: 58,
            column: 90
          }
        },
        line: 58
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 61,
            column: 19
          },
          end: {
            line: 61,
            column: 20
          }
        },
        loc: {
          start: {
            line: 61,
            column: 28
          },
          end: {
            line: 63,
            column: 13
          }
        },
        line: 61
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        },
        loc: {
          start: {
            line: 66,
            column: 21
          },
          end: {
            line: 76,
            column: 5
          }
        },
        line: 66
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 68,
            column: 18
          },
          end: {
            line: 68,
            column: 19
          }
        },
        loc: {
          start: {
            line: 68,
            column: 27
          },
          end: {
            line: 72,
            column: 13
          }
        },
        line: 68
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 71,
            column: 59
          },
          end: {
            line: 71,
            column: 60
          }
        },
        loc: {
          start: {
            line: 71,
            column: 64
          },
          end: {
            line: 71,
            column: 90
          }
        },
        line: 71
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 72,
            column: 22
          },
          end: {
            line: 72,
            column: 23
          }
        },
        loc: {
          start: {
            line: 72,
            column: 31
          },
          end: {
            line: 74,
            column: 13
          }
        },
        line: 72
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 77,
            column: 28
          },
          end: {
            line: 77,
            column: 29
          }
        },
        loc: {
          start: {
            line: 77,
            column: 34
          },
          end: {
            line: 82,
            column: 5
          }
        },
        line: 77
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      file: "hr-component.js",
      sourceRoot: "",
      sources: ["hr-component.ts"],
      names: [],
      mappings: "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",
      sourcesContent: [`import { Component } from '@angular/core';
import { EmployeeModel } from '../../models/Employee';
import { HrService } from '../../service/hr';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import { employeeService } from '../../service/employee-service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-hr-component',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './hr-component.html',
  styleUrl: './hr-component.css'
})
export class HrComponent {
     newEmployee  !:EmployeeModel[];
     department='unknown';
    
      newEmployeeCount !:0;
       newEmpForm = new FormGroup({
 role: new FormControl(),
  department: new FormControl(),
  employeeObj:new FormControl()
 });
     constructor(private toasterService:ToastrService,private hrService:HrService,private employeeService:employeeService,private cookieService: CookieService){};
   ngOnInit(){
    this.getNewEmployee();
    this.isHr();
   }
      isHr(){
    return this.department=="HR";
   }

   getNewEmployee():void{
  this.hrService.getNewEmployee().subscribe({
    next:(res:any)=>{
      this.newEmployee=res.data;
      this.newEmployeeCount=res.count;
      console.log("Employee count is ",this.newEmployeeCount);
      console.log("Employee count is ",this.newEmployee);
    },
    error:(err)=>{
      console.error('Error fetching new employee data',err);
    }
  })
}  

addNewEmployee(employee:any,role:string,department:string):void{ 
employee.department=department;
employee.role=role;
this.hrService.addNewEmployee(employee).subscribe({
  next:(res:any)=>{
    console.log(employee);
 this.toasterService.success('Employee Added Succeesfully',"Success");
     this.newEmployee = this.newEmployee.filter(e => e.email !== employee.email);

 console.log(res);
  },
     error:(err)=>{
       this.toasterService.error('Something Wents Wrong ',"Failed");
    }
})
}

reject(employee:any):void{
    this.hrService.deleteNewEmployee(employee).subscribe({
      next:(res:any)=>{
        console.log("User delete sucessfully");
this.toasterService.error("Employee Removed sucessfully");
     this.newEmployee = this.newEmployee.filter(e => e.email !== employee.email);

      }, error:(err)=>{
       this.toasterService.error('Something Wents Wrong ',"Failed");
    }

    })
}

}
`]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b476ccc613509b19632851472d5df2239406c6ac"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    cov_15d34gmqpf = function() {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
var HrComponent;
var init_hr_component3 = __esm({
  "src/app/Hr/hr-component/hr-component.ts"() {
    "use strict";
    init_tslib_es6();
    init_hr_component();
    init_hr_component2();
    init_core();
    init_hr();
    init_ngx_cookie_service();
    init_common();
    init_forms();
    init_employee_service();
    init_ngx_toastr();
    cov_15d34gmqpf();
    cov_15d34gmqpf().s[0]++;
    HrComponent = class HrComponent2 {
      toasterService;
      hrService;
      employeeService;
      cookieService;
      newEmployee;
      department = (cov_15d34gmqpf().s[1]++, "unknown");
      newEmployeeCount;
      newEmpForm = (cov_15d34gmqpf().s[2]++, new FormGroup({
        role: new FormControl(),
        department: new FormControl(),
        employeeObj: new FormControl()
      }));
      constructor(toasterService, hrService, employeeService2, cookieService) {
        cov_15d34gmqpf().f[0]++;
        cov_15d34gmqpf().s[3]++;
        this.toasterService = toasterService;
        cov_15d34gmqpf().s[4]++;
        this.hrService = hrService;
        cov_15d34gmqpf().s[5]++;
        this.employeeService = employeeService2;
        cov_15d34gmqpf().s[6]++;
        this.cookieService = cookieService;
      }
      ngOnInit() {
        cov_15d34gmqpf().f[1]++;
        cov_15d34gmqpf().s[7]++;
        this.getNewEmployee();
        cov_15d34gmqpf().s[8]++;
        this.isHr();
      }
      isHr() {
        cov_15d34gmqpf().f[2]++;
        cov_15d34gmqpf().s[9]++;
        return this.department == "HR";
      }
      getNewEmployee() {
        cov_15d34gmqpf().f[3]++;
        cov_15d34gmqpf().s[10]++;
        this.hrService.getNewEmployee().subscribe({
          next: (res) => {
            cov_15d34gmqpf().f[4]++;
            cov_15d34gmqpf().s[11]++;
            this.newEmployee = res.data;
            cov_15d34gmqpf().s[12]++;
            this.newEmployeeCount = res.count;
            cov_15d34gmqpf().s[13]++;
            console.log("Employee count is ", this.newEmployeeCount);
            cov_15d34gmqpf().s[14]++;
            console.log("Employee count is ", this.newEmployee);
          },
          error: (err) => {
            cov_15d34gmqpf().f[5]++;
            cov_15d34gmqpf().s[15]++;
            console.error("Error fetching new employee data", err);
          }
        });
      }
      addNewEmployee(employee, role, department) {
        cov_15d34gmqpf().f[6]++;
        cov_15d34gmqpf().s[16]++;
        employee.department = department;
        cov_15d34gmqpf().s[17]++;
        employee.role = role;
        cov_15d34gmqpf().s[18]++;
        this.hrService.addNewEmployee(employee).subscribe({
          next: (res) => {
            cov_15d34gmqpf().f[7]++;
            cov_15d34gmqpf().s[19]++;
            console.log(employee);
            cov_15d34gmqpf().s[20]++;
            this.toasterService.success("Employee Added Succeesfully", "Success");
            cov_15d34gmqpf().s[21]++;
            this.newEmployee = this.newEmployee.filter((e) => {
              cov_15d34gmqpf().f[8]++;
              cov_15d34gmqpf().s[22]++;
              return e.email !== employee.email;
            });
            cov_15d34gmqpf().s[23]++;
            console.log(res);
          },
          error: (err) => {
            cov_15d34gmqpf().f[9]++;
            cov_15d34gmqpf().s[24]++;
            this.toasterService.error("Something Wents Wrong ", "Failed");
          }
        });
      }
      reject(employee) {
        cov_15d34gmqpf().f[10]++;
        cov_15d34gmqpf().s[25]++;
        this.hrService.deleteNewEmployee(employee).subscribe({
          next: (res) => {
            cov_15d34gmqpf().f[11]++;
            cov_15d34gmqpf().s[26]++;
            console.log("User delete sucessfully");
            cov_15d34gmqpf().s[27]++;
            this.toasterService.error("Employee Removed sucessfully");
            cov_15d34gmqpf().s[28]++;
            this.newEmployee = this.newEmployee.filter((e) => {
              cov_15d34gmqpf().f[12]++;
              cov_15d34gmqpf().s[29]++;
              return e.email !== employee.email;
            });
          },
          error: (err) => {
            cov_15d34gmqpf().f[13]++;
            cov_15d34gmqpf().s[30]++;
            this.toasterService.error("Something Wents Wrong ", "Failed");
          }
        });
      }
      static ctorParameters = (cov_15d34gmqpf().s[31]++, () => {
        cov_15d34gmqpf().f[14]++;
        cov_15d34gmqpf().s[32]++;
        return [{
          type: ToastrService
        }, {
          type: HrService
        }, {
          type: employeeService
        }, {
          type: CookieService
        }];
      });
    };
    cov_15d34gmqpf().s[33]++;
    HrComponent = __decorate([Component({
      selector: "app-hr-component",
      imports: [CommonModule, ReactiveFormsModule],
      template: hr_component_default,
      styles: [hr_component_default2]
    })], HrComponent);
  }
});

export {
  HrComponent,
  init_hr_component3 as init_hr_component
};
//# sourceMappingURL=chunk-PE3VIP4R.js.map
