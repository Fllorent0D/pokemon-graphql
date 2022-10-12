import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_trigger_proseScalarWhereInput } from './evolution-trigger-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { evolution_trigger_proseUpdateManyMutationInput } from './evolution-trigger-prose-update-many-mutation.input';

@InputType()
export class evolution_trigger_proseUpdateManyWithWhereWithoutEvolution_triggersInput {

    @Field(() => evolution_trigger_proseScalarWhereInput, {nullable:false})
    @Type(() => evolution_trigger_proseScalarWhereInput)
    where!: evolution_trigger_proseScalarWhereInput;

    @Field(() => evolution_trigger_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => evolution_trigger_proseUpdateManyMutationInput)
    data!: evolution_trigger_proseUpdateManyMutationInput;
}
