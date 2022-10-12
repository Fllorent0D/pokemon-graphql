import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_conditionsWhereUniqueInput } from './encounter-conditions-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_conditionsCreateWithoutEncounter_condition_valuesInput } from './encounter-conditions-create-without-encounter-condition-values.input';

@InputType()
export class encounter_conditionsCreateOrConnectWithoutEncounter_condition_valuesInput {

    @Field(() => encounter_conditionsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_conditionsWhereUniqueInput)
    where!: encounter_conditionsWhereUniqueInput;

    @Field(() => encounter_conditionsCreateWithoutEncounter_condition_valuesInput, {nullable:false})
    @Type(() => encounter_conditionsCreateWithoutEncounter_condition_valuesInput)
    create!: encounter_conditionsCreateWithoutEncounter_condition_valuesInput;
}
