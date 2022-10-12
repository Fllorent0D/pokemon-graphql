import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_mapWhereUniqueInput } from '../encounter-condition-value-map/encounter-condition-value-map-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_mapCreateInput } from '../encounter-condition-value-map/encounter-condition-value-map-create.input';
import { encounter_condition_value_mapUpdateInput } from '../encounter-condition-value-map/encounter-condition-value-map-update.input';

@ArgsType()
export class UpsertOneencounterConditionValueMapArgs {

    @Field(() => encounter_condition_value_mapWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    where!: encounter_condition_value_mapWhereUniqueInput;

    @Field(() => encounter_condition_value_mapCreateInput, {nullable:false})
    @Type(() => encounter_condition_value_mapCreateInput)
    create!: encounter_condition_value_mapCreateInput;

    @Field(() => encounter_condition_value_mapUpdateInput, {nullable:false})
    @Type(() => encounter_condition_value_mapUpdateInput)
    update!: encounter_condition_value_mapUpdateInput;
}
