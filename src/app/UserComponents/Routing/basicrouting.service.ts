export class BasicService{
    currentPage = "home";
   
    lastPage = "home";

     allPagesObj:any = {
       home: 0,
       about: 1,
       contact: 2,
     }

    allPages = [true, false, false];
    
    switchPage( page:string ){
      this.lastPage = this.currentPage;
      this.currentPage = page;

      let n = this.allPagesObj[page];

      for(let i=0; i<this.allPages.length; i++){
        this.allPages[i] = false;
        this.allPages[n] = true;

      }

      

    }

}