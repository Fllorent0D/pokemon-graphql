import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_fling_effectsInput } from './items-create-without-item-fling-effects.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_fling_effectsInput } from './items-create-or-connect-without-item-fling-effects.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class itemsCreateNestedManyWithoutItem_fling_effectsInput {

    @Field(() => [itemsCreateWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => itemsCreateWithoutItem_fling_effectsInput)
    create?: Array<itemsCreateWithoutItem_fling_effectsInput>;

    @Field(() => [itemsCreateOrConnectWithoutItem_fling_effectsInput], {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_fling_effectsInput)
    connectOrCreate?: Array<itemsCreateOrConnectWithoutItem_fling_effectsInput>;

    @Field(() => [itemsWhereUniqueInput], {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: Array<itemsWhereUniqueInput>;
}
