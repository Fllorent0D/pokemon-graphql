import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_proseEncounter_condition_value_idLocal_language_idCompoundUniqueInput } from './encounter-condition-value-prose-encounter-condition-value-id-local-language-id-compound-unique.input';

@InputType()
export class encounter_condition_value_proseWhereUniqueInput {

    @Field(() => encounter_condition_value_proseEncounter_condition_value_idLocal_language_idCompoundUniqueInput, {nullable:true})
    encounter_condition_value_id_local_language_id?: encounter_condition_value_proseEncounter_condition_value_idLocal_language_idCompoundUniqueInput;
}
