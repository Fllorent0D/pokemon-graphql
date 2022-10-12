import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_namesLanguage_idLocal_language_idCompoundUniqueInput } from './language-names-language-id-local-language-id-compound-unique.input';

@InputType()
export class language_namesWhereUniqueInput {

    @Field(() => language_namesLanguage_idLocal_language_idCompoundUniqueInput, {nullable:true})
    language_id_local_language_id?: language_namesLanguage_idLocal_language_idCompoundUniqueInput;
}
