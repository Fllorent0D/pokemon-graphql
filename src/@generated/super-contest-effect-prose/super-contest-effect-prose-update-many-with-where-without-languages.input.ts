import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effect_proseScalarWhereInput } from './super-contest-effect-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { super_contest_effect_proseUpdateManyMutationInput } from './super-contest-effect-prose-update-many-mutation.input';

@InputType()
export class super_contest_effect_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => super_contest_effect_proseScalarWhereInput, {nullable:false})
    @Type(() => super_contest_effect_proseScalarWhereInput)
    where!: super_contest_effect_proseScalarWhereInput;

    @Field(() => super_contest_effect_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => super_contest_effect_proseUpdateManyMutationInput)
    data!: super_contest_effect_proseUpdateManyMutationInput;
}
