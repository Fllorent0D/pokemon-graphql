import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesCreateWithoutEncounter_conditionsInput } from './encounter-condition-values-create-without-encounter-conditions.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesCreateOrConnectWithoutEncounter_conditionsInput } from './encounter-condition-values-create-or-connect-without-encounter-conditions.input';
import { encounter_condition_valuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';

@InputType()
export class encounter_condition_valuesUncheckedCreateNestedManyWithoutEncounter_conditionsInput {

    @Field(() => [encounter_condition_valuesCreateWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_valuesCreateWithoutEncounter_conditionsInput)
    create?: Array<encounter_condition_valuesCreateWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_valuesCreateOrConnectWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_valuesCreateOrConnectWithoutEncounter_conditionsInput)
    connectOrCreate?: Array<encounter_condition_valuesCreateOrConnectWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_valuesWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_valuesWhereUniqueInput)
    connect?: Array<encounter_condition_valuesWhereUniqueInput>;
}
