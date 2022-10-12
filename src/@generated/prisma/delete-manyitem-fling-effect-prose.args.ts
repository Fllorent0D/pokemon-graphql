import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effect_proseWhereInput } from '../item-fling-effect-prose/item-fling-effect-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemFlingEffectProseArgs {

    @Field(() => item_fling_effect_proseWhereInput, {nullable:true})
    @Type(() => item_fling_effect_proseWhereInput)
    where?: item_fling_effect_proseWhereInput;
}
