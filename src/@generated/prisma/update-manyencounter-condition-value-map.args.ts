import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_condition_value_mapUncheckedUpdateManyInput } from '../encounter-condition-value-map/encounter-condition-value-map-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_mapWhereInput } from '../encounter-condition-value-map/encounter-condition-value-map-where.input';

@ArgsType()
export class UpdateManyencounterConditionValueMapArgs {

    @Field(() => encounter_condition_value_mapUncheckedUpdateManyInput, {nullable:false})
    @Type(() => encounter_condition_value_mapUncheckedUpdateManyInput)
    data!: encounter_condition_value_mapUncheckedUpdateManyInput;

    @Field(() => encounter_condition_value_mapWhereInput, {nullable:true})
    @Type(() => encounter_condition_value_mapWhereInput)
    where?: encounter_condition_value_mapWhereInput;
}
