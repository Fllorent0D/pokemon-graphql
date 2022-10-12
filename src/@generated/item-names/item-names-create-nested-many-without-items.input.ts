import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_namesCreateWithoutItemsInput } from './item-names-create-without-items.input';
import { Type } from 'class-transformer';
import { item_namesCreateOrConnectWithoutItemsInput } from './item-names-create-or-connect-without-items.input';
import { item_namesWhereUniqueInput } from './item-names-where-unique.input';

@InputType()
export class item_namesCreateNestedManyWithoutItemsInput {

    @Field(() => [item_namesCreateWithoutItemsInput], {nullable:true})
    @Type(() => item_namesCreateWithoutItemsInput)
    create?: Array<item_namesCreateWithoutItemsInput>;

    @Field(() => [item_namesCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => item_namesCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<item_namesCreateOrConnectWithoutItemsInput>;

    @Field(() => [item_namesWhereUniqueInput], {nullable:true})
    @Type(() => item_namesWhereUniqueInput)
    connect?: Array<item_namesWhereUniqueInput>;
}
