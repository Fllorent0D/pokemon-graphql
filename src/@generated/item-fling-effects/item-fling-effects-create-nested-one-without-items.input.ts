import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effectsCreateWithoutItemsInput } from './item-fling-effects-create-without-items.input';
import { Type } from 'class-transformer';
import { item_fling_effectsCreateOrConnectWithoutItemsInput } from './item-fling-effects-create-or-connect-without-items.input';
import { item_fling_effectsWhereUniqueInput } from './item-fling-effects-where-unique.input';

@InputType()
export class item_fling_effectsCreateNestedOneWithoutItemsInput {

    @Field(() => item_fling_effectsCreateWithoutItemsInput, {nullable:true})
    @Type(() => item_fling_effectsCreateWithoutItemsInput)
    create?: item_fling_effectsCreateWithoutItemsInput;

    @Field(() => item_fling_effectsCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => item_fling_effectsCreateOrConnectWithoutItemsInput)
    connectOrCreate?: item_fling_effectsCreateOrConnectWithoutItemsInput;

    @Field(() => item_fling_effectsWhereUniqueInput, {nullable:true})
    @Type(() => item_fling_effectsWhereUniqueInput)
    connect?: item_fling_effectsWhereUniqueInput;
}
