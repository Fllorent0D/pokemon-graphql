import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_mapCreateInput } from '../encounter-condition-value-map/encounter-condition-value-map-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneencounterConditionValueMapArgs {

    @Field(() => encounter_condition_value_mapCreateInput, {nullable:false})
    @Type(() => encounter_condition_value_mapCreateInput)
    data!: encounter_condition_value_mapCreateInput;
}
