import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_mapUpdateInput } from '../encounter-condition-value-map/encounter-condition-value-map-update.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_mapWhereUniqueInput } from '../encounter-condition-value-map/encounter-condition-value-map-where-unique.input';

@ArgsType()
export class UpdateOneencounterConditionValueMapArgs {

    @Field(() => encounter_condition_value_mapUpdateInput, {nullable:false})
    @Type(() => encounter_condition_value_mapUpdateInput)
    data!: encounter_condition_value_mapUpdateInput;

    @Field(() => encounter_condition_value_mapWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    where!: encounter_condition_value_mapWhereUniqueInput;
}
