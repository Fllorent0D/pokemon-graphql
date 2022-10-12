import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effectsUncheckedUpdateManyInput } from '../item-fling-effects/item-fling-effects-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { item_fling_effectsWhereInput } from '../item-fling-effects/item-fling-effects-where.input';

@ArgsType()
export class UpdateManyitemFlingEffectsArgs {

    @Field(() => item_fling_effectsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => item_fling_effectsUncheckedUpdateManyInput)
    data!: item_fling_effectsUncheckedUpdateManyInput;

    @Field(() => item_fling_effectsWhereInput, {nullable:true})
    @Type(() => item_fling_effectsWhereInput)
    where?: item_fling_effectsWhereInput;
}
