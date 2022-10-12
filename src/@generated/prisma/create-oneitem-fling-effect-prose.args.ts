import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effect_proseCreateInput } from '../item-fling-effect-prose/item-fling-effect-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemFlingEffectProseArgs {

    @Field(() => item_fling_effect_proseCreateInput, {nullable:false})
    @Type(() => item_fling_effect_proseCreateInput)
    data!: item_fling_effect_proseCreateInput;
}
