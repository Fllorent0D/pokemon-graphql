import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generation_namesGeneration_idLocal_language_idCompoundUniqueInput } from './generation-names-generation-id-local-language-id-compound-unique.input';

@InputType()
export class generation_namesWhereUniqueInput {

    @Field(() => generation_namesGeneration_idLocal_language_idCompoundUniqueInput, {nullable:true})
    generation_id_local_language_id?: generation_namesGeneration_idLocal_language_idCompoundUniqueInput;
}
