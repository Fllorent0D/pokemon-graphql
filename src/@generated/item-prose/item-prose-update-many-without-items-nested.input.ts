import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_proseCreateWithoutItemsInput } from './item-prose-create-without-items.input';
import { Type } from 'class-transformer';
import { item_proseCreateOrConnectWithoutItemsInput } from './item-prose-create-or-connect-without-items.input';
import { item_proseUpsertWithWhereUniqueWithoutItemsInput } from './item-prose-upsert-with-where-unique-without-items.input';
import { item_proseWhereUniqueInput } from './item-prose-where-unique.input';
import { item_proseUpdateWithWhereUniqueWithoutItemsInput } from './item-prose-update-with-where-unique-without-items.input';
import { item_proseUpdateManyWithWhereWithoutItemsInput } from './item-prose-update-many-with-where-without-items.input';
import { item_proseScalarWhereInput } from './item-prose-scalar-where.input';

@InputType()
export class item_proseUpdateManyWithoutItemsNestedInput {

    @Field(() => [item_proseCreateWithoutItemsInput], {nullable:true})
    @Type(() => item_proseCreateWithoutItemsInput)
    create?: Array<item_proseCreateWithoutItemsInput>;

    @Field(() => [item_proseCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => item_proseCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<item_proseCreateOrConnectWithoutItemsInput>;

    @Field(() => [item_proseUpsertWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => item_proseUpsertWithWhereUniqueWithoutItemsInput)
    upsert?: Array<item_proseUpsertWithWhereUniqueWithoutItemsInput>;

    @Field(() => [item_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_proseWhereUniqueInput)
    set?: Array<item_proseWhereUniqueInput>;

    @Field(() => [item_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_proseWhereUniqueInput)
    disconnect?: Array<item_proseWhereUniqueInput>;

    @Field(() => [item_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_proseWhereUniqueInput)
    delete?: Array<item_proseWhereUniqueInput>;

    @Field(() => [item_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_proseWhereUniqueInput)
    connect?: Array<item_proseWhereUniqueInput>;

    @Field(() => [item_proseUpdateWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => item_proseUpdateWithWhereUniqueWithoutItemsInput)
    update?: Array<item_proseUpdateWithWhereUniqueWithoutItemsInput>;

    @Field(() => [item_proseUpdateManyWithWhereWithoutItemsInput], {nullable:true})
    @Type(() => item_proseUpdateManyWithWhereWithoutItemsInput)
    updateMany?: Array<item_proseUpdateManyWithWhereWithoutItemsInput>;

    @Field(() => [item_proseScalarWhereInput], {nullable:true})
    @Type(() => item_proseScalarWhereInput)
    deleteMany?: Array<item_proseScalarWhereInput>;
}
