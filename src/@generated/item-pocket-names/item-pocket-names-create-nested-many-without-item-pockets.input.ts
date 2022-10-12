import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocket_namesCreateWithoutItem_pocketsInput } from './item-pocket-names-create-without-item-pockets.input';
import { Type } from 'class-transformer';
import { item_pocket_namesCreateOrConnectWithoutItem_pocketsInput } from './item-pocket-names-create-or-connect-without-item-pockets.input';
import { item_pocket_namesWhereUniqueInput } from './item-pocket-names-where-unique.input';

@InputType()
export class item_pocket_namesCreateNestedManyWithoutItem_pocketsInput {

    @Field(() => [item_pocket_namesCreateWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_pocket_namesCreateWithoutItem_pocketsInput)
    create?: Array<item_pocket_namesCreateWithoutItem_pocketsInput>;

    @Field(() => [item_pocket_namesCreateOrConnectWithoutItem_pocketsInput], {nullable:true})
    @Type(() => item_pocket_namesCreateOrConnectWithoutItem_pocketsInput)
    connectOrCreate?: Array<item_pocket_namesCreateOrConnectWithoutItem_pocketsInput>;

    @Field(() => [item_pocket_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_pocket_namesWhereUniqueInput)
    connect?: Array<item_pocket_namesWhereUniqueInput>;
}
