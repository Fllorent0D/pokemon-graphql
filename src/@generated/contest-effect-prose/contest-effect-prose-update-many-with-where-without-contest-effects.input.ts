import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effect_proseScalarWhereInput } from './contest-effect-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { contest_effect_proseUpdateManyMutationInput } from './contest-effect-prose-update-many-mutation.input';

@InputType()
export class contest_effect_proseUpdateManyWithWhereWithoutContest_effectsInput {

    @Field(() => contest_effect_proseScalarWhereInput, {nullable:false})
    @Type(() => contest_effect_proseScalarWhereInput)
    where!: contest_effect_proseScalarWhereInput;

    @Field(() => contest_effect_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => contest_effect_proseUpdateManyMutationInput)
    data!: contest_effect_proseUpdateManyMutationInput;
}
