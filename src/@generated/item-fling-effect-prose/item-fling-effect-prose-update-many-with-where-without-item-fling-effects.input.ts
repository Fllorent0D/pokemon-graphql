import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effect_proseScalarWhereInput } from './item-fling-effect-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { item_fling_effect_proseUpdateManyMutationInput } from './item-fling-effect-prose-update-many-mutation.input';

@InputType()
export class item_fling_effect_proseUpdateManyWithWhereWithoutItem_fling_effectsInput {

    @Field(() => item_fling_effect_proseScalarWhereInput, {nullable:false})
    @Type(() => item_fling_effect_proseScalarWhereInput)
    where!: item_fling_effect_proseScalarWhereInput;

    @Field(() => item_fling_effect_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => item_fling_effect_proseUpdateManyMutationInput)
    data!: item_fling_effect_proseUpdateManyMutationInput;
}
