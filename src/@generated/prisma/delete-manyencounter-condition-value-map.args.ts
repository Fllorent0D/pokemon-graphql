import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_mapWhereInput } from '../encounter-condition-value-map/encounter-condition-value-map-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyencounterConditionValueMapArgs {

    @Field(() => encounter_condition_value_mapWhereInput, {nullable:true})
    @Type(() => encounter_condition_value_mapWhereInput)
    where?: encounter_condition_value_mapWhereInput;
}
