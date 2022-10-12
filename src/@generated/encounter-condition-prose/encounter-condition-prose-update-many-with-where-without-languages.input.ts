import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_proseScalarWhereInput } from './encounter-condition-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { encounter_condition_proseUpdateManyMutationInput } from './encounter-condition-prose-update-many-mutation.input';

@InputType()
export class encounter_condition_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => encounter_condition_proseScalarWhereInput, {nullable:false})
    @Type(() => encounter_condition_proseScalarWhereInput)
    where!: encounter_condition_proseScalarWhereInput;

    @Field(() => encounter_condition_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => encounter_condition_proseUpdateManyMutationInput)
    data!: encounter_condition_proseUpdateManyMutationInput;
}
