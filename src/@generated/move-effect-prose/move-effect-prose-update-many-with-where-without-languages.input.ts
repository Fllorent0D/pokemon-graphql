import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_proseScalarWhereInput } from './move-effect-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { move_effect_proseUpdateManyMutationInput } from './move-effect-prose-update-many-mutation.input';

@InputType()
export class move_effect_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => move_effect_proseScalarWhereInput, {nullable:false})
    @Type(() => move_effect_proseScalarWhereInput)
    where!: move_effect_proseScalarWhereInput;

    @Field(() => move_effect_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_effect_proseUpdateManyMutationInput)
    data!: move_effect_proseUpdateManyMutationInput;
}
