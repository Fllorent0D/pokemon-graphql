import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { Encounter_condition_valuesRelationFilter } from '../prisma/encounter-condition-values-relation-filter.input';
import { EncountersRelationFilter } from '../prisma/encounters-relation-filter.input';

@InputType()
export class encounter_condition_value_mapWhereInput {

    @Field(() => [encounter_condition_value_mapWhereInput], {nullable:true})
    AND?: Array<encounter_condition_value_mapWhereInput>;

    @Field(() => [encounter_condition_value_mapWhereInput], {nullable:true})
    OR?: Array<encounter_condition_value_mapWhereInput>;

    @Field(() => [encounter_condition_value_mapWhereInput], {nullable:true})
    NOT?: Array<encounter_condition_value_mapWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    encounter_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_condition_value_id?: IntFilter;

    @Field(() => Encounter_condition_valuesRelationFilter, {nullable:true})
    encounter_condition_values?: Encounter_condition_valuesRelationFilter;

    @Field(() => EncountersRelationFilter, {nullable:true})
    encounters?: EncountersRelationFilter;
}
