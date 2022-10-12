import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_method_proseEncounter_method_idLocal_language_idCompoundUniqueInput } from './encounter-method-prose-encounter-method-id-local-language-id-compound-unique.input';

@InputType()
export class encounter_method_proseWhereUniqueInput {

    @Field(() => encounter_method_proseEncounter_method_idLocal_language_idCompoundUniqueInput, {nullable:true})
    encounter_method_id_local_language_id?: encounter_method_proseEncounter_method_idLocal_language_idCompoundUniqueInput;
}
