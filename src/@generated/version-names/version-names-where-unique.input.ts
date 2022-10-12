import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_namesVersion_idLocal_language_idCompoundUniqueInput } from './version-names-version-id-local-language-id-compound-unique.input';

@InputType()
export class version_namesWhereUniqueInput {

    @Field(() => version_namesVersion_idLocal_language_idCompoundUniqueInput, {nullable:true})
    version_id_local_language_id?: version_namesVersion_idLocal_language_idCompoundUniqueInput;
}
