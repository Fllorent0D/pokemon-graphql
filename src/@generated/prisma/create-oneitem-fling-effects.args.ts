import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_fling_effectsCreateInput } from '../item-fling-effects/item-fling-effects-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemFlingEffectsArgs {

    @Field(() => item_fling_effectsCreateInput, {nullable:false})
    @Type(() => item_fling_effectsCreateInput)
    data!: item_fling_effectsCreateInput;
}
