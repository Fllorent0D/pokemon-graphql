import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effect_proseWhereUniqueInput } from '../item-fling-effect-prose/item-fling-effect-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneitemFlingEffectProseArgs {

    @Field(() => item_fling_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    where!: item_fling_effect_proseWhereUniqueInput;
}
