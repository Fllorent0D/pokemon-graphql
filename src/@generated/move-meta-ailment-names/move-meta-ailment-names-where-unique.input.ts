import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailment_namesMove_meta_ailment_idLocal_language_idCompoundUniqueInput } from './move-meta-ailment-names-move-meta-ailment-id-local-language-id-compound-unique.input';

@InputType()
export class move_meta_ailment_namesWhereUniqueInput {

    @Field(() => move_meta_ailment_namesMove_meta_ailment_idLocal_language_idCompoundUniqueInput, {nullable:true})
    move_meta_ailment_id_local_language_id?: move_meta_ailment_namesMove_meta_ailment_idLocal_language_idCompoundUniqueInput;
}
