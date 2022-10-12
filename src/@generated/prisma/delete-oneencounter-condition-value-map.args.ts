import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_mapWhereUniqueInput } from '../encounter-condition-value-map/encounter-condition-value-map-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneencounterConditionValueMapArgs {

    @Field(() => encounter_condition_value_mapWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    where!: encounter_condition_value_mapWhereUniqueInput;
}
