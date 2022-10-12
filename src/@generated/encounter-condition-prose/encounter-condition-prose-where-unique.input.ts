import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_proseEncounter_condition_idLocal_language_idCompoundUniqueInput } from './encounter-condition-prose-encounter-condition-id-local-language-id-compound-unique.input';

@InputType()
export class encounter_condition_proseWhereUniqueInput {

    @Field(() => encounter_condition_proseEncounter_condition_idLocal_language_idCompoundUniqueInput, {nullable:true})
    encounter_condition_id_local_language_id?: encounter_condition_proseEncounter_condition_idLocal_language_idCompoundUniqueInput;
}
