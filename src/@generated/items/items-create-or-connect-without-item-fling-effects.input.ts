import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_fling_effectsInput } from './items-create-without-item-fling-effects.input';

@InputType()
export class itemsCreateOrConnectWithoutItem_fling_effectsInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateWithoutItem_fling_effectsInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_fling_effectsInput)
    create!: itemsCreateWithoutItem_fling_effectsInput;
}
