import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effectsWhereUniqueInput } from './item-fling-effects-where-unique.input';
import { Type } from 'class-transformer';
import { item_fling_effectsCreateWithoutItemsInput } from './item-fling-effects-create-without-items.input';

@InputType()
export class item_fling_effectsCreateOrConnectWithoutItemsInput {

    @Field(() => item_fling_effectsWhereUniqueInput, {nullable:false})
    @Type(() => item_fling_effectsWhereUniqueInput)
    where!: item_fling_effectsWhereUniqueInput;

    @Field(() => item_fling_effectsCreateWithoutItemsInput, {nullable:false})
    @Type(() => item_fling_effectsCreateWithoutItemsInput)
    create!: item_fling_effectsCreateWithoutItemsInput;
}
