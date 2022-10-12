import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_proseScalarWhereInput } from './encounter-condition-value-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_proseUpdateManyMutationInput } from './encounter-condition-value-prose-update-many-mutation.input';

@InputType()
export class encounter_condition_value_proseUpdateManyWithWhereWithoutEncounter_condition_valuesInput {

    @Field(() => encounter_condition_value_proseScalarWhereInput, {nullable:false})
    @Type(() => encounter_condition_value_proseScalarWhereInput)
    where!: encounter_condition_value_proseScalarWhereInput;

    @Field(() => encounter_condition_value_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => encounter_condition_value_proseUpdateManyMutationInput)
    data!: encounter_condition_value_proseUpdateManyMutationInput;
}
