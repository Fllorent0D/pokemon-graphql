import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesScalarWhereInput } from './encounter-condition-values-scalar-where.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesUpdateManyMutationInput } from './encounter-condition-values-update-many-mutation.input';

@InputType()
export class encounter_condition_valuesUpdateManyWithWhereWithoutEncounter_conditionsInput {

    @Field(() => encounter_condition_valuesScalarWhereInput, {nullable:false})
    @Type(() => encounter_condition_valuesScalarWhereInput)
    where!: encounter_condition_valuesScalarWhereInput;

    @Field(() => encounter_condition_valuesUpdateManyMutationInput, {nullable:false})
    @Type(() => encounter_condition_valuesUpdateManyMutationInput)
    data!: encounter_condition_valuesUpdateManyMutationInput;
}
