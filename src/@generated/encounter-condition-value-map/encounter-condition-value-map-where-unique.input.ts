import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_mapEncounter_idEncounter_condition_value_idCompoundUniqueInput } from './encounter-condition-value-map-encounter-id-encounter-condition-value-id-compound-unique.input';

@InputType()
export class encounter_condition_value_mapWhereUniqueInput {

    @Field(() => encounter_condition_value_mapEncounter_idEncounter_condition_value_idCompoundUniqueInput, {nullable:true})
    encounter_id_encounter_condition_value_id?: encounter_condition_value_mapEncounter_idEncounter_condition_value_idCompoundUniqueInput;
}
