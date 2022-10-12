import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_method_proseScalarWhereInput } from './encounter-method-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { encounter_method_proseUpdateManyMutationInput } from './encounter-method-prose-update-many-mutation.input';

@InputType()
export class encounter_method_proseUpdateManyWithWhereWithoutEncounter_methodsInput {

    @Field(() => encounter_method_proseScalarWhereInput, {nullable:false})
    @Type(() => encounter_method_proseScalarWhereInput)
    where!: encounter_method_proseScalarWhereInput;

    @Field(() => encounter_method_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => encounter_method_proseUpdateManyMutationInput)
    data!: encounter_method_proseUpdateManyMutationInput;
}
