import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_proseCreateWithoutItemsInput } from './item-prose-create-without-items.input';
import { Type } from 'class-transformer';
import { item_proseCreateOrConnectWithoutItemsInput } from './item-prose-create-or-connect-without-items.input';
import { item_proseWhereUniqueInput } from './item-prose-where-unique.input';

@InputType()
export class item_proseUncheckedCreateNestedManyWithoutItemsInput {

    @Field(() => [item_proseCreateWithoutItemsInput], {nullable:true})
    @Type(() => item_proseCreateWithoutItemsInput)
    create?: Array<item_proseCreateWithoutItemsInput>;

    @Field(() => [item_proseCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => item_proseCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<item_proseCreateOrConnectWithoutItemsInput>;

    @Field(() => [item_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_proseWhereUniqueInput)
    connect?: Array<item_proseWhereUniqueInput>;
}
