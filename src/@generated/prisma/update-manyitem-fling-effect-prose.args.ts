import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effect_proseUpdateManyMutationInput } from '../item-fling-effect-prose/item-fling-effect-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { item_fling_effect_proseWhereInput } from '../item-fling-effect-prose/item-fling-effect-prose-where.input';

@ArgsType()
export class UpdateManyitemFlingEffectProseArgs {

    @Field(() => item_fling_effect_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => item_fling_effect_proseUpdateManyMutationInput)
    data!: item_fling_effect_proseUpdateManyMutationInput;

    @Field(() => item_fling_effect_proseWhereInput, {nullable:true})
    @Type(() => item_fling_effect_proseWhereInput)
    where?: item_fling_effect_proseWhereInput;
}
