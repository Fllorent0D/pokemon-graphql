import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_mapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_mapCreateWithoutEncountersInput } from './encounter-condition-value-map-create-without-encounters.input';

@InputType()
export class encounter_condition_value_mapCreateOrConnectWithoutEncountersInput {

    @Field(() => encounter_condition_value_mapWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    where!: encounter_condition_value_mapWhereUniqueInput;

    @Field(() => encounter_condition_value_mapCreateWithoutEncountersInput, {nullable:false})
    @Type(() => encounter_condition_value_mapCreateWithoutEncountersInput)
    create!: encounter_condition_value_mapCreateWithoutEncountersInput;
}
