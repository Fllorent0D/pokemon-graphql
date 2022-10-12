import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effectsUpdateInput } from '../item-fling-effects/item-fling-effects-update.input';
import { Type } from 'class-transformer';
import { item_fling_effectsWhereUniqueInput } from '../item-fling-effects/item-fling-effects-where-unique.input';

@ArgsType()
export class UpdateOneitemFlingEffectsArgs {

    @Field(() => item_fling_effectsUpdateInput, {nullable:false})
    @Type(() => item_fling_effectsUpdateInput)
    data!: item_fling_effectsUpdateInput;

    @Field(() => item_fling_effectsWhereUniqueInput, {nullable:false})
    @Type(() => item_fling_effectsWhereUniqueInput)
    where!: item_fling_effectsWhereUniqueInput;
}
