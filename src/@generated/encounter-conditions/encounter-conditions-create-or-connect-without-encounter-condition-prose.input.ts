import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_conditionsWhereUniqueInput } from './encounter-conditions-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_conditionsCreateWithoutEncounter_condition_proseInput } from './encounter-conditions-create-without-encounter-condition-prose.input';

@InputType()
export class encounter_conditionsCreateOrConnectWithoutEncounter_condition_proseInput {

    @Field(() => encounter_conditionsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_conditionsWhereUniqueInput)
    where!: encounter_conditionsWhereUniqueInput;

    @Field(() => encounter_conditionsCreateWithoutEncounter_condition_proseInput, {nullable:false})
    @Type(() => encounter_conditionsCreateWithoutEncounter_condition_proseInput)
    create!: encounter_conditionsCreateWithoutEncounter_condition_proseInput;
}
