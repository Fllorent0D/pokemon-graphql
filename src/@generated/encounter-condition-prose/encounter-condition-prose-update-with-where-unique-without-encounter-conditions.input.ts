import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_proseWhereUniqueInput } from './encounter-condition-prose-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_condition_proseUpdateWithoutEncounter_conditionsInput } from './encounter-condition-prose-update-without-encounter-conditions.input';

@InputType()
export class encounter_condition_proseUpdateWithWhereUniqueWithoutEncounter_conditionsInput {

    @Field(() => encounter_condition_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    where!: encounter_condition_proseWhereUniqueInput;

    @Field(() => encounter_condition_proseUpdateWithoutEncounter_conditionsInput, {nullable:false})
    @Type(() => encounter_condition_proseUpdateWithoutEncounter_conditionsInput)
    data!: encounter_condition_proseUpdateWithoutEncounter_conditionsInput;
}
