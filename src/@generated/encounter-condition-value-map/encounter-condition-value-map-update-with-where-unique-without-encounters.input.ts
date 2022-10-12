import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_mapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_mapUpdateWithoutEncountersInput } from './encounter-condition-value-map-update-without-encounters.input';

@InputType()
export class encounter_condition_value_mapUpdateWithWhereUniqueWithoutEncountersInput {

    @Field(() => encounter_condition_value_mapWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    where!: encounter_condition_value_mapWhereUniqueInput;

    @Field(() => encounter_condition_value_mapUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => encounter_condition_value_mapUpdateWithoutEncountersInput)
    data!: encounter_condition_value_mapUpdateWithoutEncountersInput;
}
