import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_textCreateWithoutItemsInput } from './item-flavor-text-create-without-items.input';
import { Type } from 'class-transformer';
import { item_flavor_textCreateOrConnectWithoutItemsInput } from './item-flavor-text-create-or-connect-without-items.input';
import { item_flavor_textWhereUniqueInput } from './item-flavor-text-where-unique.input';

@InputType()
export class item_flavor_textUncheckedCreateNestedManyWithoutItemsInput {

    @Field(() => [item_flavor_textCreateWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_textCreateWithoutItemsInput)
    create?: Array<item_flavor_textCreateWithoutItemsInput>;

    @Field(() => [item_flavor_textCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => item_flavor_textCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<item_flavor_textCreateOrConnectWithoutItemsInput>;

    @Field(() => [item_flavor_textWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_textWhereUniqueInput)
    connect?: Array<item_flavor_textWhereUniqueInput>;
}
