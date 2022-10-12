import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effectsWhereUniqueInput } from '../item-fling-effects/item-fling-effects-where-unique.input';
import { Type } from 'class-transformer';
import { item_fling_effectsCreateInput } from '../item-fling-effects/item-fling-effects-create.input';
import { item_fling_effectsUpdateInput } from '../item-fling-effects/item-fling-effects-update.input';

@ArgsType()
export class UpsertOneitemFlingEffectsArgs {

    @Field(() => item_fling_effectsWhereUniqueInput, {nullable:false})
    @Type(() => item_fling_effectsWhereUniqueInput)
    where!: item_fling_effectsWhereUniqueInput;

    @Field(() => item_fling_effectsCreateInput, {nullable:false})
    @Type(() => item_fling_effectsCreateInput)
    create!: item_fling_effectsCreateInput;

    @Field(() => item_fling_effectsUpdateInput, {nullable:false})
    @Type(() => item_fling_effectsUpdateInput)
    update!: item_fling_effectsUpdateInput;
}
