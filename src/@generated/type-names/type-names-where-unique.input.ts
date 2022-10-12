import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_namesType_idLocal_language_idCompoundUniqueInput } from './type-names-type-id-local-language-id-compound-unique.input';

@InputType()
export class type_namesWhereUniqueInput {

    @Field(() => type_namesType_idLocal_language_idCompoundUniqueInput, {nullable:true})
    type_id_local_language_id?: type_namesType_idLocal_language_idCompoundUniqueInput;
}
