import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effectsWhereUniqueInput } from '../item-fling-effects/item-fling-effects-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneitemFlingEffectsArgs {

    @Field(() => item_fling_effectsWhereUniqueInput, {nullable:false})
    @Type(() => item_fling_effectsWhereUniqueInput)
    where!: item_fling_effectsWhereUniqueInput;
}
