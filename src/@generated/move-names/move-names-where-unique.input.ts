import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_namesMove_idLocal_language_idCompoundUniqueInput } from './move-names-move-id-local-language-id-compound-unique.input';

@InputType()
export class move_namesWhereUniqueInput {

    @Field(() => move_namesMove_idLocal_language_idCompoundUniqueInput, {nullable:true})
    move_id_local_language_id?: move_namesMove_idLocal_language_idCompoundUniqueInput;
}
