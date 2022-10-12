import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effectsWhereInput } from '../item-fling-effects/item-fling-effects-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemFlingEffectsArgs {

    @Field(() => item_fling_effectsWhereInput, {nullable:true})
    @Type(() => item_fling_effectsWhereInput)
    where?: item_fling_effectsWhereInput;
}
