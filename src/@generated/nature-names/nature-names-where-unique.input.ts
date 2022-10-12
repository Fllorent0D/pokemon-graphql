import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_namesNature_idLocal_language_idCompoundUniqueInput } from './nature-names-nature-id-local-language-id-compound-unique.input';

@InputType()
export class nature_namesWhereUniqueInput {

    @Field(() => nature_namesNature_idLocal_language_idCompoundUniqueInput, {nullable:true})
    nature_id_local_language_id?: nature_namesNature_idLocal_language_idCompoundUniqueInput;
}
