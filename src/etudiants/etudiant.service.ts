import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  NotFoundException, 
  UnauthorizedException
} from '@nestjs/common';
import { etudiant } from './etudiant.entity';
import { etudiantRepository } from './etudiant.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEtudiantDTO } from './dto/createEtudiantDTO';
import { FiliereRepository } from 'src/filieres/filiere.repository';
import { Filiere } from 'src/filieres/filiere.entity';
import { AuthDTO } from 'src/candidatures/dto/AuthDTO';
import { JwtPayload } from 'src/candidatures/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import {FilieresService} from '../filieres/filieres.service';
@Injectable()
export class etudiantsService {

  constructor(
    @InjectRepository(etudiantRepository)
    private etudiantRepository: etudiantRepository,
    private filiereRepository: FiliereRepository,
    private jwtService: JwtService,

  
   
  ) {}

  async getAllEtudiants(): Promise<etudiant[]> {
    return await this.etudiantRepository.find();
  }



  async getByMassar(massar:string): Promise<etudiant> {
    const found= await this.etudiantRepository.findOne(massar);
    
   

    if(!found){

      throw new NotFoundException('this etudiant  not found !! ')
    }
    return found;
}

async getByMassarFiliere(massar:string): Promise<any> {
  const found= await this.etudiantRepository.findOne(massar);
  
 

  if(!found){

    throw new NotFoundException('this etudiant  not found !! ')
  }

 /*let filiere: Filiere = await this.filiereRepository.findOne({
    id_filiere: found.filiere.id_filiere,
   });*/
  
 
 
  return found.filiere.nom_filiere;
}

  async createEtudiant(createEtDTO: CreateEtudiantDTO): Promise<void> {

   
    
    
    // create new etudiant
    var Et = this.etudiantRepository.create();
   
    Et.massar=createEtDTO.massar;
    Et.cin=createEtDTO.cin;
    Et.email=createEtDTO.email;

    Et.teleParent=createEtDTO.teleParent;
    Et.dateNaissance=createEtDTO.dateNaissance;
    Et.lieuNaissance=createEtDTO.lieuNaissance;
    Et.note=createEtDTO.note;
    Et.lastname_fr=createEtDTO.lastname_fr;
    Et.lastname_ar=createEtDTO.lastname_ar;
    Et.firstname_fr=createEtDTO.firstname_fr;
    Et.firstname_ar=createEtDTO.firstname_ar;
    Et.nationalite=createEtDTO.nationalite;
    Et.address=createEtDTO.address;
    Et.telephone=createEtDTO.cin;
    Et.nom_Prenom_Pere=createEtDTO.nom_Prenom_Pere;
    Et.profession_Pere=createEtDTO.profession_Pere;
    Et.nom_Prenom_mere=createEtDTO.nom_Prenom_mere;
    Et.profession_mere=createEtDTO.profession_mere;
    Et.lycee=createEtDTO.lycee;
    Et.id_filiere=createEtDTO.id_filiere;
    Et.adresse_parent=createEtDTO.adresse_parent;
    Et.annee_Bac=createEtDTO.annee_Bac;
    Et.type_Bac=createEtDTO.type_Bac;
    Et.mention=createEtDTO.mention;
    Et.password=createEtDTO.password;
    Et.delegue=createEtDTO.delegue;
    Et.academie=createEtDTO.academie;
    Et.niveau=createEtDTO.niveau;
    Et.photo=createEtDTO.photo;


    Et.status=createEtDTO.niveau;

    if(createEtDTO.externe===true){
      Et.status="externe";
    }
    Et.diplomePrecedent=createEtDTO.diplomePrecedent
    Et.etablissement=createEtDTO.etablissement;
    Et.ville=createEtDTO.ville;
    Et.classement=createEtDTO.classement;
    Et.choixFilere1=createEtDTO.choixFilere1;
    Et.choixFilere2=createEtDTO.choixFilere2;
    Et.choixFilere3=createEtDTO.choixFilere3;
    Et.confirmEmail=createEtDTO.confirmEmail;
    Et.confirmPassword=createEtDTO.confirmPassword;
    Et.externe=createEtDTO.externe;
    // Get the filiere object from the id
    let filiere: Filiere = await this.filiereRepository.findOne({
     id_filiere: createEtDTO.id_filiere,
    });
    Et.filiere = filiere;
  
    try {
        await this.etudiantRepository.insert(Et);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Code Massar , CIN or Email Already Exist');
      }else {
        throw new InternalServerErrorException();
      }
    }
  }

      
 async update(contact: CreateEtudiantDTO): Promise<any> {
    return await this.etudiantRepository.update(contact.massar, contact);
}
async delete(id): Promise<any> {
  return await this.etudiantRepository.delete(id);
}


// choix filiere

  async  choixFiliere(nbplaceInfo:number,nbplaceIndus:number ,nbplaceGPMC:number ,nbplaceGTR:number  ):Promise<void>{
      
  // 1 filiere informatique 
  // 2 filiere Indus
  // 3 filiere GPMC
  // 4  filiere GTR

  var listEt=await this.etudiantRepository.find();
  
  const newLocal = (await listEt).length;
  var count=0;
  // count le nombre des etudiant en 2CP
  for(var k=0;k<newLocal;k++){
     
     if(listEt[k].niveau==='2CP'){

           count++;

     }

  }


   var nombreEtudiantClasse= Math.trunc(count/4);
   // classement 2
   for(var i =0;i<newLocal;i++){

    if(listEt[i].classement<=nombreEtudiantClasse  && listEt[i].niveau==='2CP'){
       
              
      let filiere: Filiere = await this.filiereRepository.findOne({
       id_filiere: listEt[i].choixFilere1
      });
      listEt[i].filiere = filiere;
      listEt[i].id_filiere=listEt[i].choixFilere1
        await  this.etudiantRepository.update(listEt[i].massar,listEt[i]);

    



        if(listEt[i].choixFilere1==1){
               
             nbplaceInfo--;

        }
        else if(listEt[i].choixFilere1==2){
              
           nbplaceIndus--;
        }
        else if(listEt[i].choixFilere1==3){
              
          nbplaceGPMC--;;
       }
       else{
              
        nbplaceGTR--;
     }
   }

   }

   // classement 2
   for(var i =0;i<newLocal;i++){
            
    if(listEt[i].classement>nombreEtudiantClasse  &&  listEt[i].classement<=(2*nombreEtudiantClasse)  && listEt[i].niveau==='2CP'){
           
      if(listEt[i].choixFilere1==1 && nbplaceInfo>0){
        let filiere: Filiere = await this.filiereRepository.findOne({
          id_filiere: listEt[i].choixFilere1
         });
         listEt[i].filiere = filiere;
         listEt[i].id_filiere=listEt[i].choixFilere1
         nbplaceInfo--;
         
 
        await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           
      }

      else if(listEt[i].choixFilere1==2 && nbplaceIndus>0){
        let filiere: Filiere = await this.filiereRepository.findOne({
          id_filiere: listEt[i].choixFilere1
         });
         listEt[i].filiere = filiere;
         listEt[i].id_filiere=listEt[i].choixFilere1
         await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
         nbplaceIndus--;
      }
      else if(listEt[i].choixFilere1==3  && nbplaceGPMC>0){
        let filiere: Filiere = await this.filiereRepository.findOne({
          id_filiere: listEt[i].choixFilere1
         });
         listEt[i].filiere = filiere;
         listEt[i].id_filiere=listEt[i].choixFilere1
         await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
         nbplaceGPMC--;
      }
      else if(listEt[i].choixFilere1==4  && nbplaceGTR>0){
        let filiere: Filiere = await this.filiereRepository.findOne({
          id_filiere: listEt[i].choixFilere1
         });
         listEt[i].filiere = filiere;
         listEt[i].id_filiere=listEt[i].choixFilere1;
         await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
         nbplaceGTR--;
      }

      else{
        let filiere: Filiere = await this.filiereRepository.findOne({
          id_filiere: listEt[i].choixFilere2
         });
         listEt[i].filiere = filiere;
         listEt[i].id_filiere=listEt[i].choixFilere2
         await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
        
        if(listEt[i].choixFilere2==1){
               
          nbplaceInfo--;

        }
        else if(listEt[i].choixFilere2==2){
           
          nbplaceIndus--;
        }
        else if(listEt[i].choixFilere2==3){
           
          nbplaceGPMC--;
        }
        else{
           
          nbplaceGTR--;
        }
    
        


      }
    
     
     }
    }
    // classement 3
    for(var i =0;i<newLocal;i++){
      
      if(listEt[i].classement>(2*nombreEtudiantClasse)  &&  listEt[i].classement<=(3*nombreEtudiantClasse)   && listEt[i].niveau==='2CP'){
        if(listEt[i].choixFilere1==1 && nbplaceInfo>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere1
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere1
           nbplaceInfo--;
           
   
          await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
             
        }

        else if(listEt[i].choixFilere1==2 && nbplaceIndus>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere1
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere1
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceIndus--;
        }
        else if(listEt[i].choixFilere1==3  && nbplaceGPMC>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere1
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere1
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceGPMC--;
        }
        else if(listEt[i].choixFilere1==4  && nbplaceGTR>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere1
            
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere1
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceGTR--;
        }

        else if(listEt[i].choixFilere2==1 && nbplaceInfo>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere2
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere2
           nbplaceInfo--;
           
   
          await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
             
        }

        else if(listEt[i].choixFilere2==2 && nbplaceIndus>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere2
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere2
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceIndus--;
        }
        else if(listEt[i].choixFilere2==3  && nbplaceGPMC>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere2
            
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere2
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceGPMC--;
        }
        else if(listEt[i].choixFilere2==4  && nbplaceGTR>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere2
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere2
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceGTR--;
        }

        else{
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere3
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere3
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
          
          if(listEt[i].choixFilere3==1){
                 
            nbplaceInfo--;
  
          }
          else if(listEt[i].choixFilere3==2){
             
            nbplaceIndus--;
          }
          else if(listEt[i].choixFilere3==3){
             
            nbplaceGPMC--;
          }
          else{
             
            nbplaceGTR--;
          }
      
          
  

        }


      }

    }

// classement 4
    for(var i =0;i<newLocal;i++){
      
      if(listEt[i].classement>(3*nombreEtudiantClasse)    && listEt[i].niveau==='2CP'){
        if(listEt[i].choixFilere1==1 && nbplaceInfo>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere1
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere1
           nbplaceInfo--;
           
   
          await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
             
        }

        else if(listEt[i].choixFilere1==2 && nbplaceIndus>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere1
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere1
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceIndus--;
        }
        else if(listEt[i].choixFilere1==3  && nbplaceGPMC>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere1
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere1
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceGPMC--;
        }
        else if(listEt[i].choixFilere1==4  && nbplaceGTR>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere1
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere1
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceGTR--;
        }

        else if(listEt[i].choixFilere2==1 && nbplaceInfo>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere2
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere2
           nbplaceInfo--;
           
   
          await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
             
        }

        else if(listEt[i].choixFilere2==2 && nbplaceIndus>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere2
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere2
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceIndus--;
        }
        else if(listEt[i].choixFilere2==3  && nbplaceGPMC>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere2
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere2
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceGPMC--;
        }
        else if(listEt[i].choixFilere2==4  && nbplaceGTR>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere2
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere2
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceGTR--;
        }

        else if(listEt[i].choixFilere3==1 && nbplaceInfo>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere3
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere3
           nbplaceInfo--;
           
   
          await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
             
        }

        else if(listEt[i].choixFilere3==2 && nbplaceIndus>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere3
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere3
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceIndus--;
        }
        else if(listEt[i].choixFilere3==3  && nbplaceGPMC>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere3
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere3
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceGPMC--;
        }
        else if(listEt[i].choixFilere3==4  && nbplaceGTR>0){
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere3
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere3
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
           nbplaceGTR--;
        }





        else{
          let filiere: Filiere = await this.filiereRepository.findOne({
            id_filiere: listEt[i].choixFilere4
           });
           listEt[i].filiere = filiere;
           listEt[i].id_filiere=listEt[i].choixFilere4
           await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
          
          if(listEt[i].choixFilere4==1){
                 
            nbplaceInfo--;
  
          }
          else if(listEt[i].choixFilere4==2){
             
            nbplaceIndus--;
          }
          else if(listEt[i].choixFilere4==3){
             
            nbplaceGPMC--;
          }
          else{
             
            nbplaceGTR--;
          }
      
          
  

        }


      }

    }
 
   /*for(var i =0;i<newLocal;i++){
            
        
          
         
            if(listEt[i].classement<=nombreEtudiantClasse  && listEt[i].status==='2CP'){
       
              
               let filiere: Filiere = await this.filiereRepository.findOne({
                id_filiere: listEt[i].choixFilere1
               });
               listEt[i].filiere = filiere;
             
                 await  this.etudiantRepository.update(listEt[i].massar,listEt[i]);
            }
            else if(listEt[i].classement>nombreEtudiantClasse  &&  listEt[i].classement<=(2*nombreEtudiantClasse)  && listEt[i].status==='2CP'){
           
             let filiere: Filiere = await this.filiereRepository.findOne({
              id_filiere: listEt[i].choixFilere2
             });
             listEt[i].filiere = filiere;
         
            await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
            }
            else if ( listEt[i].classement>(2*nombreEtudiantClasse)  &&  listEt[i].classement<=(3*nombreEtudiantClasse)   && listEt[i].status==='2CP' ){
           
             let filiere: Filiere = await this.filiereRepository.findOne({
              id_filiere: listEt[i].choixFilere3
             });
             listEt[i].filiere = filiere;
          
              await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
            
            }else if( listEt[i].status==='2CP' ){
              
              let filiere: Filiere = await this.filiereRepository.findOne({
               id_filiere: listEt[i].choixFilere4
              });
              listEt[i].filiere = filiere;
           
               await this.etudiantRepository.update(listEt[i].massar,listEt[i]);
          
             }
         

         
   }
 */

  }





async signIn(authDTO: AuthDTO): Promise<{ accessToken: string }> {
const { massar, email, password } = authDTO;

const etudiant = await this. etudiantRepository.findOne({
  email,
  massar,
});

if (etudiant) {

    const payload: JwtPayload = { massar, email };

    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };

} else {
  throw new UnauthorizedException('Invalid Credentials');
}
}
}
