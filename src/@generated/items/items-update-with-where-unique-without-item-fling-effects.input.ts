import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsUpdateWithoutItem_fling_effectsInput } from './items-update-without-item-fling-effects.input';

@InputType()
export class itemsUpdateWithWhereUniqueWithoutItem_fling_effectsInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsUpdateWithoutItem_fling_effectsInput, {nullable:false})
    @Type(() => itemsUpdateWithoutItem_fling_effectsInput)
    data!: itemsUpdateWithoutItem_fling_effectsInput;
}
