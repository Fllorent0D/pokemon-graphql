import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmness_namesBerry_firmness_idLocal_language_idCompoundUniqueInput } from './berry-firmness-names-berry-firmness-id-local-language-id-compound-unique.input';

@InputType()
export class berry_firmness_namesWhereUniqueInput {

    @Field(() => berry_firmness_namesBerry_firmness_idLocal_language_idCompoundUniqueInput, {nullable:true})
    berry_firmness_id_local_language_id?: berry_firmness_namesBerry_firmness_idLocal_language_idCompoundUniqueInput;
}
