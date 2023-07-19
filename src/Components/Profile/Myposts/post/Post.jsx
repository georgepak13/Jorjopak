import  s from  "./Post.module.css"


const Post=(props)=>{
return( 

        
         
              <div className={s.item}>

                <img src="https://alkotraz.ru/wp-content/uploads/2019/02/umnye-lyudi.jpg"/>
                
               {props.message }
               <div>
               <span>Like</span>
               </div>
              </div>
              
              
        
      
      
    
)
}
export default Post;