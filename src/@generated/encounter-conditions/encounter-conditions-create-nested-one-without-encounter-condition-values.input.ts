import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_conditionsCreateWithoutEncounter_condition_valuesInput } from './encounter-conditions-create-without-encounter-condition-values.input';
import { Type } from 'class-transformer';
import { encounter_conditionsCreateOrConnectWithoutEncounter_condition_valuesInput } from './encounter-conditions-create-or-connect-without-encounter-condition-values.input';
import { encounter_conditionsWhereUniqueInput } from './encounter-conditions-where-unique.input';

@InputType()
export class encounter_conditionsCreateNestedOneWithoutEncounter_condition_valuesInput {

    @Field(() => encounter_conditionsCreateWithoutEncounter_condition_valuesInput, {nullable:true})
    @Type(() => encounter_conditionsCreateWithoutEncounter_condition_valuesInput)
    create?: encounter_conditionsCreateWithoutEncounter_condition_valuesInput;

    @Field(() => encounter_conditionsCreateOrConnectWithoutEncounter_condition_valuesInput, {nullable:true})
    @Type(() => encounter_conditionsCreateOrConnectWithoutEncounter_condition_valuesInput)
    connectOrCreate?: encounter_conditionsCreateOrConnectWithoutEncounter_condition_valuesInput;

    @Field(() => encounter_conditionsWhereUniqueInput, {nullable:true})
    @Type(() => encounter_conditionsWhereUniqueInput)
    connect?: encounter_conditionsWhereUniqueInput;
}
